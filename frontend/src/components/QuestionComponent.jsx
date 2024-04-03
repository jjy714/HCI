import { useState, useEffect } from "react";
import api from "../api";
import "../styles/Home.css";

function QuestionComponent() {
    const [question, setQuestion] = useState(null); // 초기 상태를 null로 설정
    const [selectedAnswer, setSelectedAnswer] = useState(""); // 사용자가 선택한 답변을 관리
    const id = 0; // ID를 어떻게 관리할지에 따라 변경할 수 있음

    useEffect(() => {
        get_question(id); // 초기 로드 시 질문 가져오기
    }, [id]); // id가 변경될 때마다 get_question 함수 호출

    const get_question = (id) => {
        api.get(`/api/questions/${id}`)
            .then((res) => res.data)
            .then((data) => {
                setQuestion(data); // 데이터를 상태에 저장
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const submitAnswer = (e) => {
        e.preventDefault(); // 폼 제출 기본 이벤트 방지
        api.post(`/api/answer/${id}/`, { answer: selectedAnswer }) // API 엔드포인트와 요청 본문 수정 필요
            .then((res) => {
                if (res.status === 200) alert("Question submitted!");
                else alert("Failed to submit answer.");
                get_question(id); // 질문 다시 가져오기
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <div>
                <h2>Question</h2>
                {question}
            </div>
            <form onSubmit={submitAnswer}>
                {/* 라디오 버튼에 대한 변경사항이 필요함 - 예시로 하나만 수정 */}
                <input 
                  type="radio" 
                  name="answer" 
                  value="True" 
                  onChange={(e) => setSelectedAnswer(e.target.value)} // 선택된 답변을 상태에 저장
                />
                <label>Yes</label>
                {/* 나머지 라디오 버튼도 유사하게 수정 */}
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default QuestionComponent;

// increase 는 pages 에서 관리 