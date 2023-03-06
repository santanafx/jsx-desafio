import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import Produtos from "./componentes/Produtos/Produtos";

const App = () => {
  const { pathname } = window.location;
  let Pagina;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <>
      <section>
        <Header />
        <Pagina />
      </section>
    </>
  );
};

export default App;
