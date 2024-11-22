import type { APIRoute } from 'astro';
import jwt from 'jsonwebtoken';

const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'admin123'; // In production, use hashed passwords and env variables

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1d' });
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Set-Cookie': `adminToken=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
      },
    });
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 401,
  });
}