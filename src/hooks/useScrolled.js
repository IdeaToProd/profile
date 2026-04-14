/**
 * useScrolled — 페이지가 특정 픽셀(기본 80px) 이상 스크롤됐는지 boolean으로 반환.
 *   NavBar 응축 효과(배경/높이 변화)에 사용.
 */
import { useEffect, useState } from 'react'

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll() // 마운트 시 초기 상태 1회 세팅
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
