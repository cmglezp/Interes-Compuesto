
var boton = document.getElementById('boton');
var show = document.getElementsByClassName('container__show')[0];

boton.addEventListener('click', CalcIC);

function CalcIC(){

    show.innerHTML = '<div class="container__show-item">Mes</div>';
    show.innerHTML += '<div class="container__show-item">Capital</div>';
    show.innerHTML += '<div class="container__show-item">Ganancia</div>';
    show.innerHTML += '<div class="container__show-item">Total</div>';
    show.innerHTML += '<div class="container__show-item">Gan. Neta</div>';



    var capital_inicial = parseInt(document.getElementById('capital').value);
    var porciento = document.getElementById('porciento').value / 100;
    var tiempo = parseInt(document.getElementById('tiempo').value);

    var ganancia = 0;
    var capital = capital_inicial;

    for(i = 1; i <= tiempo; i ++){
        ganancia = Math.round(capital * porciento);
        show.innerHTML += '<div class="container__show-item">' + i + '</div>';
        show.innerHTML += '<div class="container__show-item">' + capital + '</div>';
        show.innerHTML += '<div class="container__show-item">' + ganancia + '</div>';
        show.innerHTML += '<div class="container__show-item">' + Math.round(capital + ganancia) + '</div>';
        show.innerHTML += '<div class="container__show-item">' + Math.round(capital + ganancia - capital_inicial) + '</div>';
        capital += ganancia;
    }


}
