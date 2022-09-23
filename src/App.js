import './App.css';
import './components/Tops'
import Dash from './components/DashBoard'

function App() {
  return (
    <div>
      <header>
        <h1>DASHBOARD DO GAME - JUPITER</h1>
        <p>
          Venha e prove que você é capaz de fazer a melhor pontuação!
        </p>
      </header>
      <Dash/>
    </div>

  );
}

export default App;
