function trocarCor(event) {

    let divSelect = event.target.getAttribute("id") !== null ? event.target : event.target.parentNode;

    let divAction = document.querySelector('.note.color');

    divSelect.classList.add('color');

    if (divSelect != divAction) {
        divAction.classList.remove('color');
    }
}

function valor(){
    var nota = document.querySelector('.color');
    var notaValor = nota.textContent;

    var teste = window.sessionStorage.setItem('numero', notaValor);
    console.log(notaValor);
}