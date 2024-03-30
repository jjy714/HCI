import { useState, useEffect } from "react";
import api from "../api";
import Question from "../components/question"
import "../styles/Home.css"

function qna() {

    const [question, getQuestion] = useState("");
    const [answer, setAnswer] = useState([]);
    
    useEffect(() => {
        get_question();
    }, []);

    const get_question = (id) => {
        api
            .get(`/api/questions/${id}`)
            .then((res) => res.data)
            .then((data) => {
                getQuestion(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const submitAnswer = (id) => {
        api
            .post(`/api/questions/${id}/`)
            .then((res) => {
                if (res.status === 200) alert("Question submitted!");
                else alert("Failed to submit answer.");
                get_question();
            })
            .catch((error) => alert(error));
    };


    return (
        <div>
            <div>
                <h2>Question</h2>
                {question.map((question) => (
                    <question somequestion={question} key={question.id} />
                ))}
            </div>
            <h2>{question.question}</h2>
            <form onSubmit={submitAnswer}>
            <input type='radio' name='answer' value='ans1' />{question.answer.id=1}
            <input type='radio' name='answer' value='ans2' />{question.answer.id=2}
            <input type='radio' name='answer' value='ans3' />{question.answer.id=3}
            <input type='radio' name='answer' value='ans4' />{question.answer.id=4}
            <input type='radio' name='answer' value='ans5' />{question.answer.id=5}
            <input type="submit"></input>
            </form>
        </div>
    );
}

export default qna;