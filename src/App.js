import "./App.css";
import Kopenhagen from "./Kopenhagen.js";
import Parijs from "./Parijs.js";
import Lissabon from "./Lissabon.js";
import Amsterdam from "./Amsterdam.js";

export default function App() {
  return (
    <div className="App">
      <Amsterdam />
      <Kopenhagen />
      <Lissabon />
      <Parijs />
    </div>
  );
}
