const tab_carros = document.querySelector('#tab_carros')
const img_det = document.querySelector('#img_det')
const p_nome = document.querySelector('#p_nome')
const p_ano = document.querySelector('#p_ano')
const card_ant = document.querySelector('#card_ant')
const card_prox = document.querySelector('#card_prox')
const img_card = document.querySelector('#img_card')
const titulo_card = document.querySelector('#titulo_card')
const p_ano_card = document.querySelector('#p_ano_card')
const link_card = document.querySelector('#link_card')
const txt_busca = document.querySelector('#txt_busca')
const img_buscar = document.querySelector('#img_buscar')
const sel_result = document.querySelector('#sel_result')
const img_limpar = document.querySelector('#img_limpar')


let num_card = 0 
img_buscar.addEventListener('click', funBuscaCarro)
img_limpar.addEventListener('click', funLimpaSelect)
card_ant.addEventListener('click', funCardAnterior)
card_prox.addEventListener('click', funProximoCard)

function funBuscaCarro () {
    if(txt_busca.value != '') {
        for( let i = 0; i < infos.length; i++) {
            if (infos[i]['nome'].toLowerCase().includes(txt_busca.value.toLowerCase()) ) {
                const option = document.createElement('option')
                option.innerHTML = infos[i]['nome']
                option.setAttribute('value', i)
                sel_result.appendChild(option)  
            }
        }
    } else {
        alert ("Digite algo no campo")
    }
}
function funLimpaSelect() {
    for(let i = (sel_result.options.length - 1);i >= 0; i-- ) {
        sel_result.remove(i)
    }
}

function funExibeCard(par_ind) {
    img_card.setAttribute('src', infos[par_ind]['foto'])
    img_card.setAttribute('alt', infos[par_ind]['nome'])
    img_card.setAttribute('title', infos[par_ind]['nome'])
    titulo_card.innerHTML = infos[par_ind]['nome']
    titulo_card.style.color = infos[par_ind]['cor']
    p_ano_card.innerHTML = 'ano: ' + infos[par_ind]['ano']
    link_card.setAttribute('href', infos[par_ind]['foto'])
}
funExibeCard(0)

function funMostraDetalhes(par_ind) {
    img_det.setAttribute('src', infos[par_ind]['foto'])
    img_det.setAttribute('alt', infos[par_ind]['nome'])
    img_det.setAttribute('title', infos[par_ind]['nome'])
    p_nome.innerHTML = infos[par_ind]['nome']
    p_ano.innerHTML = 'ano: ' + infos[par_ind]['ano']
}


function funCarregaTabCarros() {
    for (let i = 0; i < infos.length; i++) {
        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerHTML = infos[i]['nome']
        obj_td_novo.addEventListener('click', function() {funMostraDetalhes(i) })
        obj_tr_novo.appendChild(obj_td_novo)
        tab_carros.appendChild(obj_tr_novo)
    }
}
funCarregaTabCarros()

function funCardAnterior() {
    num_card-- 
    if (num_card < 0) {
        num_card = (infos.length - 1)
    }
    funExibeCard(num_card)
}

function funProximoCard() {
    num_card++
    if (num_card == infos.length) {
        num_card = 0
    }
    funExibeCard(num_card)
}