/**
 * FeaturedProjects — 대표 프로젝트 3개.
 * 큰 가로 카드 3개를 세로로 쌓아, 각 카드 안에 5단 구조:
 *   problem / role / actions / outcomes / tools
 */
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section bg-brand-greenDeep/50 rounded-4xl"
    >
      <SectionHeader
        id="projects-title"
        eyebrow="Chapter 02 · Featured Projects"
        title="숫자를 움직인 세 가지 이야기"
        description="문제 정의부터 출시 후 러닝까지, 한 장의 이야기로 정리했습니다."
        accent="red"
      />

      <motion.ul
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {projects.map((p) => (
          <motion.li
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
            }}
          >
            <ProjectCard project={p} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

function ProjectCard({ project }) {
  const c = getAccent(project.accent)
  return (
    <Card accent={project.accent}>
      {/* 헤더: 타이틀 + 기간 */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-700">
            {project.period}
          </p>
          <h3 className="mt-1 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-ink-700">{project.oneLiner}</p>
        </div>
        {/* 역할 배지 */}
        <Badge accent={project.accent}>{project.role.split('(')[0].trim()}</Badge>
      </div>

      {/* 본문: 문제/액션/성과 3블록 */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Block label="문제">{project.problem}</Block>
        <Block label="역할">{project.role}</Block>
        <Block label="액션">
          <ul className="list-disc space-y-1.5 pl-4">
            {project.actions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Block>
      </div>

      {/* 성과 카드 */}
      <div className="mt-8">
        <p className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-ink-700">
          성과
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {project.outcomes.map((o) => (
            <div
              key={o.metric}
              className={cn(
                'rounded-2xl border-2 border-ink-900 p-4',
                c.bg,
                'text-ink-900',
              )}
            >
              <p className="font-display text-2xl font-extrabold leading-tight">{o.metric}</p>
              <p className="mt-1 text-xs font-medium opacity-80">{o.context}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 사용 툴 */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink-900/30 bg-transparent px-3 py-1 text-xs font-semibold text-ink-700"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  )
}

function Block({ label, children }) {
  return (
    <div>
      <p className="mb-2 font-display text-xs font-bold uppercase tracking-widest text-ink-700">
        {label}
      </p>
      <div className="text-sm leading-relaxed text-ink-900">{children}</div>
    </div>
  )
}
