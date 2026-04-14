/**
 * WorkStyle — 협업/문서화/실험 3가지 일하는 방식.
 * 카드 3개를 한 줄로 깔고, 각 카드에 실천 항목 bullet list.
 */
import { motion } from 'framer-motion'
import { workStyle } from '@/data/workStyle'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

export default function WorkStyle() {
  return (
    <section id="workstyle" aria-labelledby="workstyle-title" className="section">
      <SectionHeader
        id="workstyle-title"
        eyebrow="Chapter 04 · Work Style"
        title="이렇게 일합니다"
        description="팀이 같은 그림을 보게 만드는 세 가지 실천."
        accent="pink"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-6 md:grid-cols-3"
      >
        {workStyle.map((w) => (
          <motion.div
            key={w.key}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <StyleCard item={w} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function StyleCard({ item }) {
  const c = getAccent(item.accent)
  return (
    <Card accent={item.accent} className="h-full">
      <h3 className="font-display text-2xl font-bold text-ink-900">{item.title}</h3>
      <p className={cn('mt-2 text-sm font-semibold', c.text)}>{item.lead}</p>
      <ul className="mt-5 space-y-2.5">
        {item.items.map((i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-700">
            {/* 커스텀 불릿: 색 점 */}
            <span
              aria-hidden="true"
              className={cn('mt-[6px] h-2 w-2 shrink-0 rounded-full', c.bg)}
            />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
