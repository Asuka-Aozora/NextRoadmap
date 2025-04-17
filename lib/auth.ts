import {jwtDecode} from "jwt-decode";

export interface DecodedToken {
  userId: number;
  username: string;
  exp: number;
}

export const decodeToken = (token: string): DecodedToken => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return { userId: 0, username: "", exp: 0 } as DecodedToken;
  }
};
