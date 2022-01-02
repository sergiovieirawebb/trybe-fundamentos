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

  Adicione um novo livro favorito na chave livrosFavoritos, que é um
  array. Atribua a esta chave um objeto contendo as seguintes informações:
    
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    }

*/

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
});

console.log(leitor);
