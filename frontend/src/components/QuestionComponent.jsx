import { useState, useEffect } from "react";
import api from "../api";
import "../styles/Qna.css" 

function QuestionComponent() {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [count, setCount] = useState(1);
    const result=""
    useEffect(() => {
        get_question(count);
    }, [count]);

    const get_question = (count) => {
        api.get(`/api/questions/${count+3}`)
            .then((res) => {

                setQuestion(res.data[0]);
                console.log(res.data);
            })
            .catch((err) => alert(err));
    };
    //const get_answer from answer table and store into question table 
    const validateAnswer = (e)=>{
        let errors = false
        if(e.target.value == null){
            alert("Answer not submitted");
           
            errors = true;
            return errors
        }

    }
    const submitAnswer = (e) => {
        e.preventDefault();
        console.log(selectedAnswer); // Access the selected answer from state
    
        // Check if an answer is selected
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }
    
        // Convert the boolean value to a string ('true' or 'false') before sending
        api.put(`/api/answers/${count}`, { answerFromReact: selectedAnswer })
            .then((res) => {
                if (res.status === 200) {
                    alert("Answer submitted!");
                    setCount(count + 1);
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
            <div className="radio-container">
            <form onSubmit={submitAnswer}>
                <label>
                    Yes
                    <input
                        type="radio"
                        name="answer"
                        value="true"
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                </label>
                <label>
                    No
                    <input
                        type="radio"
                        name="answer"
                        value="false"
                        onChange={
                            (e) => 
                            setSelectedAnswer(e.target.value)
                        }
                    />
                </label>
                <input type="submit"></input>
            </form>
            </div>
        </div>
    );
}

export default QuestionComponent;
