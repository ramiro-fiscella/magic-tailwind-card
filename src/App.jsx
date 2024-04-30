import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <>
      <Card />

      <p className="mt-4 text-sm">Link al repo:</p>
      <a
        href="https://github.com/ramiro-fiscella/magic-tailwind-card"
        className="text-stone-500 text-sm"
      >
        Repositorio
      </a>

      <p className="text-md">Ramiro K. Fiscella</p>
    </>
  );
}

export default App;
