/**
 * Hero — 첫 화면.
 *   - 좌측: 이름/역할/태그라인/강점 배지/CTA
 *   - 배경: 3개의 StickerBlob가 느리게 드리프트해 '포스터 레이어' 연출
 *   - 우측(또는 하단): 라운드 큰 '프로필 카드' 형태의 스티커 컬렉션
 *
 * 데이터는 @/data/profile.js 에서만 읽는다.
 */
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import StickerBlob from '@/components/ui/StickerBlob'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

export default function Hero() {
  return (
    // relative + overflow-hidden: 배경 블롭이 섹션 밖으로 튀어나가지 않도록
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* ----- 배경 레이어: 색 블롭 3개 ----- */}
      <StickerBlob
        accent="red"
        className="absolute -left-24 -top-24 h-[420px] w-[420px] opacity-90"
      />
      <StickerBlob
        accent="yellow"
        speed="slow"
        className="absolute right-[-80px] top-24 h-[340px] w-[340px] opacity-90"
      />
      <StickerBlob
        accent="blue"
        className="absolute bottom-[-80px] left-1/3 h-[300px] w-[300px] opacity-80"
      />

      {/* ----- 본문 ----- */}
      <div className="section relative pt-28 sm:pt-32 md:grid md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8">
          {/* 작은 소개 라벨 */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-brand-cream/40 bg-brand-greenDeep/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cream/80 backdrop-blur"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent-pink" aria-hidden="true" />
            {profile.availability}
          </motion.p>

          {/* 메인 타이틀 */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-[3rem] font-extrabold leading-[1.05] text-brand-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            안녕하세요,
            <br />
            저는 <span className="text-accent-yellow">{profile.name}</span>,<br />
            <span className="relative inline-block">
              {/* 밑줄 느낌의 손 그린 강조 */}
              <span className="relative z-10">{profile.role}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-2 -z-0 h-4 bg-accent-pink/80 md:h-5"
              />
            </span>{' '}
            입니다.
          </motion.h1>

          {/* 태그라인 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-cream/85 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          {/* 강점 배지 3개 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
            aria-label="핵심 강점"
          >
            {profile.strengths.map((s) => (
              <Badge key={s.label} accent={s.accent}>
                {s.label}
              </Badge>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {profile.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* 오른쪽 사이드 스티커 카드 */}
        <motion.aside
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 md:col-span-4 md:mt-0"
          aria-label="프로필 사이드 카드"
        >
          <HeroSideCard />
        </motion.aside>
      </div>
    </section>
  )
}

/**
 * 오른쪽 카드: 명함/스티커 느낌.
 * 실제 데이터는 profile을 재사용하되, 카드 하나에 핵심 아이템 3가지를 나열.
 */
function HeroSideCard() {
  const highlightAccent = getAccent('pink')
  return (
    <div className="relative">
      {/* 뒤에 겹친 카드 그림자(레이어드 느낌) */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 rotate-6 rounded-4xl border-[3px] border-ink-900',
          highlightAccent.bg,
        )}
      />
      <div className="relative rounded-4xl border-[3px] border-ink-900 bg-brand-cream p-6 shadow-sticker">
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ink-700">
          Product Manager Card
        </p>
        <p className="mt-2 font-display text-4xl font-extrabold text-ink-900">{profile.name}</p>

        <dl className="mt-6 space-y-3 text-sm">
          <Row label="일하는 방식" value="데이터 · 공감 · 실험" />
          <Row label="주 사용 툴" value="Amplitude · Figma · Notion" />
          <Row label="좋아하는 단위" value="코호트, 가드레일 지표" />
        </dl>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge accent="red" size="sm">
            PRD
          </Badge>
          <Badge accent="blue" size="sm">
            Experiment
          </Badge>
          <Badge accent="yellow" size="sm">
            Roadmap
          </Badge>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-ink-900/10 pb-2 last:border-none">
      <dt className="font-semibold text-ink-700">{label}</dt>
      <dd className="text-right text-ink-900">{value}</dd>
    </div>
  )
}
