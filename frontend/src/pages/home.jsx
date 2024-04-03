import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css" // 확실히 Home.css가 임포트되었는지 확인하세요.
import "../styles/button.css"


function Home() {
  return (
    <div className="home-container"> {/* className 추가 */}
      <h1> WFL</h1>
      <Link to= "/Qna" >
        <button>START</button>
      </Link>
    </div>
  );
}

export default Home;
