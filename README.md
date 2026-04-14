# PM 포트폴리오 · Product Manager Portfolio

프로덕트 매니저 **김하민**(더미)의 싱글 페이지 포트폴리오.
채용 담당자/협업자가 **3분 안에** 강점·대표 프로젝트·일하는 방식·성과를 파악할 수 있게 설계했습니다.

> 다크 그린 베이스 + 4색(레드/옐로우/블루/핑크) 악센트. 라운드 큰 카드와 스티커 배지로 **명함·포스터 무드**를 살렸습니다.

---

## 실행 방법

```bash
# 1. 의존성 설치 (최초 1회)
npm install

# 2. 개발 서버 — http://localhost:5173
npm run dev

# 3. 프로덕션 빌드
npm run build

# 4. 빌드 결과 로컬 미리보기
npm run preview
```

---

## 기술 스택

| 항목 | 선택 | 근거 |
|---|---|---|
| 프레임워크 | React 18 (JSX) | SSR 불필요한 SPA |
| 빌드 | Vite 5 | 빠른 HMR |
| 스타일 | Tailwind CSS 3 | `tailwind.config.js`에 디자인 토큰 집중 |
| 애니메이션 | Framer Motion | 스크롤/entrance/stagger 선언적 구현 |
| 폰트 | Bricolage Grotesque (display) + Pretendard (body) | 포스터 무드 + 한글 가독성 |

---

## 파일 구조

```
claude-code-mastery/
├─ index.html                     # SEO 메타(OG/Twitter/JSON-LD)
├─ vite.config.js                 # '@/' alias
├─ tailwind.config.js             # 🎨 디자인 토큰 (컬러/폰트/애니메이션)
├─ postcss.config.js
├─ public/
│  ├─ favicon.svg                 # 브랜드 컬러 스티커 아이콘
│  ├─ robots.txt                  # 크롤러 허용
│  └─ sitemap.xml                 # 단일 URL 사이트맵
└─ src/
   ├─ main.jsx                    # 엔트리
   ├─ App.jsx                     # 7개 섹션 조립
   ├─ styles/global.css           # Tailwind + 폰트 + 접근성
   ├─ components/
   │  ├─ layout/
   │  │  ├─ NavBar.jsx            # 앵커 네비 (스크롤 응축)
   │  │  └─ Footer.jsx            # 반복 CTA
   │  ├─ sections/                # 🧩 섹션 7종
   │  │  ├─ Hero.jsx
   │  │  ├─ About.jsx
   │  │  ├─ FeaturedProjects.jsx
   │  │  ├─ ImpactMetrics.jsx
   │  │  ├─ WorkStyle.jsx
   │  │  ├─ SkillsTools.jsx
   │  │  └─ Contact.jsx
   │  └─ ui/                      # 🧱 재사용 UI
   │     ├─ Badge.jsx             # 스티커 배지
   │     ├─ Card.jsx              # 라운드 큰 카드 쉘
   │     ├─ Button.jsx            # CTA
   │     ├─ SectionHeader.jsx     # eyebrow + 제목 + 설명
   │     └─ StickerBlob.jsx       # 배경 색 블롭
   ├─ hooks/
   │  ├─ useSectionInView.js      # NavBar 하이라이트
   │  └─ useScrolled.js           # NavBar 응축
   ├─ data/                       # ⚡ 교체 포인트 (아래 표 참고)
   │  ├─ profile.js
   │  ├─ about.js
   │  ├─ projects.js
   │  ├─ metrics.js
   │  ├─ workStyle.js
   │  ├─ skills.js
   │  ├─ contact.js
   │  └─ nav.js
   └─ utils/
      ├─ cn.js                    # clsx 래퍼
      └─ accent.js                # accent 문자열 → 정적 Tailwind 클래스 매핑
```

---

## 수정 포인트 (실제 내용으로 교체할 때)

**컴포넌트 파일(`src/components/**`)은 건드릴 필요 없음** — 설계의 핵심 계약입니다.

| 바꿀 것 | 수정 파일 |
|---|---|
| 이름 / 태그라인 / 강점 / CTA / 채용 가용 여부 | `src/data/profile.js` |
| PM 철학 + 4 pillars | `src/data/about.js` |
| 대표 프로젝트 3개 | `src/data/projects.js` |
| Impact Metrics 카드 | `src/data/metrics.js` |
| 일하는 방식 3카드 | `src/data/workStyle.js` |
| Skills & Tools 4그룹 | `src/data/skills.js` |
| 이메일/링크드인/깃허브/노션 | `src/data/contact.js` |
| NavBar 앵커 라벨/순서 | `src/data/nav.js` |
| **SEO 메타 태그** (title/description/OG/canonical) | `index.html` |
| **Schema.org JSON-LD** (Person/sameAs) | `index.html` |
| **sitemap / robots** 도메인 | `public/sitemap.xml`, `public/robots.txt` |
| 컬러 팔레트 | `tailwind.config.js` > `theme.extend.colors` |
| 폰트 교체 | `index.html` + `tailwind.config.js` + `src/styles/global.css` |

### accent 사용 규칙
`src/data/*.js`의 `accent` 필드는 `'red' | 'yellow' | 'blue' | 'pink'` 중 하나여야 합니다.
새로운 색을 추가하려면 `tailwind.config.js`의 `colors.accent.*`와 `src/utils/accent.js` 양쪽에 추가해 주세요.

---

## SEO 체크리스트

배포 전 `index.html`에서 아래 값들을 실제 도메인/이미지로 교체하세요.

- [ ] `<title>` 태그 — 검색 결과 타이틀
- [ ] `<meta name="description">` — 160자 이내
- [ ] `<link rel="canonical">` — 실제 도메인
- [ ] `og:url`, `og:image` — 1200×630 PNG를 `public/og-image.png`로 저장 후 경로 연결
- [ ] `twitter:image` — og 이미지 재사용
- [ ] Schema.org JSON-LD `url`, `sameAs`, `image` — 실제 프로필 링크로 교체
- [ ] `public/sitemap.xml`의 `<loc>`, `lastmod`
- [ ] `public/robots.txt`의 `Sitemap:` URL

추가 권장:
- Google Search Console에 사이트 등록 → sitemap 제출
- Lighthouse SEO/접근성 90+ 확인 (`npm run build && npm run preview` 후 테스트)

---

## 접근성

- 모든 섹션: `<section aria-labelledby>` + `<h2 id>`
- 외부 링크: `rel="noopener noreferrer"` + `aria-label`
- 포커스 링: `focus-visible:ring-2` 악센트 컬러
- Skip Link: 최상단 첫 Tab에서 "본문으로 건너뛰기" 노출
- `prefers-reduced-motion`: CSS 애니메이션 및 Framer Motion 모두 정지
- 색만으로 의미 전달 금지 — 배지는 항상 텍스트 라벨 동반

---

## 라이선스

개인 포트폴리오용 예시. 구조/코드는 자유 사용, 더미 데이터(이름/프로젝트/성과)는 교체해 주세요.
