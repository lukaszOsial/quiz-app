import { Button } from "@mui/material";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './Question.css';
import { useNavigate } from "react-router-dom";


const Question = ({ currentQuestion, setCurrentQuestion, questions, options, correct, setScore, score }) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSelect = (i) => {
      if(selected === i && selected === correct) {
        return "select";
      } else if (selected === i && selected !== correct){
        return "wrong";
      } else if (i === correct) {
        return "select";
      }
    };

    const handleCheck = (i) => {
      setSelected(i);
      if(i === correct) setScore(score + 1);
      setError(false);
    };

    const handleNext = () => {
      if(currentQuestion> 8) {
        navigate('/result');
      }else if(selected){
        setCurrentQuestion(currentQuestion + 1);
        setSelected();
      }else{
        setError("Please select an option first");
      }
    }

    const handleQuit = () => {

    }

  return (
    <div className="question">
        <h1>Question {currentQuestion + 1}</h1>
        <div className="question-box">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {error && <ErrorMessage></ErrorMessage>}
              {options && 
              options.map(i => (
              <button onClick={() => {handleCheck(i)}} 
                className={`single-option ${selected && handleSelect(i)}`} 
                key={i} 
                disabled={selected}
              >{i}</button>))}
            </div>
            <div className="controls">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{width: 190}}
                  href="/"
                  onClick={handleQuit}
                >
                  Quit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{width: 190}}
                  onClick={handleNext}
                >
                  Next question
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Question