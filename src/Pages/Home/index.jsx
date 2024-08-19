import Header from "../../components/Header";
import Main from "../../components/Main";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import Cat from "../../assets/Cat4.jpg";
import Sessao from "../../components/Section";
import Formulario from "../../components/FormContato";
import Footer from "../../components/Footer";
import CardServico from "../../components/CardServicos";
const Home = () => {
  const campos = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    }, //Fim do OBJETO
    {
      nome: "Email Válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Cidade",
      id: "cidade",
      tipo: "text",
    },
    {
      nome: "Estado",
      id: "estado",
      tipo: "text",
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },
  ];

  return (
    <div className="bg-white">
      <Header />
      {/*   <main className="container mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo à Home Page!</h1>
        <p className="text-gray-700 mt-4">Explore nosso conteúdo.</p>
      </main> */}
      <Main />
      <Carousel />
      <Sessao />
      <div className="flex justify-center items-center space-x-4 mt-10">
        <Card
          descricao="Esse é um card"
          imagem={Cat}
          titulo="Titulo do cartão 1"
        />
        <Card
          descricao="Esse é outro card"
          imagem={Cat}
          titulo="Titulo do cartão 2"
        />
        <Card
          descricao="Esse é mais um card"
          imagem={Cat}
          titulo="Titulo do cartão 3"
        />
      </div>
      <Formulario campos={campos} imagem={Cat} />
      <div className="flex justify-center items-center space-x-4 mt-10">
        <CardServico />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
