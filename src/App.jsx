import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <>
      <Card />

      <div className="mt-2 flex items-center justify-center gap-1">
        <a
          className="text-xs text-orange-400"
          href="https://github.com/ramiro-fiscella/magic-tailwind-card"
        >
          Link al repositorio.
        </a>

        <p className="text-xs">- Ramiro K. Fiscella</p>
      </div>
    </>
  );
}

export default App;
