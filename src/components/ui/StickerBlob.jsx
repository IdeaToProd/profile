/**
 * StickerBlob — Hero 배경에 깔리는 '레이어드 색면'.
 *   SVG 부정형 블롭을 accent 색으로 채워 포스터 느낌을 만든다.
 *   CSS keyframe(tailwind.config의 'drift'/'driftSlow')으로 느리게 드리프트.
 *
 * Props:
 *   - accent: 'red'|'yellow'|'blue'|'pink'
 *   - speed: 'slow' | 'fast' (drift keyframe 선택)
 *   - className: 위치/크기 조정 (부모가 relative면 absolute로 배치 가능)
 */
import { cn } from '@/utils/cn'
import { getAccent } from '@/utils/accent'

export default function StickerBlob({ accent = 'yellow', speed = 'fast', className }) {
  const c = getAccent(accent)
  const animCls = speed === 'slow' ? 'animate-driftSlow' : 'animate-drift'

  return (
    <svg
      // 장식 요소 — 스크린리더에게는 숨김
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={cn('pointer-events-none select-none', animCls, className)}
    >
      {/* 부드러운 8각 비정형 도형 — 손으로 오려낸 스티커 느낌 */}
      <path
        d="M44.3,-66.1C56.4,-59.9,64.1,-45.1,69.5,-30.2C74.9,-15.3,78,-0.3,74.5,13.3C71,26.9,60.8,39.1,48.4,48.6C36.1,58.2,21.5,65,5.5,68.2C-10.4,71.5,-27.7,71.3,-40.5,63.6C-53.2,55.8,-61.3,40.5,-66.2,25.1C-71.1,9.7,-72.9,-5.8,-69.2,-20C-65.6,-34.2,-56.6,-47.1,-44.4,-53.5C-32.3,-60,-17,-60.1,-0.7,-59.1C15.6,-58.1,32.3,-72.3,44.3,-66.1Z"
        transform="translate(100 100)"
        className={c.fill}
      />
    </svg>
  )
}
