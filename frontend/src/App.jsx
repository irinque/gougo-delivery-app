import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import MainPage from './pages/Main/MainPage.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={ <MainPage /> }/>
      </Routes>
    </>
  );
}

export default App;
