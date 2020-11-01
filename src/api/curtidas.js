const verificaLike = (curtiu) => {
    if( curtiu ) {
        return require('../../resource/img/s2-checked.png')
    } else {
        return require('../../resource/img/s2.png')
    }
}

const curtirFoto = (curtiu, likes) => {
    let quantidade = likes;
      if(curtiu) {
          quantidade --;
      } else {
        quantidade ++;
      }
      
      return [!curtiu, quantidade]
  }

  export {verificaLike, curtirFoto};