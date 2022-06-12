import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import './Quiz.css';

const Quiz = ({ name, score, setScore, questions, setQuestions }) => {

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);


  useEffect(() => {
    console.log(questions)
    setOptions(questions && handleShuffle([
      questions[currentQuestion]?.correct_answer,
      ...questions[currentQuestion]?.incorrect_answers
      ])
    );
  }, [questions]);

  console.log(options);

  const handleShuffle = (secondOptions) => {
    return secondOptions.sort(() =>Math.random() - 0.5);
  }

  return (
    <div className='quiz'>
      <span className='subtitle'>
        Welcome, {name}
      </span>
      {questions ? (
      <>
        <div className='quiz-info'>
          <span>{questions[currentQuestion].category}</span>
          <span> Score: {score}</span>
        </div>

        <Questions />
        
      </>
      ) : (
        <CircularProgress 
          style={{margin: 100}}
          color="inherit"
          size={150}
          thickness={0.8}
        />
      )}
    </div>
  )
}

export default Quiz