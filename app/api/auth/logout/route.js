import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const response = NextResponse.json({ message: "Logged out" });

    response.cookies.set("access_token", "", {
      httpOnly: true,
      path: "/",
      maxAge: 60,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
