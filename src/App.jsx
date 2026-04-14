/**
 * App.jsx — 전체 페이지 조립.
 *   <main> 하나 안에 7개 섹션을 순서대로 렌더.
 *   NavBar는 <main> 밖에 fixed로 뜨고, Footer는 <main> 뒤에.
 *
 * 섹션 순서(3분 파악 목표):
 *   Hero → About → Featured Projects → Impact Metrics
 *   → Work Style → Skills & Tools → Contact
 */
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ImpactMetrics from '@/components/sections/ImpactMetrics'
import WorkStyle from '@/components/sections/WorkStyle'
import SkillsTools from '@/components/sections/SkillsTools'
import Contact from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      {/* 접근성: 첫 Tab에 포커스되는 Skip Link — 본문으로 바로 점프 */}
      <a href="#main" className="sr-only-focusable">
        본문으로 건너뛰기
      </a>

      {/* 고정 상단 네비 */}
      <NavBar />

      {/* 본문 */}
      <main id="main">
        <Hero />
        <About />
        <FeaturedProjects />
        <ImpactMetrics />
        <WorkStyle />
        <SkillsTools />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
