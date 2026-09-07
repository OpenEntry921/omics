# OMICS 공식 웹사이트

전통 발효문화, 스마트 발효기기, 발효 키트·콘텐츠를 소개하는 React + TypeScript 기반 반응형 사이트입니다. 현재 단계는 **제품 출시 전 안내와 외부 판매처·이메일 문의 연결**까지 제공하며 결제나 회원 기능은 포함하지 않습니다.

## 1. 실행 방법

Node.js 20 이상에서 아래 명령을 실행합니다.

```bash
npm install
npm run dev
```

배포 전에는 `npm run build`로 오류를 확인합니다. 결과물은 `dist/`에 생성됩니다.

## 2. 자주 수정하는 위치

| 수정 항목 | 파일/폴더 | 방법 |
|---|---|---|
| 제품명·설명·상태·가격 | `src/data/products.ts` | 상품 객체의 `name`, `status`, `price` 수정. 가격 미확정이면 `price`를 작성하지 않습니다. |
| 쿠팡 링크 | `src/data/site.ts`, 상품의 `salesChannels` | 채널 URL 또는 상품별 `productUrl`을 입력하고 `enabled: true`로 바꿉니다. |
| 스마트스토어 링크 | 위와 동일 | `naver` 채널에 실제 URL만 입력합니다. |
| 문의 이메일·전화 | `src/data/site.ts`의 `company` | `email`, `phone` 값을 변경합니다. |
| 로고 | `public/brand/logo/` | 확정 로고를 규칙에 맞춰 넣고 `src/components/Layout.tsx`의 텍스트 로고를 이미지로 교체합니다. |
| 제품 이미지 | `public/images/products/` 또는 `public/images/kits/` | 동일 파일명으로 넣거나 상품의 `images` 경로를 수정합니다. 현재 UI의 `Placeholder`를 실제 `<img>`로 교체합니다. |

## 3. 판매 상태와 새 콘텐츠 추가

- **출시 예정 → 판매 중:** `src/data/products.ts`에서 `status`를 `coming-soon`에서 `on-sale`로, 실제 `price`를 원 단위 숫자로 입력합니다. 카드의 한국어 상태 표시는 판매 운영 전 상태 매핑 컴포넌트와 함께 확정해야 합니다.
- **새 상품:** 기존 객체를 복사해 중복되지 않는 `id`와 영문 `slug`를 지정하고 모든 필드를 채웁니다. 판매 링크는 상품의 `salesChannels`에 채널별로 추가합니다.
- **새 레시피:** `src/data/recipes.ts`의 `recipes` 배열에 객체를 추가합니다. 영문 `slug`, 대체 텍스트로도 쓰일 명확한 제목, 주의사항을 반드시 작성합니다.
- 외부 링크는 가짜 주소를 쓰지 말고 실제 주소가 있을 때만 `enabled: true`로 설정합니다. 새 창 링크에는 UI 컴포넌트가 `noopener noreferrer`를 적용합니다.

## 4. 이미지 폴더와 파일명

모든 이미지 폴더의 README에 권장 용도를 적었습니다. 파일명은 **영문 소문자와 하이픈**만 사용합니다. 모바일 이미지는 `-mobile`, 투명 배경은 `-transparent` 접미사를 씁니다. 이미지가 없어도 비율이 유지되는 placeholder가 표시됩니다.

## 5. 환경설정과 분석

`.env.example`을 `.env`로 복사해 사용합니다. 아직 분석 도구 ID는 넣지 않았습니다. `src/lib/analytics.ts`의 공통 이벤트를 실제 분석 SDK 어댑터로 연결할 수 있습니다. 상품 상세, 판매처, 쿠팡, 스마트스토어, 문의, 출시 알림, 레시피 이벤트가 정의되어 있습니다.

## 6. 배포

`npm run build` 후 생성되는 `dist/`를 정적 호스팅(Vercel, Netlify, Cloudflare Pages 등)에 배포합니다. BrowserRouter를 사용하므로 모든 영문 경로가 `index.html`로 fallback 되도록 호스팅을 설정하고, 실제 도메인이 확정되면 `sitemap.xml`과 canonical 기준 URL을 교체합니다.

## 7. 아직 구현하지 않은 기능

- 장바구니, 주문서, 결제, 회원/비회원 주문, 배송 조회
- 쿠폰, 정기 결제, 재고, 취소·교환 처리
- 문의 폼 서버 및 데이터베이스(현재 이메일 프로그램 연결)
- 관리자 화면 및 쇼핑몰 API 동기화
- 실제 분석 SDK, 다국어 라우팅, 상품/레시피 구조화 데이터
- 확정된 개인정보처리방침, 이용약관, 전자상거래 고지

자사몰 단계에서는 상품 데이터 API, 인증, 장바구니 상태, 주문·결제 제공사, 배송/재고 시스템, 약관 동의와 보안·개인정보 체계를 차례로 연결해야 합니다. 화면에는 현재 작동하지 않는 기능을 노출하지 않았습니다.
