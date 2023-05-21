const arrNomes = ['Arroz', 'Feijão', 'Macarão', 'Agua', 'Farofa', 'Goma', 'Vinagre', 'Molho', 'Abel', 'Edu', 'Flavio', 'Gabriela', 'Helida', 'Itala', 'Jose', 'Lia', 'Marta', 'Neuma', 'Onofre', 'Pedro', 'Queni', 'Rita'];

const arrPrecos = [1.3, 6.7, 3, 9.5, 1.4, 6, 1.4, 5.7, 4, 1.2, 0.9, 2.2, 1.3, 1.0, 2, 2.4, 3.3, 1, 4.4, 5.1, 0.25, 1.6];

const arrCores = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Roxo', 'Ferrugem', 'Marrom', 'Lilas', 'Bege', 'Caque', 'Abobora', 'Uva', 'Violeta', 'Encarnado', 'Verde', 'Azul', 'Amarelo', 'Abobora', 'Uva', 'Violeta', 'Ferrugem', 'Marrom']

const arrTabelaDeProdutos = [];

arrNomes.forEach((nome, ind) => {
  arrTabelaDeProdutos.push(
    {nome: arrNomes[ind],
    preco: arrPrecos[ind],
    cor: arrCores[ind],
    estoque: Math.floor(Math.random() * 99) + 1}
  );
});

const achaProduto = (nomeDoProduto) => arrTabelaDeProdutos.find((produto) =>  produto.nome === nomeDoProduto);

const criaListaDeProdutos = () => {
  arrTabelaDeProdutos.forEach((objElement, numLinha) => {
    const divElem = document.createElement('div');
    // trElem.setAttribut('id', `linha${linha}`);
    // document.getElementById('lstProdutos').appendChild(trElem);
    arrLinha = Object.values(objElement);
    arrLinha.forEach((celula, coluna) => {
      console.log(celula);
    //   const tdElem = document.createElement('td');
    //   tdElem.id.add = `coluna${coluna}`
    //   document.getElementById(`linha${linha}`).appendChild(tdElem);
    //   tdElem.innerText = celula;
    });
  });
};

criaListaDeProdutos();