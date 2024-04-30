import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <>
      <Card />

      <a
        className=" mt-2 text-xs text-center text-orange-400"
        href="https://github.com/ramiro-fiscella/magic-tailwind-card"
      >
        Link al repositorio.
      </a>

      <p className="text-xs text-center">- Ramiro K. Fiscella</p>
    </>
  );
}

export default App;
