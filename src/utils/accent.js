/**
 * accent.js — accent 문자열('red'|'yellow'|'blue'|'pink')을
 *             실제 Tailwind 클래스 세트로 변환하는 정적 매핑.
 *
 * ⚠️ Tailwind의 JIT 컴파일러는 소스 코드를 정규식으로 스캔하기 때문에,
 *    `bg-accent-${accent}` 같은 동적 문자열은 실제 사용된 클래스로 인식하지 못한다.
 *    그래서 아래처럼 "완전한 클래스 이름"을 미리 박아두는 매핑이 필수다.
 */
export const accentClasses = {
  red: {
    bg: 'bg-accent-red',
    text: 'text-accent-red',
    border: 'border-accent-red',
    ring: 'ring-accent-red',
    fill: 'fill-accent-red',
  },
  yellow: {
    bg: 'bg-accent-yellow',
    text: 'text-accent-yellow',
    border: 'border-accent-yellow',
    ring: 'ring-accent-yellow',
    fill: 'fill-accent-yellow',
  },
  blue: {
    bg: 'bg-accent-blue',
    text: 'text-accent-blue',
    border: 'border-accent-blue',
    ring: 'ring-accent-blue',
    fill: 'fill-accent-blue',
  },
  pink: {
    bg: 'bg-accent-pink',
    text: 'text-accent-pink',
    border: 'border-accent-pink',
    ring: 'ring-accent-pink',
    fill: 'fill-accent-pink',
  },
}

/**
 * 안전 접근 헬퍼: 잘못된 키가 들어와도 에러 대신 yellow fallback.
 */
export function getAccent(key) {
  return accentClasses[key] ?? accentClasses.yellow
}
