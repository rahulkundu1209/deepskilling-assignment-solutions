import './App.css'
import officeImage from './assets/image.png';
import OfficeDetails from './OfficeDetails';

function App() {
  const offices = [
    { Name: "Salt Lake Tech Park", Rent: 50000, Address: "Sector V, Salt Lake, Kolkata" },
    { Name: "Park Street Business Center", Rent: 70000, Address: "Park Street, Kolkata" },
    { Name: "EcoSpace Office", Rent: 60000, Address: "New Town, Kolkata" },
    { Name: "Camac Street Workspace", Rent: 55000, Address: "Camac Street, Kolkata" },
    { Name: "Ballygunge Corporate Hub", Rent: 65000, Address: "Ballygunge, Kolkata" }
  ]
  const element = "Office Space";
  const jsxatt = <img src={officeImage} width="40%" height="40%" alt='Office Space'/>
  

  return (
    <>
      <div>
        <h1>{element}, at Affordable Range</h1>
        {jsxatt}
        {offices.map((element, idx) => (
          <OfficeDetails key={idx} office={element}/>
        ))}
      </div>
    </>
  )
}

export default App
