import './App.css';
import IndianPlayers, { EvenPlayers, OddPlayers } from './components/IndianPlayers';
import ListofPlayers from './components/ListofPlayers';

function App() {
  const players = [
    { name: "Rohit Sharma", score: "87" },
    { name: "Shubman Gill", score: "64" },
    { name: "Virat Kohli", score: "90" },
    { name: "Shreyas Iyer", score: "86" },
    { name: "KL Rahul", score: "78" },
    { name: "Hardik Pandya", score: "78" },
    { name: "Ravindra Jadeja", score: "54" },
    { name: "Jasprit Bumrah", score: "47" },
    { name: "Mohammed Shami", score: "61" },
    { name: "Kuldeep Yadav", score: "70" },
    { name: "Suryakumar Yadav", score: "45" }
  ]

  const T20Player = [
    "Rohit Sharma",
    "Virat Kohli",
    "Hardik Pandya",
    "Jasprit Bumrah",
  ];
  const RanjiTrophyPlayers = [
    "Cheteshwar Pujara",
    "Ajinkya Rahane",
    "Prithvi Shaw",
    "Hanuma Vihari"
  ];

  const indianPlayers = [...T20Player, ...RanjiTrophyPlayers];

  const flag = true;
  if(flag===true){return (
    <div className="App">
      <ListofPlayers players={players}/>
    </div>
  );}
  else{
    return(
      <div className="App">
        <div>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          {OddPlayers(players)}
          <hr/>
          <h2>Even Players</h2>
          {EvenPlayers(players)}
        </div>
        <hr/>
        <div>
          <h1>List of Indian Players Merged:</h1>
          <IndianPlayers indianPlayers={indianPlayers}/>
        </div>
      </div>
    )
  }
}

export default App;
