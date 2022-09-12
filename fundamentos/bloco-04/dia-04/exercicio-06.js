let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

/*

  Acesse as chaves nome , sobrenome e titulo , que está dentro da chave
  livros Favoritos , e faça um console.log no seguinte formato: "O livro
  favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

*/


console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");
