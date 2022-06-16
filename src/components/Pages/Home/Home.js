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
        <span>Settings</span>
        <div className='settings-select'>
          {error && <ErrorMessage>Please fill in all fields</ErrorMessage>}
          <TextField 
            className='name' 
            label='Enter username' 
            variant="outlined" 
            onChange={(e) => setName(e.target.value)}
          />

          <TextField 
            className='category'
            select 
            label='Select a category'
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
            label="Select the difficulty level"
            variant='outlined'
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button 
            variant='contained' 
            color='primary' 
            size='large'
            onClick={handleSubmit}
          >
            Start quiz
          </Button>

        </div>
      </div>
      <img src='images/home.png' className='banner' alt='quiz image'/>
    </div>
  )
}

export default Home