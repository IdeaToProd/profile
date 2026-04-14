/**
 * Footer — 반복 CTA + 카피라이트 + 외부 링크 미러.
 * 방문자가 끝까지 스크롤했을 때 이메일/노션 링크가 한 번 더 보이도록.
 */
import { profile } from '@/data/profile'
import { contacts } from '@/data/contact'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-brand-cream/10 bg-brand-greenDeep">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        {/* 이름 + 짧은 설명 */}
        <div>
          <p className="font-display text-xl font-extrabold text-brand-cream">
            {profile.name} · {profile.role}
          </p>
          <p className="mt-1 text-sm text-brand-cream/60">
            © {year}. 모든 기록은 더 나은 판단을 위한 자료입니다.
          </p>
        </div>

        {/* 링크 미러 */}
        <ul className="flex flex-wrap gap-4 text-sm">
          {contacts.map((c) => {
            const isExternal = c.href.startsWith('http')
            return (
              <li key={c.type}>
                <a
                  href={c.href}
                  {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="font-semibold text-brand-cream/80 underline-offset-4 hover:text-brand-cream hover:underline"
                >
                  {c.type}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
