import React from "react";
import { useRecipes } from "../hooks/useRecipes";

const StatsPage: React.FC = () => {
  const { recetas } = useRecipes();

  const total = recetas.length;
  const promedioTiempo = Math.round(
    recetas.reduce((acc, r) => acc + r.tiempo, 0) / total
  );
  const recetasFaciles = recetas.filter(r => r.dificultad === "fácil").length;

  const recetasPorCategoria = recetas.reduce<Record<string, number>>((acc, receta) => {
    acc[receta.categoria] = (acc[receta.categoria] || 0) + 1;
    return acc;
  }, {});

  const recetaPopular = recetas.reduce(
    (max, r) => (r.valoracion > max.valoracion ? r : max),
    recetas[0]
  );

  return (
    <div className="stats-page">
      <h1 className="text-center fw-bold mb-4">📊 Estadísticas de Recetas</h1>

      <section className="stats-section mb-5">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">{total}</span>
            <span className="stat-label">Recetas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{promedioTiempo}</span>
            <span className="stat-label">Min Promedio</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{recetasFaciles}</span>
            <span className="stat-label">Recetas Fáciles</span>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h4 className="text-center mb-3">📂 Recetas por Categoría</h4>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {Object.entries(recetasPorCategoria).map(([cat, count]) => (
            <div
              key={cat}
              className="bg-white rounded-4 shadow-sm px-4 py-3 text-center"
              style={{ minWidth: "200px" }}
            >
              <h6 className="mb-1 text-capitalize">{cat}</h6>
              <span className="badge bg-primary fs-6">{count}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h4 className="mb-3">🌟 Receta Más Popular</h4>
        <div className="bg-white rounded-4 shadow-sm p-4 d-inline-block">
          <h5 className="fw-bold">{recetaPopular.nombre}</h5>
          <p className="mb-1">
            ⭐ Valoración: <strong>{recetaPopular.valoracion}</strong>
          </p>
          <p className="mb-0">Categoría: {recetaPopular.categoria}</p>
        </div>
      </section>
    </div>
  );
};

export default StatsPage;
