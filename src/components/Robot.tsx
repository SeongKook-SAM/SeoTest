// robot.tsx
import { Helmet } from "react-helmet-async";

const Robot = () => (
  <Helmet>
    {/* 모든 검색엔진이 페이지를 색인하도록 지시 */}
    <meta name="robots" content="index,follow" />

    {/* 구글 전용 지시문 (보통 robots 메타 태그와 동일하게 설정) */}
    <meta name="googlebot" content="index,follow" />
    <meta
      name="google-site-verification"
      content="gGRk2qjCXecQ6WmdXgE_3Ov_vvwdljbEvuBd8WJOT38"
    />

    {/* 네이버 사이트 검증 코드 (네이버에서 사이트 소유권 확인용) */}
    {/* 네이버에서 요구하는 경우, 네이버 서치어드바이저의 검증 코드를 입력합니다 */}
    <meta
      name="naver-site-verification"
      content="044ba04d558188b71772939fb8691f8dc41d57c6"
    />
  </Helmet>
);

export default Robot;
