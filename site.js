// 과외쏙쏙 사이트 설정 — 브랜드·도메인·색상처럼 이 사이트에서만 다른 값.
// 문구(홈·과목·지역·학교 본문)는 content.js, 교육정보 글은 guides.js 에 있다.
export default {
  name: '과외쏙쏙',
  nameEn: 'GwaeoSokSok',
  domain: 'gwaeosoksok.com',
  origin: 'https://gwaeosoksok.com',
  tel: '010-3038-8978',
  telRaw: '01030388978',
  tagline: '개념이 쏙쏙 들어오는 이해 중심 1:1 과외',
  // 검색결과·SNS 요약 한 줄
  desc: '초·중등 개념 이해 중심 1:1 방문·화상 과외. 외우기 전에 이해하게 해서 오래 남는 공부를 만듭니다. 무료 상담 010-3038-8978',
  // 디자인 토큰 — 기본(c1)·보조(c2)·버튼(c3)·포인트(c4)
  colors: { c1: '#134E4A', c2: '#CCFBF1', c3: '#0D9488', c4: '#FB7185' },
  // 로고 마크 안 글자
  logoLetter: '쏙',
  // 지역 페이지까지 만드는 공통 과목(순서대로 메뉴에 표시)과 특화 프로그램
  subjects: ['math', 'english', 'korean', 'science', 'social'],
  extras: ['essay', 'hangul'],
  // IndexNow 키 — /<키>.txt 로도 응답한다
  indexNowKey: 'd1a7c3e9b5f24d6a8e2c9b4f7a1d3e5c',
  // 본문 "최종 업데이트" 표시와 사이트맵 lastmod
  updated: '2026-09-16',
  mailFrom: 'noreply@gwaeosoksok.com',
  mailTo: 'hhhyunee3@naver.com',
};
