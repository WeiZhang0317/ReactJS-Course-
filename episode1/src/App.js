import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={120000} position="Junior SDE" company="Google" />
      <Job salary={100000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (prompts) => {
  return (
    <div>
      <h1>{prompts.salary}</h1>
      <h1>{prompts.position}</h1>
      <h1>{prompts.company}</h1>
    </div>
  );
};

export default App;
