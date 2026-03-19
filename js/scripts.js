
//Mapeando os itens
const list = document.querySelector(".list-card");
const buttonShowAll = document.querySelector("#show-all");
const buttonMapAll = document.querySelector("#map-all");
const buttonSumAll = document.querySelector("#sum-all");
const buttonFilterAll = document.querySelector("#filter-all");


//Formatação dos paragrafos (R$)
function formatCurrency(value){
  return newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};


// chamar o cardapio forEach
function showAll(productsArray) {
  let myLi = " ";
  productsArray.forEach((product) => {
    myLi += `
              <li class="cards">
                <img src=${product.src} alt="imagem do lanche">
                <h3  class="subt">${product.name}</h3>
                <p class="value">R$ ${formatCurrency(product.price)}</p>
              </li>  
            `;
  });
  list.innerHTML = myLi;
}
// Calculando 10% a menos map
function mapAlItems(){
 const newPrices = menuOptions.map((product)  => ({
      ...product,// Spread Operator
      price:product.price * 0.9,
      
 }
 ))
 showAll(newPrices)
};
//redus e soma os valores do lanches
function sumAllItems(){
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
  list.innerHTML = `
          <li class="cards">
          <p>O Valor total dos Lanches é R$: ${formatCurrency(totalValue)}</p>
          </li>
  
  `
};

//Separa so os lanches Veganos
function filterAllItems(){
  const filterJustVegan = menuOptions.filter((product) => product.vegan)

  showAll(filterJustVegan)
};


buttonShowAll.addEventListener("click", () => showAll (menuOptions));
buttonMapAll.addEventListener("click",mapAlItems);
buttonSumAll.addEventListener("click", sumAllItems);
buttonFilterAll.addEventListener("click", filterAllItems);

function verificarStatus() {
    const statusTxt = document.getElementById('status-loja');
    const agora = new Date();
    const hora = agora.getHours();
    const dia = agora.getDay(); // 0 = Domingo, 1 = Segunda...

    // Segunda-feira (1) está fechado
    if (dia === 1) {
        statusTxt.innerHTML = "● Fechado Agora";
        statusTxt.className = "status closed";
    } 
    // Aberto das 18h às 23h ou 01h
    else if (hora >= 18 || hora < 1) {
        statusTxt.innerHTML = "● Aberto Agora - Peça já!";
        statusTxt.className = "status open";
    } else {
        statusTxt.innerHTML = "● Fechado Agora";
        statusTxt.className = "status closed";
    }
}

verificarStatus();
