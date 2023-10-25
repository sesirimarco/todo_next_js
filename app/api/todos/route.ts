import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const { url } = request; // Obtén la URL de la solicitud
  const urlObj = new URL(url);
  const urlSearchParams = new URLSearchParams(urlObj.search);

  const id = urlSearchParams?.get('id');
  let result;
  if (id) {
    result = await db.todo.findFirst({ where: { id } });
  } else {
    result = await db.todo.findMany({});
  }

  return NextResponse.json(result);
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const result = await db.todo.create({ data });
  return NextResponse.json(result);
};
