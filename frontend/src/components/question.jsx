import React from "react";

function Question({ question }) {

    return (
        <div className="question-container">
            <p className="question-title">{question.question}</p>
        </div>
    );
}

export default Question