import "./body.css"

function Body({
  auto,
  handleEdit,
  handleDelete,
  handleSubmit,
  marca,
  modelo,
  ano,
  preco,
  editModels,
  setMark,
  setModels,
  setPrice,
  setYear,
}) {
  return (
    <main className="body">
      <div className="container">
        <div className="form-card">
          <h2>{editModels ? "Editar Automóvel" : "Adicionar Automóvel"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Marca:
              <input
                type="text"
                name="marca"
                value={marca}
                onChange={(e) => setMark(e.target.value)}
                required
                minLength="2"
                placeholder="Marca"
              />
            </label>

            <label>
              Modelo:
              <input
                type="text"
                name="modelo"
                value={modelo}
                onChange={(e) => setModels(e.target.value)}
                required
                minLength="2"
                placeholder="Modelo"
              />
            </label>

            <label>
              Ano:
              <input
                type="number"
                name="ano"
                value={ano}
                onChange={(e) => setYear(e.target.value)}
                required
                min="1900"
                max="2024"
                placeholder="Ano"
              />
            </label>

            <label>
              Preço:
              <input
                type="number"
                name="preco"
                value={preco}
                onChange={(e) => setPrice(e.target.value)}
                required
                min="0.01"
                step="0.01"
                placeholder="Preço"
              />
            </label>

            <input type="submit" value={editModels ? "Atualizar" : "Criar"} id="criar-atualizar" />
          </form>
        </div>
        <div className="auto-card">
          <h2>Nossos Carros</h2>
          <ul className="cabecalho">
            <li>Marca</li>
            <li>Modelo</li>
            <li>Ano</li>
            <li>Preço</li>
            <li>Editar</li>
          </ul>
          <ul className="auto-list">
            {auto.map((autos) => (
              <li key={autos.id} className="auto-car">
                <div className="auto-details">
                  <div className="detail">
                    <h3>{autos.marca}</h3>
                  </div>
                  <div className="detail">
                    <h3>{autos.modelo}</h3>
                  </div>
                  <div className="detail">
                    <h3>{autos.ano}</h3>
                  </div>
                  <div className="detail">
                    <p>
                      {" "}
                      {autos.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="detail">
                    <div className="auto-actions">
                      <button onClick={() => handleEdit(autos)} id="editar">Editar</button>
                      <button
                        onClick={() => {
                          let confirmacao = prompt(
                            "Certeza que você deseja excluir?"
                          ).toLowerCase();
                          if (confirmacao === "sim") {
                            return handleDelete(autos.id);
                          }
                        }}
                      id="deletar"
                      >
                        Deletar
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Body;
