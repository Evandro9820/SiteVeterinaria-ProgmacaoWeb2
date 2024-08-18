import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo à Home Page!</h1>
        <p className="text-gray-700 mt-4">Explore nosso conteúdo.</p>
      </main>
    </div>
  );
};

export default Home;
