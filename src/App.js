import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Activities from './components/Activities/Activities';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div>
      <Header></Header>
      <Activities></Activities>
      <Questions></Questions>
    </div>
  );
}

export default App;
