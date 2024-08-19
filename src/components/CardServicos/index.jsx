import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../services/Firebase";
import Card from "../Card";
import Cat5 from "../../assets/cat5.jpg";
function CardServico({ newServico }) {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const servicosRef = collection(db, "servicos");
        const querySnapshot = await getDocs(servicosRef);
        const servicosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServicos(servicosData);
      } catch (error) {
        console.error("Erro ao buscar serviços: ", error);
      }
    };
    fetchServicos();
  }, []);

  useEffect(() => {
    if (newServico) {
      setServicos((prev) => [...prev, newServico]);
    }
  }, [newServico]);

  return (
    <>
      {/* <div className="flex flex- justify-center">
      {servicos.map((servico) => (
        <div
          key={servico.id}
          className="card text-black bg-white w-96 shadow-xl m-2 h-96"
        >
          <div className="card-body">
            <h2 className="card-title">{servico.titulo}</h2>
            <p>{servico.descricao}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Ver Mais</button>
            </div>
          </div>
        </div>
      ))}
    </div> */}
      <div className="flex flex-wrap justify-center gap-2">
        {servicos.map((servico) => (
          <Card
            key={servico.id}
            titulo={servico.titulo}
            descricao={servico.descricao}
            imagem={Cat5}
            
          />
        ))}
      </div>
    </>
  );
}

export default CardServico;
