/**
 * profile.js — Hero / NavBar / Footer 가 공용으로 읽는 프로필 정보.
 * 실제 배포 시 이 파일의 값만 바꾸면 전체 UI에 반영됨.
 *
 * accent 필드는 tailwind.config.js의 accent.{red|yellow|blue|pink} 키와 일치해야 한다.
 * 잘못된 문자열을 쓰면 Badge가 기본 색으로 렌더됨(이중 안전장치).
 */
export const profile = {
  name: '김하민',
  role: 'Product Manager',
  // 3분 내 파악의 핵심 1줄. 너무 길지 않게.
  tagline: '사용자의 불편을 구조로 풀어내는 PM. 데이터와 공감 사이에서 다음 한 걸음을 결정합니다.',
  // 핵심 강점 3개 — Hero 스티커 배지로 노출
  strengths: [
    { label: '문제 정의', accent: 'red' },
    { label: '데이터 기반 의사결정', accent: 'blue' },
    { label: '크로스펑셔널 실행', accent: 'yellow' },
  ],
  // Hero 하단 CTA 버튼 2개
  ctas: [
    { label: '프로젝트 보기', href: '#projects', variant: 'primary' },
    { label: '이메일 보내기', href: 'mailto:hamin@example.com', variant: 'ghost' },
  ],
  // NavBar에 노출할 간단한 프로필 뱃지
  availability: '새로운 프로덕트 기회를 찾고 있어요',
}
