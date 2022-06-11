import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
import Result from './components/Pages/Result/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage: "url(./images/background.jpg)"}}>
        <Header />
        <Routes>
          <Route path="/" element ={<Home />} exact></Route>
          <Route path="/quiz" element ={<Quiz />} exact></Route>
          <Route path="/result" element ={<Result />} exact></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
