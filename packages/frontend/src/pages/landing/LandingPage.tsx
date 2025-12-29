import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
      <h1>Transparencia de Fondos</h1>
      <p>Trazabilidad on-chain para programas sociales</p>
      <Link to="/login">Ingresar</Link>
    </div>
  );
}
