import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Acomponents = () => {
  const [isState, setIsState] = useState(0);
  return (
    <>
      <Helmet>
        <title>A컴포넌트 테스트</title>
        <meta name="description" content="A컴포넌트 테스트(A) 설명" />
        {/* Open Graph */}
        <meta property="og:title" content="A컴포넌트 테스트(A) 타이틀" />
        <meta
          property="og:description"
          content="A컴포넌트 테스트 연습입니다. A컴포넌트 테스트 연습입니다. A컴포넌트 테스트 연습입니다."
        />
        <meta property="og:image" content="https://placehold.co/1200" />
        <meta property="og:url" content="https://test-seo-sam.netlify.app//a" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content="A컴포넌트 테스트 연습(A)" />
        <meta
          property="twitter:description"
          content="A컴포넌트 테스트 연습입니다."
        />
        <meta property="twitter:image" content="https://placehold.co/1200" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        <h1>A컴포넌트 테스트</h1>
        <p>
          A컴포넌트 테스트 연습입니다.A컴포넌트 테스트 연습입니다.A컴포넌트
          테스트 연습입니다.
        </p>

        <section>
          <button type="button" onClick={() => setIsState(isState + 1)}>
            증가
          </button>
          <button type="button" onClick={() => setIsState(isState - 1)}>
            감소
          </button>
          <p>{isState}</p>
        </section>

        <Link to="/">홈으로 이동</Link>
        <Link to={`${Math.random()}`}>B 페이지로 이동</Link>
      </main>
    </>
  );
};

export default Acomponents;
