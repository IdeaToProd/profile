/**
 * Tailwind 설정: 이 프로젝트의 '디자인 토큰' 중앙 저장소.
 * 컬러 팔레트/폰트/애니메이션을 바꾸고 싶으면 여기만 고치면 된다.
 *
 * 참고: safelist에 accent 관련 동적 클래스를 등록해 두었다.
 *   src/data/*.js 에서 { accent: 'red' } 처럼 문자열로 색을 지정할 때,
 *   Tailwind의 JIT 컴파일러가 코드에서 그 클래스를 '발견'하지 못할 수 있기 때문.
 */
/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind가 클래스를 스캔할 파일 경로
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // --- 컬러 토큰 (플랜 확정안) ---
      colors: {
        brand: {
          green: '#0E3B2E', // 페이지 기본 배경(다크 그린)
          greenDeep: '#072218', // 섹션 구분 강조용 더 진한 그린
          cream: '#F4EFE4', // 메인 텍스트 / 카드 반전 배경
        },
        accent: {
          red: '#E4572E', // 비비드 토마토 레드
          yellow: '#F2C14E', // 따뜻한 머스터드 옐로우
          blue: '#3A86FF', // 로열 블루
          pink: '#FF6B9D', // 네온 핫핑크
        },
        ink: {
          900: '#0A0A0A', // 크림 배경 위 본문 색
          700: '#2A2A2A',
        },
      },
      // --- 폰트 ---
      fontFamily: {
        // 디스플레이용: 볼드/포스터 무드 (Google Fonts)
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        // 본문용: 한글/영문 혼용 안정적
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'sans-serif',
        ],
      },
      // --- 라운드(카드) ---
      borderRadius: {
        '4xl': '2rem', // 32px — '라운드가 큰 카드' 요구사항 충족
      },
      // --- 그림자(스티커 느낌) ---
      boxShadow: {
        sticker: '6px 6px 0 0 rgba(10,10,10,0.9)', // 오프셋 그림자 = 스티커/포스터 느낌
        stickerSm: '3px 3px 0 0 rgba(10,10,10,0.9)',
      },
      // --- 애니메이션: Hero 블롭 드리프트용 keyframe ---
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(20px, -15px) rotate(6deg)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-30px, 20px) rotate(-8deg)' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        driftSlow: 'driftSlow 24s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
