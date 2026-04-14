/**
 * Card — 라운드가 큰 '포스터 카드' 쉘.
 *   - 기본: 크림 배경 + 검정 두꺼운 테두리 + 오프셋 그림자
 *   - accent prop 있으면 카드 상단에 색 바(top stripe) 추가 → 시각적 리듬
 *
 * Props:
 *   - accent: 옵션. 있으면 상단 색바 렌더
 *   - as: 기본 'article' (시맨틱 우선)
 *   - padded: 내부 패딩을 줄지(true) 말지(false) — 전체 배경 이미지 카드용
 *   - className: 추가 클래스
 */
import { cn } from '@/utils/cn'
import { getAccent } from '@/utils/accent'

export default function Card({
  children,
  accent,
  as: Tag = 'article',
  padded = true,
  className,
  ...rest
}) {
  const c = accent ? getAccent(accent) : null

  return (
    <Tag
      className={cn(
        // 모양: 4xl(32px) 라운드 + 굵은 테두리
        'relative overflow-hidden rounded-4xl border-[3px] border-ink-900 bg-brand-cream text-ink-900',
        // 오프셋 그림자로 스티커 느낌, hover 시 살짝 떠오름
        'shadow-sticker transition-all duration-300 hover:-translate-y-1 hover:translate-x-0.5',
        className,
      )}
      {...rest}
    >
      {/* 상단 컬러 바 — accent 있을 때만 */}
      {c && <div className={cn('h-3 w-full', c.bg)} aria-hidden="true" />}
      <div className={cn(padded && 'p-6 sm:p-8')}>{children}</div>
    </Tag>
  )
}
