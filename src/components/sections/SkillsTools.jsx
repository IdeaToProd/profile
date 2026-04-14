/**
 * SkillsTools — 4그룹(PM/Data/Collaboration/AI)을 태그 형태로.
 * 각 그룹은 큰 타이틀 + 세로로 나열된 태그 리스트.
 */
import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import SectionHeader from '@/components/ui/SectionHeader'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

export default function SkillsTools() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <SectionHeader
        id="skills-title"
        eyebrow="Chapter 05 · Skills & Tools"
        title="도구는 수단, 판단은 주체"
        description="새 도구는 빠르게 익히고, 낡은 프레임워크는 과감히 버립니다."
        accent="yellow"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skills.map((group) => (
          <SkillGroup key={group.group} group={group} />
        ))}
      </motion.div>
    </section>
  )
}

function SkillGroup({ group }) {
  const c = getAccent(group.accent)
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="rounded-4xl border-[3px] border-brand-cream/20 bg-brand-greenDeep/40 p-6"
    >
      {/* 그룹 제목 + 색점 */}
      <div className="flex items-center gap-2.5">
        <span className={cn('h-3 w-3 rounded-full', c.bg)} aria-hidden="true" />
        <h3 className="font-display text-xl font-bold text-brand-cream">{group.group}</h3>
      </div>
      {/* 태그 세로 배치 */}
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className={cn(
              'rounded-full border-2 px-3 py-1.5 text-xs font-semibold text-brand-cream transition-colors',
              'border-brand-cream/30 hover:border-brand-cream',
              // hover 시 그룹 색 배경
              'hover:bg-brand-cream hover:text-ink-900',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
