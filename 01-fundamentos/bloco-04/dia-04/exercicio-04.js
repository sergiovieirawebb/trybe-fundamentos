let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

/*

  Faça um for/in , mas agora mostre todos os valores das
  chaves do objeto. Valor esperado no console:

    Margarida
    Pato Donald
    Namorada do personagem principal nos quadrinhos do Pato Donald
    Sim

*/

for (let properties in info) {
  console.log(info[properties]);
}
