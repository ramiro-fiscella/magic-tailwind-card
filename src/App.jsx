import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <>
      <Card />

      <a
        className="mt-4 text-sm"
        href="https://github.com/ramiro-fiscella/magic-tailwind-card"
      >
        Link al repositorio.
      </a>

      <p className="text-sm">- Ramiro K. Fiscella</p>
    </>
  );
}

export default App;
