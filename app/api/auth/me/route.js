import { NextResponse } from "next/server";

import prisma from "@/prisma/prismadb";

import jwt from "jsonwebtoken";

export const GET = async (req) => {
  try {
    const access_token = req.cookies.get("access_token")?.value || null;

    if (!access_token)
      return NextResponse.json({ message: "Missing Token" }, { status: 400 });

    const userData = jwt.decode(access_token);

    if (!userData || typeof userData === "string")
      return NextResponse.json({ message: "Invalid Token" }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: {
        id: userData.id,
      },
    });

    const { password: userPass, isAdmin, ...restUser } = user;

    const response = NextResponse.json(restUser);

    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
