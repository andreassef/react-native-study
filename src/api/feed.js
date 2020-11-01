const lerFotos = async( callback ) => {
    const fotosHTTP = await fetch("http://10.0.2.2:3030/feed"); // nosso fetch irá retornar uma respostas http
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
  }

  export default lerFotos;