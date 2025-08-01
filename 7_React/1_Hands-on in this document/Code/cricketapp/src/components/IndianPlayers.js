export function OddPlayers([first,,third,,fifth,,seventh,,nineth,,eleventh]){
  return(
    <div>
      <li>First : {first.name}</li>
      <li>Third : {third.name}</li>
      <li>Fifth : {fifth.name}</li>
      <li>Seventh : {seventh.name}</li>
      {/* <li>Nineth : {nineth.name}</li>
      <li>Eleventh : {eleventh.name}</li> */}
    </div>
  )
}

export function EvenPlayers([,second,,fourth,,sixth,,eighth,,tenth]){
  return(
    <div>
      <li>Second : {second.name}</li>
      <li>Fourth : {fourth.name}</li>
      <li>Sixth : {sixth.name}</li>
      {/* <li>Eighth : {eighth.name}</li>
      <li>Tenth : {tenth.name}</li> */}
    </div>
  )
}

const IndianPlayers = ({indianPlayers}) =>{
  return(
    <div>
      {indianPlayers.map((player, index) =>(
        <li key={index}>{player}</li>
      ))}
    </div>
  )
}

export default IndianPlayers;