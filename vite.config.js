// Vite 설정: React 플러그인 활성화 + '@/' 별칭으로 src/ 접근을 간결하게.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // React Fast Refresh + JSX 변환
  base: '/profile/', // GitHub Pages 서브경로 배포용
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 예) import Card from '@/components/ui/Card'
    },
  },
  server: {
    port: 5173, // 개발 서버 기본 포트
    open: false, // 브라우저 자동 실행 끔 (CLI 환경 고려)
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // 프로덕션 빌드에서는 소스맵 제외 → 번들 작게
  },
})
