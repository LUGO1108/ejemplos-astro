import { useState } from "react";

function Button() {
  const [subscribe, setSubcribe] = useState(false);
  return (
    <button
      className="bg-cyan-950 py-1 px-4 rounded-md"
      onClick={() => setSubcribe(!subscribe)}
    >
      {subscribe ? "ya esats suscrito" : "suscribete"}
    </button>
  );
}
export default Button;
