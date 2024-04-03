import { useState, useEffect } from "react";
import api from "../api";
import Question from "../components/question"; // Question 컴포넌트를 사용한다고 가정
import "../styles/Home.css";

function Home() {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = () => {
        api
            .get("/api/questions/")
            .then((res) => res.data)
            .then((data) => {
                setQuestions(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const submitAnswer = (e) => {
        e.preventDefault();
        // 예시로, 선택된 답변을 콘솔에 로그합니다. 실제 구현에서는 이 값을 API로 전송할 수 있습니다.
        console.log(selectedAnswer);
        // API 호출 예시: api.post("/api/answers/", { answer: selectedAnswer })
        // .then(res => ...)
        // .catch(err => ...);

        // 폼 제출 후 선택한 답변 초기화
        setSelectedAnswer("");
    };

    return (
        <div>
            <div>
                <h2>Questions</h2>
                {questions.map((question) => (
                    <Question question={question} key={question.id} />
                ))}
            </div>
            <h2>Answer the Question</h2>
            <form onSubmit={submitAnswer}>
                <div>
                    <input
                        type="radio"
                        id="yes"
                        name="answer"
                        value="Yes"
                        checked={selectedAnswer === "Yes"}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="no"
                        name="answer"
                        value="No"
                        checked={selectedAnswer === "No"}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                    <label htmlFor="no">No</label>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;
