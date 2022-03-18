import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/contextoFormulario";

// Esta função é responsável por enviar o formulário ao servidor.
const enviarFormulario = async (data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Solicitação enviada :)");
    return await response.json();
  }
};

/**
 * Componente que mostra os detalhes do formulário, com
 * o relatório de cada um dos campos que foram preenchidos.
 *
 * @returns {JSX.Element}
 */
const Detalhe = () => {
  const { formulario } = useContext(ContextoFormulario);

  const { nome, apelido, email } = formulario?.treinador;

  const {
    nomePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    idadePokemon,
  } = formulario?.pokemon;

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {nome}</p>
          <p>Apelido: {apelido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {nomePokemon}</p>
          <p>Tipo: {tipoPokemon}</p>
          <p>Elemento: {elementoPokemon}</p>
          <p>Altura: {alturaPokemon}</p>
          <p>Idade: {idadePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => enviarFormulario(formulario)}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};
Detalhe.propTypes = {};

export default Detalhe;
