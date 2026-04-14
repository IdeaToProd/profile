/**
 * workStyle.js — WorkStyle 섹션 (협업/문서화/실험 3개 카드).
 * 각 카드는 제목 + 설명 1문장 + 실천 항목 3~4개로 구성.
 */
export const workStyle = [
  {
    key: 'collab',
    title: '협업',
    lead: '각 직군의 언어로 번역하는 게 PM의 1차 업무라고 생각합니다.',
    items: [
      '디자이너에겐 유저 문제를, 엔지니어에겐 제약 조건을 먼저 이야기합니다',
      'CS와 주 1회 정기 싱크, 리얼 티켓을 스프린트 리뷰에 매번 한 건 이상 공유',
      '결정권자와 실행자 사이의 전달자 역할을 자임합니다',
    ],
    accent: 'pink',
  },
  {
    key: 'docs',
    title: '문서화',
    lead: '모든 기능은 1-pager에서 시작합니다.',
    items: [
      '포맷 고정: Why → 지표 → 실패 조건 → 다음 스텝',
      'PRD 작성 후 회고 시 같은 문서에 "실제로 일어난 일"을 병기',
      '의사결정 로그를 Notion에 남겨 3개월 뒤 복기 가능하게',
    ],
    accent: 'yellow',
  },
  {
    key: 'experiment',
    title: '실험',
    lead: '좋은 실험은 이기기 전에 멈출 조건이 있는 실험입니다.',
    items: [
      '가설은 "X를 하면 Y가 Z%p 움직인다" 형태로 숫자까지 못박기',
      '중단 조건(Guardrail Metric)과 최소 샘플 사이즈를 사전 합의',
      '실패한 실험의 러닝을 별도 Wiki에 축적, 다음 분기 아이디어 풀로 재활용',
    ],
    accent: 'blue',
  },
]
