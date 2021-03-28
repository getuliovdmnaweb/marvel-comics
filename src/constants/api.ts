import Crypto from "crypto-js";

export const TIMESTAMP = Date.now().toString();
export const PUBLIC_KEY = "0809db874a5f01a311e38489126ffa1f";
export const PRIVATE_KEY = "c177714d46e73cf66077e20fbb38e24649aa4862";
export const MD5_HASH = Crypto.MD5(
  TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY
).toString();
