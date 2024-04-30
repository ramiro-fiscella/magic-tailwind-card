import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <>
      <Card />

      <p>Link al repo:</p>
      <a
        href="https://github.com/ramiro-fiscella/magic-tailwind-card"
        className="text-stone-500"
      >
        Repositorio
      </a>

      <p>Ramiro K. Fiscella</p>
    </>
  );
}

export default App;
