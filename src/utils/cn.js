/**
 * cn(...args) — clsx를 감싼 className 합성 헬퍼.
 *   예) cn('p-4', isActive && 'bg-accent-red', props.className)
 * clsx 한 줄만 감싼 이유: 프로젝트 전역에서 import 경로 한 가지로 통일하기 위함.
 */
import clsx from 'clsx'

export function cn(...inputs) {
  return clsx(inputs)
}
