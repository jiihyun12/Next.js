import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends : ["next/core-web-vitals", "next/typescript", "prettier"], // 충돌방지 "prettier" 추가
    rules : {
      // semi : ["error"], // ex) 세미콜론 없을 시 에러
      // quotes : ["error", "double"], // ex) 쿼터는 무조건 대문자,
      // "prefer-arrow-callback" : ["error"], // ex) 콜백함수는 무조건 에로우 함수
    }
  }),
];

export default eslintConfig;