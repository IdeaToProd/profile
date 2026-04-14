/**
 * projects.js — 대표 프로젝트 3개.
 *
 * 각 카드는 프로젝트를 한 눈에 이해시키는 5단 구조:
 *   problem(문제) → role(역할) → actions(액션 3줄) → outcomes(성과 카드) → tools(사용 툴)
 *
 * 실제 프로젝트로 교체할 때는 항목 수를 줄여도 OK —
 * 섹션 컴포넌트는 배열 길이에 따라 유연하게 렌더한다.
 */
export const projects = [
  {
    id: 'commerce-retention',
    title: '커머스 리텐션 리빌드',
    period: '2024.06 — 2024.12',
    oneLiner: '정체된 D30 리텐션을 온보딩 재설계로 끌어올린 프로젝트.',
    problem:
      'D30 리텐션이 6개월째 횡보. 신규 유저의 두 번째 구매 전환이 업계 평균의 60% 수준에 머무름.',
    role: '리드 PM (엔지니어 5 / 디자이너 2 / 데이터 1)',
    actions: [
      '신규 유저 코호트 3종을 분해해 이탈 구간을 첫 주문 직후 7일로 특정',
      '온보딩 플로우 3단계로 재설계, 홈 개인화 모듈 A/B 3회차 실행',
      '성공 지표를 GMV가 아닌 "두 번째 구매까지의 시간"으로 재정의',
    ],
    outcomes: [
      { metric: 'D30 +24%p', context: '3개월 내 달성' },
      { metric: 'GMV +38%', context: '신규 코호트' },
      { metric: '첫 재구매 22일 → 11일', context: '중앙값' },
    ],
    tools: ['Amplitude', 'Figma', 'Jira', 'SQL', 'Notion'],
    accent: 'red',
  },
  {
    id: 'ai-assistant',
    title: 'AI 업무 어시스턴트 0→1',
    period: '2023.09 — 2024.05',
    oneLiner: '사내 지식을 연결한 LLM 기반 어시스턴트를 런칭.',
    problem:
      '흩어진 문서와 슬랙 스레드 탓에 신규 입사자 온보딩에 평균 6주 소요. 지식 검색 빈도가 생산성 병목.',
    role: '0→1 PM (엔지니어 3 / 디자이너 1)',
    actions: [
      'LLM 프롬프트/컨텍스트 설계 및 실패 패턴 30개를 테스트셋으로 정리',
      '답변 신뢰도를 "출처 링크 클릭률"로 조작 정의하여 모호함 제거',
      '내부 베타 → 일부 팀 → 전사 순으로 4단계 롤아웃, 각 단계 KPI 게이트 설정',
    ],
    outcomes: [
      { metric: '온보딩 6주 → 3.5주', context: '신규 입사자 평균' },
      { metric: 'DAU 420명', context: '런칭 8주 후' },
      { metric: '답변 만족도 4.3/5', context: '주간 피드백' },
    ],
    tools: ['Claude API', 'Python', 'Notion API', 'Mixpanel', 'Linear'],
    accent: 'blue',
  },
  {
    id: 'payments-reliability',
    title: '결제 실패율 반감 프로젝트',
    period: '2023.02 — 2023.07',
    oneLiner: '결제 실패로 인한 이탈을 CS·엔지니어링과 함께 구조적으로 개선.',
    problem:
      '결제 실패율이 1.8%로 업계 상위권 수준으로 악화. CS 인입의 34%가 결제 문의였음.',
    role: '도메인 PM (엔지니어 4 / CS 2 / 리스크팀 1)',
    actions: [
      'CS 티켓 1,200건을 실패 코드 기준으로 클러스터링해 TOP 3 유형 도출',
      '재시도 UX + 대체 수단 제안 플로우를 신설, 위험 거래만 보안 단계 강화',
      '실패 시 유저에게 보내는 문구를 15종 → 6종으로 축소, 번역 일관성 확보',
    ],
    outcomes: [
      { metric: '결제 실패율 1.8% → 0.9%', context: '5개월' },
      { metric: 'CS 결제 문의 -41%', context: '월평균' },
      { metric: '재시도 성공률 67%', context: '신규 플로우 기준' },
    ],
    tools: ['Datadog', 'Looker', 'Figma', 'Slack Workflow'],
    accent: 'yellow',
  },
]
