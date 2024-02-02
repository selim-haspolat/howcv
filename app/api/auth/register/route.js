import { NextResponse } from "next/server";

import prisma from "../../../../prisma/prismadb";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { email, password, userName } = body;
    const hashedPassword = await bcrypt.hash(password, 11);

    if (!email || !password || !userName)
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });

    const user = await prisma.user.create({
      data: { email, userName, password: hashedPassword },
    });

    const token = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      // @ts-ignore
      process.env.JWT,
      { expiresIn: "1h" }
    );

    const { password: userPass, isAdmin, ...restUser } = user;

    const response = NextResponse.json(restUser);

    response.cookies.set("access_token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    if(error.code === 'P2002') {
      return NextResponse.json({ message: `${error.meta.target} already exists` }, { status: 400 });
    }

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
