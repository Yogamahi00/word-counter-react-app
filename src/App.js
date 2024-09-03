import './App.css';
import Header from "./components/Header"
import PageNotFound from './components/PageNotFound';
import WordCounter from './components/WordCounter';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<WordCounter />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>     
    </div>
  );
}

export default App;
