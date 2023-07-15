const form = document.querySelector(`.form`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector(`#peso`);
    const inputAltura = e.target.querySelector(`#altura`);

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResult(`Peso invalido`, false);
        return;
    }
    if (!altura) {
        setResult(`Altura invalida`, false);
        return;
    }
    const imc = getImc(peso, altura);
    const level = getLevelImc(imc);

    const msg = `Seu IMC é ${imc} (${level}).`;

    setResult(msg, true);
});

function getLevelImc(imc) {
    const level = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidadee grau 3`]

    if (imc >= 39.9) {
        return level[5];
    }
    if (imc >= 34.9) {
        return level[4];
    }
    if (imc >= 29.9) {
        return level[3];
    }
    if (imc >= 24.9) {
        return level[2];
    }
    if (imc >= 18.5) {
        return level[1];
    }
    if (imc < 18.5) {
        return level[0];
    }

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function setResult(msg, isValid) {
    const result = document.querySelector(`#output-result`)
    result.innerHTML = '';

    const p = creatp();

    if (isValid) {
        p.classList.add(`valid`);
    } else {
        p.classList.add(`invalid`);
    }
    p.innerHTML = msg;
    result.appendChild(p);
}

function creatp() {
    const p = document.createElement(`p`);
    return p;
}