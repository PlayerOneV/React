import { createRoot } from "react-dom/client";
import PrimeraApp from "./PrimeraApp";
import './index.css';
import CounterApp from "./CounterApp";

const divRoot = createRoot(document.getElementById('root'));

divRoot.render(<CounterApp value={0} />);