import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name={"Rahul"}
        School={"Bankura Zilla School"}
        total={463}
        goal={5}
      />
    </div>
  );
}

export default App;
