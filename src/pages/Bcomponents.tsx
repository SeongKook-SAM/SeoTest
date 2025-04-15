import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const Bcomponents = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>{id} 페이지</title>
        <meta name="description" content="동적 파라미터 테스트" />
        {/* Open Graph */}
        <meta property="og:title" content={`${id} 페이지`} />
        <meta property="og:description" content={`${id} 페이지`} />
        <meta property="og:image" content="https://placehold.co/1200" />
        <meta property="og:url" content="https://www.google.com" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content="동적 파라미터 테스트" />
        <meta property="twitter:description" content={`${id} 페이지`} />
        <meta property="twitter:image" content="https://placehold.co/1200" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        <h1>
          {id} 동적 컴포넌트 테스트{"(B 컴포넌트)"}
        </h1>
        <p>
          {id} 동적 컴포넌트 테스트{"(B 컴포넌트)"}
        </p>
        <Link to="/">홈으로 이동</Link>
        <Link to="/a">A 컴포넌트페이지로 이동</Link>
      </main>
    </>
  );
};

export default Bcomponents;
