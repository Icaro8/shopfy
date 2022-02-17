import React from "react";

import "./styles.scss";

export const Loading: React.FC = () => {
  return (
    <div className="Containerloading">
      <div className="loading"></div>
      <h3>Sem Produtos no estoque</h3>
    </div>
  );
};
