/**
 * Button — CTA 전용 버튼.
 *   - Framer Motion의 whileHover/whileTap으로 미묘한 피드백
 *   - variant: 'primary'(크림 채움) | 'ghost'(외곽선만)
 *   - <a> 로도 쓰도록 `as` prop 지원 (앵커/메일 링크 모두 커버)
 */
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export default function Button({
  children,
  variant = 'primary',
  as = 'a',
  className,
  ...rest
}) {
  // motion은 a/button 양쪽 지원: motion.a / motion.button
  const MotionTag = as === 'button' ? motion.button : motion.a

  // variant 별 스타일 (둘 다 검정 두꺼운 테두리 공유 → 포스터 느낌)
  const variants = {
    primary:
      'bg-brand-cream text-ink-900 border-ink-900 shadow-sticker hover:bg-accent-yellow',
    ghost:
      'bg-transparent text-brand-cream border-brand-cream hover:bg-brand-cream hover:text-ink-900',
  }

  return (
    <MotionTag
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border-[3px] px-6 py-3 font-display text-base font-bold transition-colors duration-200',
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
      {/* 오른쪽 화살표 → CTA임을 시각화 */}
      <span aria-hidden="true" className="translate-y-[1px]">
        →
      </span>
    </MotionTag>
  )
}
