/**
 * Badge — "스티커" 같은 느낌의 라벨.
 *   - 굵은 테두리 + 오프셋 그림자(boxShadow.stickerSm) 로 포스터/명함 무드
 *   - accent prop 으로 색만 바꿔 여러 색 스티커처럼 변주
 *
 * Props:
 *   - accent: 'red'|'yellow'|'blue'|'pink' (기본: yellow)
 *   - size: 'sm'|'md' (기본: md)
 *   - as: 렌더링할 태그 (기본 'span', 필요 시 'a'로 변경)
 */
import { cn } from '@/utils/cn'
import { getAccent } from '@/utils/accent'

export default function Badge({
  children,
  accent = 'yellow',
  size = 'md',
  as: Tag = 'span',
  className,
  ...rest
}) {
  const c = getAccent(accent) // 정적 클래스 매핑
  // 사이즈별 패딩/폰트
  const sizeCls = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'

  return (
    <Tag
      className={cn(
        // 기본 모양: 라운드, 크림 배경, 검정 테두리
        'inline-flex items-center gap-1.5 rounded-full border-2 border-ink-900 bg-brand-cream font-semibold text-ink-900',
        // 스티커 그림자 + 미세한 기울임(hover 시 정렬)
        'shadow-stickerSm transition-transform duration-200 hover:-rotate-2',
        sizeCls,
        className,
      )}
      {...rest}
    >
      {/* 왼쪽 색 점 — accent 시그널 역할 (색맹 대비: 텍스트는 그대로 유지) */}
      <span className={cn('h-2 w-2 rounded-full', c.bg)} aria-hidden="true" />
      {children}
    </Tag>
  )
}
