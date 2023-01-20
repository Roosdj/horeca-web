import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Kopenhagen from "./Kopenhagen.js";
import Parijs from "./Parijs.js";
import Lissabon from "./Lissabon.js";
import Amsterdam from "./Amsterdam.js";
import Valencia from "./Valencia.js";

export default function App() {
  return (
    <div className="App">
      <h1> Restaurant Tips</h1>
      <Amsterdam />
      <Kopenhagen />
      <Lissabon />
      <Parijs />
      <Valencia />
    </div>
  );
}
