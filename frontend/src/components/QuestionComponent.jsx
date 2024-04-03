import { useState, useEffect } from "react";
import api from "../api";
import "../styles/Qna.css" // 확실히 Home.css가 임포트되었는지 확인하세요.

function QuestionComponent() {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(() => {
        get_question(count);
    }, [count]);

    const get_question = (count) => {
        api.get(`/api/questions/${count}`)
            .then((res) => {
                // API 응답 구조에 따라 적절한 데이터 처리
                // 예시에서는 응답 데이터가 직접 question 객체라고 가정
                setQuestion(res.data[0]); // 데이터를 상태에 저장
                console.log(res.data);
            })
            .catch((err) => alert(err));
    };
    //const get_answer from answer table and store into question table 

    const submitAnswer = (e) => {
        e.preventDefault();
        api.post(`/api/answers/`, {answerFromReact: selectedAnswer })
            .then((res) => {
                if (res.status === 200) {
                    alert("Answer submitted!");
                    setCount(count + 1); // 답변 제출 성공 시 count 증가
                } else {
                    alert("Failed to submit answer.");
                }
            })
            .catch((error) => alert(error));
    };
    return (
        <div>
            <div>
                <h1>Question</h1>
                {question ? (
                    <h1>{question.question}</h1>
                ) : (
                    <h1>Loading question...</h1>
                )}
            </div>
            <form onSubmit={submitAnswer}>
                <label>
                    Yes
                    <input
                        type="radio"
                        name="answer"
                        value="true"
                        onChange={(e) => setSelectedAnswer(true)}
                    />
                </label>
                <label>
                    No
                    <input
                        type="radio"
                        name="answer"
                        value="false"
                        onChange={(e) => setSelectedAnswer(false)}
                    />
                </label>
                {/* 나머지 라디오 버튼도 유사하게 수정 */}
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default QuestionComponent;
