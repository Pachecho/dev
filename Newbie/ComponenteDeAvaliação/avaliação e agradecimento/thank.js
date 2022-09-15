function mostraValor() {
    var data = window.sessionStorage.getItem('numero');
    document.getElementById('nota').textContent = data;
    console.log(data);
}
