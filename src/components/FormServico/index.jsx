import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../services/Firebase/index.js";

function FormularioServico({ onServiceAdded }) {
  const [dados, setDados] = useState({
    titulo: "",
    descricao: "",
  });

  const alteraDados = (e) => {
    const { id, value } = e.target;
    setDados((prevDados) => ({ ...prevDados, [id]: value }));
  };

  const salvarDados = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "servicos"), dados);
      onServiceAdded({ id: docRef.id, ...dados }); // Notify the parent component
    } catch (error) {
      console.error("Erro ao salvar o serviço: ", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={salvarDados} className="m-16 items-center">
        <div className="mb-4">
          <label htmlFor="nome" className="text-black block">
            Tipo do Serviço
          </label>
          <input
            id="titulo"
            type="text"
            value={dados.titulo}
            className="input input-bordered w-full text-gray-900 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            onChange={alteraDados}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descricao" className="text-black block">
            Descrição
          </label>
          <textarea
            id="descricao"
            className="textarea textarea-bordered w-full text-gray-900 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            onChange={alteraDados}
            value={dados.descricao}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar Serviço
        </button>
      </form>
    </div>
  );
}

export default FormularioServico;

{
  /* <div className="container">
      <form onSubmit={salvarDados} className="m-16 items-center">
        <div>
          <label className="text-black">Título</label>
          <input
            id="titulo"
            type="text"
            value={dados.titulo}
            onChange={alteraDados}
            className="input in"
          />
        </div>
        <div>
          <label className="text-black">Descrição</label>
          <input
            id="descricao"
            type="text"
            value={dados.descricao}
            onChange={alteraDados}
            className="input"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar Serviço
        </button>
      </form>
    </div> */
}
