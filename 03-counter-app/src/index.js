import React from "react";
import { createRoot } from "react-dom/client";

const saludo = <h1>Hola mundo</h1>;
const divRoot = createRoot(document.getElementById('root'));

divRoot.render(saludo);