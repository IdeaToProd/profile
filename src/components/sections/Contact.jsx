/**
 * Contact — 이메일 + 3개 외부 링크.
 * 큰 CTA 블록 + 링크 카드 4개.
 */
import { motion } from 'framer-motion'
import { contacts } from '@/data/contact'
import { profile } from '@/data/profile'
import SectionHeader from '@/components/ui/SectionHeader'
import { getAccent } from '@/utils/accent'
import { cn } from '@/utils/cn'

// 링크 타입별 아이콘 (SVG inline)
const icons = {
  email: (
    <path d="M3 7l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  linkedin: (
    <path d="M4 4h4v4H4V4zm0 6h4v10H4V10zm7 0h4v2c1-1 2-2 4-2 3 0 4 2 4 5v5h-4v-4c0-1 0-3-2-3s-2 2-2 3v4h-4V10z" />
  ),
  github: (
    <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 015 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0012 2z" />
  ),
  notion: (
    <path d="M4 4h12l4 4v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm4 6v8l8-8v8" />
  ),
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <SectionHeader
        id="contact-title"
        eyebrow="Chapter 06 · Contact"
        title="같이 일하고 싶으시다면"
        description="아래 어느 채널로 연락 주셔도 24시간 내 답장드립니다."
        accent="red"
      />

      {/* 메인 CTA 블록 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.6 }}
        className="mb-10 rounded-4xl border-[3px] border-ink-900 bg-accent-yellow p-8 shadow-sticker sm:p-12"
      >
        <p className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
          {profile.availability}
        </p>
        <p className="mt-3 max-w-xl text-base text-ink-900/80">
          빠른 대화는 이메일이 가장 좋아요. 이력 기반 대화는 노션을, 코드 이야기는 깃허브를
          확인해 주세요.
        </p>
        <a
          href={contacts[0].href}
          className="mt-6 inline-flex items-center gap-2 rounded-full border-[3px] border-ink-900 bg-ink-900 px-6 py-3 font-display text-base font-bold text-brand-cream transition-transform hover:scale-[1.02]"
        >
          이메일로 대화 시작하기 →
        </a>
      </motion.div>

      {/* 링크 카드 4개 */}
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {contacts.map((contact) => (
          <ContactLink key={contact.type} contact={contact} />
        ))}
      </motion.ul>
    </section>
  )
}

function ContactLink({ contact }) {
  const c = getAccent(contact.accent)
  const isExternal = contact.href.startsWith('http')
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <a
        href={contact.href}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        aria-label={`${contact.type}로 연락하기: ${contact.label}`}
        className={cn(
          'group flex h-full flex-col gap-4 rounded-4xl border-[3px] border-ink-900 bg-brand-cream p-6 transition-transform hover:-translate-y-1',
        )}
      >
        <span
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink-900',
            c.bg,
          )}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ink-900"
          >
            {icons[contact.type]}
          </svg>
        </span>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-ink-700">
            {contact.type}
          </p>
          <p className="mt-1 font-display text-lg font-bold text-ink-900 group-hover:underline">
            {contact.label}
          </p>
        </div>
      </a>
    </motion.li>
  )
}
