/**
 * useSectionInView — 현재 뷰포트에 보이는 섹션의 id를 돌려주는 훅.
 *   NavBar에서 "지금 어디 섹션을 보고 있지?"를 하이라이트하기 위해 사용.
 *
 * 구현: IntersectionObserver 하나로 여러 섹션을 관찰 → 가장 많이 보이는 섹션의 id를 state에 저장.
 *   - offset은 NavBar 높이(80px)만큼 위쪽을 깎아서 판정 기준을 현실감 있게 맞춤.
 */
import { useEffect, useState } from 'react'

export function useSectionInView(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        // 가장 많이 보이는(교차비율이 큰) 섹션 선택
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        // 상단 80px(NavBar)과 하단 40%를 무시 → 화면 중상단에 들어오면 활성으로 판정
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0.1, 0.3, 0.6],
      },
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
