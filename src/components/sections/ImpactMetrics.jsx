/**
 * ImpactMetrics — 성과 지표를 큰 숫자 카드로 강조.
 * 3분 요약의 핵심 섹션이므로 Projects 바로 뒤에 배치.
 */
import { motion } from 'framer-motion'
import { metrics } from '@/data/metrics'
import SectionHeader from '@/components/ui/SectionHeader'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

export default function ImpactMetrics() {
  return (
    <section id="metrics" aria-labelledby="metrics-title" className="section">
      <SectionHeader
        id="metrics-title"
        eyebrow="Chapter 03 · Impact"
        title="말보다 숫자로"
        description="단, 이 숫자들은 '왜 움직였는지'와 '다음에 무엇을 할지'까지 함께 기억하고 있습니다."
        accent="blue"
      />

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((m) => (
          <MetricCard key={m.label} metric={m} />
        ))}
      </motion.ul>
    </section>
  )
}

function MetricCard({ metric }) {
  const c = getAccent(metric.accent)
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      className={cn(
        // 카드 자체가 색면 — 다크 배경 위에서 리듬을 만든다
        'relative overflow-hidden rounded-4xl border-[3px] border-ink-900 p-6 shadow-sticker transition-transform hover:-translate-y-1',
        c.bg,
      )}
    >
      {/* 라벨 */}
      <p className="font-display text-xs font-bold uppercase tracking-widest text-ink-900/70">
        {metric.label}
      </p>
      {/* 큰 숫자 — 포스터 타이포 */}
      <p className="mt-3 font-display text-5xl font-extrabold leading-none text-ink-900 sm:text-6xl">
        {metric.value}
      </p>
      {/* 설명 */}
      <p className="mt-3 text-sm font-semibold text-ink-900/80">{metric.caption}</p>
    </motion.li>
  )
}
