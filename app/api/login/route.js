import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body || {};

    // 간단한 모의 인증: 샘플 계정
    if (email === 'user@example.com' && password === 'password') {
      return NextResponse.json({ success: true, token: 'mock-token' });
    }

    return new NextResponse(JSON.stringify({ message: '아이디 또는 비밀번호가 잘못되었습니다.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
