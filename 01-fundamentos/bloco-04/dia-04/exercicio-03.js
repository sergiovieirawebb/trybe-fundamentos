let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

/*

  Faça um for/in que mostre todas as chaves do objeto. Valor
  esperado no console:

    personagem
    origem
    nota
    recorrente

*/

for (let properties in info) {
  console.log(properties);
}
