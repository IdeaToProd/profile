/**
 * about.js — About 섹션(PM 철학 + 4개 pillars).
 * pillar.key 는 내부 식별자일 뿐, UI에는 title만 노출됨.
 */
export const about = {
  // 굵직한 한 문장 + 부연 설명 2~3문장 구조 권장
  philosophy:
    "좋은 프로덕트는 '더 많이 만드는 것'이 아니라 '더 정확히 고르는 것'에서 출발한다고 믿습니다.",
  subPhilosophy:
    '문제를 줄여 쓰고, 지표를 날카롭게 정의하고, 팀이 같은 그림을 보게 만드는 일을 합니다. 확신이 없을 땐 사용자 옆에 앉아서 보고, 확신이 생기면 과감하게 배포합니다.',
  // 4 pillars — About 하단에 4개 카드로 렌더
  pillars: [
    {
      key: 'problem',
      title: '문제 정의',
      body: '"무엇을 만들까"보다 "무엇을 풀까"에 시간을 더 씁니다. 인터뷰 10건, 정량 코호트 3개를 세트로 가져갑니다.',
      accent: 'red',
    },
    {
      key: 'priority',
      title: '우선순위',
      body: 'RICE / Opportunity Solution Tree로 후보를 정렬하고, 한 분기당 Bet 3개 이하로 제한합니다.',
      accent: 'yellow',
    },
    {
      key: 'execution',
      title: '실행력',
      body: '스펙은 지표와 실패 조건을 함께 씁니다. "이 숫자가 안 움직이면 중단"이 명시되어 있어야 출시합니다.',
      accent: 'blue',
    },
    {
      key: 'collab',
      title: '협업',
      body: '디자이너/엔지니어/CS의 언어로 번역합니다. 결정의 맥락을 기록해 3개월 뒤의 나도 이해하게 만듭니다.',
      accent: 'pink',
    },
  ],
}
