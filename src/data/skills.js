/**
 * skills.js — Skills & Tools 섹션.
 * PM 역량을 4그룹으로 나눠 각 툴을 태그로 노출.
 * group별 accent 색으로 시각적 구분.
 */
export const skills = [
  {
    group: 'PM',
    accent: 'yellow',
    items: [
      'PRD / 1-pager 작성',
      '로드맵 / OKR',
      'RICE · ICE 우선순위',
      '고객 인터뷰 설계',
      '로드맵 vs 발견 밸런싱',
    ],
  },
  {
    group: 'Data',
    accent: 'blue',
    items: [
      'Amplitude',
      'GA4',
      'Mixpanel',
      'SQL (BigQuery)',
      'A/B 테스트 설계',
      '코호트 분석',
    ],
  },
  {
    group: 'Collaboration',
    accent: 'pink',
    items: ['Jira', 'Linear', 'Notion', 'Figma 리뷰', 'Slack Workflow', '이해관계자 얼라인'],
  },
  {
    group: 'AI',
    accent: 'red',
    items: [
      'LLM 프롬프트 설계',
      'Claude / GPT 워크플로',
      'AI 기능 스펙 정의',
      'RAG 컨텍스트 기획',
    ],
  },
]
