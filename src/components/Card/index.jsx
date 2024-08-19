import Cat from "../../assets/Cat.jpg";

const Card = ({ titulo, descricao, imagem }) => {
  return (
    <div className="card card-compact bg-white w-96 h-96 shadow-2xl bo text-black rounded-sm ">
      <figure className="">
        <img src={imagem} alt="Gato" className="object-cover h-full w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p>{descricao}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver Mais</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
