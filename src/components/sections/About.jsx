/**
 * About — PM 철학 + 4 pillars (문제정의/우선순위/실행력/협업).
 * 좌측에 큰 철학 문장, 우측에 4개 카드 그리드.
 */
import { motion } from 'framer-motion'
import { about } from '@/data/about'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <SectionHeader
        id="about-title"
        eyebrow="Chapter 01 · About"
        title="프로덕트를 대하는 나의 태도"
        description="PM은 결정의 품질을 책임지는 사람이라고 생각합니다. 아래 네 가지 태도로 그 품질을 지킵니다."
        accent="yellow"
      />

      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        {/* 철학 문장 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <p className="font-display text-2xl font-bold leading-snug text-brand-cream sm:text-3xl">
            "{about.philosophy}"
          </p>
          <p className="mt-6 text-base leading-relaxed text-brand-cream/75">
            {about.subPhilosophy}
          </p>
        </motion.div>

        {/* 4 pillars 그리드 */}
        <motion.div
          // 자식에 stagger 적용
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-5 sm:grid-cols-2 md:col-span-7"
        >
          {about.pillars.map((p, idx) => (
            <PillarCard key={p.key} pillar={p} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PillarCard({ pillar, index }) {
  const c = getAccent(pillar.accent)
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card accent={pillar.accent}>
        <div className="flex items-center gap-3">
          {/* 인덱스 번호 + 색 점 */}
          <span
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink-900 font-display text-sm font-bold text-ink-900',
              c.bg,
            )}
          >
            0{index + 1}
          </span>
          <h3 className="font-display text-2xl font-bold text-ink-900">{pillar.title}</h3>
        </div>
        <p className="mt-4 text-base leading-relaxed text-ink-700">{pillar.body}</p>
      </Card>
    </motion.div>
  )
}
