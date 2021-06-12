
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json() )
        .then(states => {
            for(const state of states) {
                ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs();

function getCities(event){
    const citySelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=state]");
 
    const ufValue = event.target.value 

    const indexOfSelectedState =  event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value=''>Selecione o munícipio</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            
            for(const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false;
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);


// Itens de coleta
// pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li")

// Percorrer todos os li
for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

// Pegar o input items que armazem todos os items 
const collectedItems = document.querySelector("input[name=items]")

// Criando o array para o armazenamento das minhas li
let selectedItems = [];

function handleSelectedItem(event) {
    // adicionar ou remover uma classe com javascript
    const itemLi = event.target

    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    console.log("itemID: " + itemId)

    // verificar se existem itens selecionados, se sim 
    // pegar os itens selecionados 
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId 
        return itemFound
    })

    // se já estiver selecionado 

    if(alreadySelected >= 0) {
        // tirar da selecao 
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId 
            return itemIsDifferent 
        });
        selectedItems = filteredItems  
    }else {
        selectedItems.push(itemId)
    }
    console.log('selectedItems: ' , selectedItems)
    // se não estiver selecionado, adicionar à seleção 


    // atualizar o campo escondido com os dados selecionados 
    collectedItems.value = selectedItems
}