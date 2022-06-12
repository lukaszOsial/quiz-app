import './Home.css';
import { TextField } from '@mui/material';
import Categories from '../../../Data/Categories';
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = ({ name, setName, fetchQuestion }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if(!category || !difficulty || !name) {
      setError(true)
      return;
    } else {
      setError(false)
      fetchQuestion(category, difficulty)
      navigate('/quiz');
    }
  }
  
  return (
    <div className='content'>
      <div className='settings'>
        <span>Ustawienia</span>
        <div className='settings-select'>
          {error && <ErrorMessage>Proszę wypełnić wszystkie pola</ErrorMessage>}
          <TextField 
            className='name' 
            label='Podaj imię' 
            variant="outlined" 
            onChange={(e) => setName(e.target.value)}
          />

          <TextField 
            className='category'
            select 
            label='Wybierz kategorię'
            variant='outlined'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className='level'
            select
            label="Wybierz poziom trudności"
            variant='outlined'
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Łatwy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Średni
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Trudny
            </MenuItem>
          </TextField>
          <Button 
            variant='contained' 
            color='primary' 
            size='large'
            onClick={handleSubmit}
          >
            Rozpocznij quiz
          </Button>

        </div>
      </div>
      <img src='images/home.png' className='banner' alt='quiz image'/>
    </div>
  )
}

export default Home