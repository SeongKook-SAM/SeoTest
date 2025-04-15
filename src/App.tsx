import { Helmet } from "react-helmet-async";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Helmet>
        <title>SEO 최적화 테스트</title>
        <meta name="description" content="SEO 최적화 테스트(홈)" />
        {/* Open Graph */}
        <meta property="og:title" content="SEO 최적화 테스트(홈)" />
        <meta
          property="og:description"
          content="SEO 최적화 테스트 연습입니다.(홈)"
        />
        <meta property="og:image" content="https://placehold.co/1200" />
        <meta property="og:url" content="https://www.google.com" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content="SEO 최적화 테스트(홈)" />
        <meta
          property="twitter:description"
          content="SEO 최적화 테스트 연습입니다.(홈)"
        />
        <meta property="twitter:image" content="https://placehold.co/1200" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        <h1>SEO 최적화 테스트(홈)</h1>
        <p>
          SEO 최적화 테스트 연습입니다.(홈)SEO 최적화 테스트 연습입니다.(홈)SEO
          최적화 테스트 연습입니다.(홈)
        </p>
        <Link to="/a">A 페이지로 이동</Link>
        <Link to={`${Math.random()}`}>B 페이지로 이동</Link>
      </main>
    </>
  );
}

export default App;
