/**
 * NavBar — 상단 고정 앵커 네비.
 *   - useSectionInView로 현재 섹션 하이라이트
 *   - useScrolled로 스크롤 80px↑에서 응축(backdrop-blur + 축소 패딩)
 *   - 좌측 로고(이름), 중앙 앵커 링크, 우측 Contact CTA
 */
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { navItems } from '@/data/nav'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/utils/cn'

const SECTION_IDS = ['hero', ...navItems.map((n) => n.id)]

export default function NavBar() {
  const activeId = useSectionInView(SECTION_IDS)
  const scrolled = useScrolled(80)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        // 상단 고정
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        // 스크롤 시 응축
        scrolled
          ? 'border-b border-brand-cream/10 bg-brand-green/85 py-2 backdrop-blur-md'
          : 'bg-transparent py-4',
      )}
    >
      <nav
        aria-label="섹션 내비게이션"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        {/* 로고: 첫 글자 뱃지 + 이름 */}
        <a
          href="#hero"
          className="flex items-center gap-2.5"
          aria-label="페이지 상단으로"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-cream bg-accent-yellow font-display text-sm font-extrabold text-ink-900">
            {profile.name[0]}
          </span>
          <span className="hidden font-display text-base font-extrabold text-brand-cream sm:inline">
            {profile.name}
          </span>
        </a>

        {/* 중앙: 앵커 링크 (모바일에서는 축약) */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors',
                    active
                      ? 'bg-brand-cream text-ink-900'
                      : 'text-brand-cream/80 hover:text-brand-cream',
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* 우측: Contact CTA (모바일에서도 유지) */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-brand-cream bg-transparent px-4 py-1.5 text-sm font-bold text-brand-cream transition-colors hover:bg-brand-cream hover:text-ink-900"
        >
          Contact
          <span aria-hidden="true">→</span>
        </a>
      </nav>
    </motion.header>
  )
}
