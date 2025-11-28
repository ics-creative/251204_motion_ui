import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages用のベースパス設定
  // 環境変数VITE_BASE_PATHが設定されている場合はそれを使用、なければ"./"（開発環境用）
  base: process.env.VITE_BASE_PATH || "./",
});
