import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionComponent from "../components/QuestionComponent";
import "../styles/Qna.css";
import Result from "./Result";

function Qna() {
    const navigate = useNavigate();
 
    const ToHome= () => {
      navigate("/");
    };
    return <div>
            <QuestionComponent />
            <button onClick={ToHome}> EXIT </button>
        </div>
}

export default Qna;
