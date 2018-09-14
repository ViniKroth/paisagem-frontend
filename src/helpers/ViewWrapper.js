import React from "react";

import Loadable from "react-loadable";

import Loader from "../components/Loader/Loader";

// Criando um componente de Wrapper para as views, que adiciona o loader e o contexto no import.
const ViewWrapper = path =>
  Loadable({
    // Componente de loading das telas (o mesmo do resto do sistema)
    loading: Loader,

    // Delay para exibir o loader ao carregar uma página,
    //se o carregamento não demorar mais do que esse tempo, o loader não é exibido.
    delay: 200,

    // Página sendo carregada
    loader: () => import(`views/${path}`),

    // Renderização custom da página sendo carregada
    render(loaded, props) {
      let Component = loaded.default;
      return <Component {...props} />;
    }
  });

export default ViewWrapper;

/**
 * Exemplo de uso:
 *
 * Trocar:
 * import HomePage from "views/HomePage/HomePage"
 *
 * por:
 *
 * const HomePage = ViewWrapper("HomePage/HomePage")
 *
 * Todos os paths para o ViewWrapper são a partir da pasta 'views/'
 */
