import './Home.css';
import { TextField } from '@mui/material';

const Home = () => {
  return (
    <div className='content'>
      <div className='settings'>
        <span>Ustawienia</span>
        <div className='settings-select'>
          <TextField 
            className='name' 
            label='Podaj imię' 
            variant="outlined" 
          />
          <TextField 
            className='category'
            select 
            label='Wybierz kategorię'
            variant='outlined'
          />
        </div>
      </div>
      <img src='images/home.png' className='banner' alt='quiz image'/>
    </div>
  )
}

export default Home