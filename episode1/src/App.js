import "./App.css";

function App() {
  const Planets = (props) => {
    return <div>{props.name}</div>;
  };

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map((planet, key) =>
        planet.isGasPlanet ? <Planets key={key} name={planet.name} /> : null
      )}
    </div>
  );
}

export default App;
