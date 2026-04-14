/**
 * SectionHeader — 모든 섹션 상단의 공통 헤더.
 *   eyebrow(작은 라벨) + title(큰 제목) + description(보조 설명) 3단 구조.
 *   entrance 애니메이션을 내장해 섹션 진입 시 부드럽게 등장.
 *
 * Props:
 *   - id: <h2>의 id (aria-labelledby 연결용, 접근성 필수)
 *   - eyebrow: 'Chapter 01' 같은 짧은 라벨
 *   - title: 큰 제목 (한두 줄)
 *   - description: 선택, 한 문단
 *   - accent: eyebrow 색 (기본 yellow)
 */
import { motion } from 'framer-motion'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

export default function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  accent = 'yellow',
  align = 'left',
}) {
  const c = getAccent(accent)
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      // entrance: 위에서 살짝 떨어지며 페이드인
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mb-10 flex flex-col gap-3 sm:mb-14', alignCls)}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-widest',
            c.text,
          )}
        >
          {/* 타이포그래픽 장식: 짧은 가로 선 */}
          <span className={cn('h-[2px] w-6', c.bg)} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="font-display text-4xl font-extrabold leading-tight text-brand-cream sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-brand-cream/80 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
