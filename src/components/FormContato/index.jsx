import React, { useState } from "react";
import Dog from "../../assets/dog.jpg";
import { collection, addDoc } from "firebase/firestore";
import db from "../../services/Firebase/index.js";
function Formulario({ campos, imagem }) {
  const [dados, setDados] = useState({});

  const alteraDados = (e) => {
    const valor = e.target.value;
    const chave = e.target.id;
    setDados({ ...dados, [chave]: valor });
  };

  const salvarDados = async (e) => {
    e.preventDefault();
    console.log(dados);
    const docRef = await addDoc(collection(db, "dados"), dados);
  };

  const limparFormulario = () => {
    setDados({});
  };

  return (
    <div className="rounded-md shadow-md border m-7">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <img
            src={imagem}
            alt="Imagem"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 justify-center flex flex-col">
          <form onSubmit={salvarDados} className="m-16 items-center">
            {campos.map((campo) => (
              <div key={campo.id} className="mb-4">
                <label
                  htmlFor={campo.id}
                  className="block text-sm font-medium text-black"
                >
                  {campo.nome}
                </label>
                <input
                  id={campo.id}
                  type={campo.tipo}
                  className="input input-bordered w-full text-gray-900 bg-white box-border border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  onChange={alteraDados}
                  value={dados[campo.id] || ""}
                />
              </div>
            ))}
            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={limparFormulario}
              >
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
