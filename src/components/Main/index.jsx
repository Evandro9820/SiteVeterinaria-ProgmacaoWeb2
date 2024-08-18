import Cat from "../../assets/Cat.jpg";

function Main() {
  return (
    <section className="bg-white text-black py-8">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <figure className="overflow-hidden rounded-lg ">
            <img
              src={Cat}
              alt="Imagem de um gato"
              className="w-full h-auto max-w-md mx-auto"
            />
            <figcaption className="text-center mt-2 text-sm text-gray-500">
              Imagem ilustrativa de um gato
            </figcaption>
          </figure>
          <article>
            <h2 className="text-2xl font-bold mb-4">Sobre o PetShop</h2>
            <p className="text-lg mb-4">
              Bem-vindo ao nosso PetShop! Aqui, oferecemos tudo o que seu animal
              de estimação precisa para uma vida feliz e saudável. Desde
              alimentos e brinquedos até cuidados veterinários, estamos aqui
              para ajudar.
            </p>
            <p className="text-lg">
              Nossa missão é proporcionar um excelente atendimento e produtos de
              qualidade para garantir que seu amigo de quatro patas tenha o
              melhor. Navegue em nosso site para conhecer mais sobre nossos
              serviços e produtos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Main;
