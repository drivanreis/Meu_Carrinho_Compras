// Como agente não viu banco de dados o jeito foi improvisar.
// São 3 arrays, que são trasformados em objetos e colocados 
// dentro de outro array.
const arrNomes = ['Arroz', 'Feijão', 'Macarão', 'Agua', 'Farofa', 'Goma', 'Vinagre', 'Molho', 'Mel', 'Cravo', 'Canela', 'Gengibre', 'Carne', 'Frango', 'Peixe', 'Camarão', 'Batata', 'Cenoura', 'Beterraba', 'Tomate', 'Cebola', 'Leite'];

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
    const trElem = document.createElement('tr');
    trElem.setAttribute('id',`linha${numLinha}`);
    document.getElementById('lstProdutos').appendChild(trElem);
    arrLinha = Object.values(objElement);
    
    arrLinha.forEach((celula, numColuna) => {
      console.log(celula);
      const tdElem = document.createElement('td');
      tdElem.setAttribute('id', `coluna${numColuna}`);
      document.getElementById(`linha${numLinha}`).appendChild(tdElem);
      tdElem.innerText = celula;
    });

    const iptNumero = document.createElement('input');
    iptNumero.setAttribute('type', 'number');
    document.getElementById(`linha${numLinha}`).appendChild(iptNumero);

    const chkBox = document.createElement('input');
    chkBox.setAttribute('type', 'checkbox');
    document.getElementById(`linha${numLinha}`).appendChild(chkBox);

  });

};

criaListaDeProdutos();