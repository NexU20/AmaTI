import * as jose from "jose";
import { NextRequest } from "next/server";

const config = {
  secret: new TextEncoder().encode(process.env.SECRET_TOKEN),
};

export async function isAuthenticated(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (token) {
    try {
      const decoded: jose.JWTVerifyResult = await jose.jwtVerify(
        token,
        config.secret
      );

      if (decoded.payload?.role === "prodi") {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error("isAuthenticated error: ", err);

      return false;
    }
  } else {
    return false;
  }
}
