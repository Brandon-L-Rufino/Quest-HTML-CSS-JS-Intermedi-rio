let inputFormulario = document.querySelectorAll('.ipt');
let formulario = document.querySelector('.formulario');
let mensagemErro = formulario.querySelector('.mensagem-erro');
let nomeCompleto = document.querySelector('.nome');
let email = document.querySelector('.email');
let tel = document.querySelector('.tel');
let msg = document.querySelector('.msg');
let btn = document.querySelector('.btn');
let mensagemCampoObrigatorio = '<p class="alertaTexto">Campo obrigatório</p>'

function submitForm(event) {
    let formularioValido = true;
    if (nomeCompleto.value === '') {
        document.querySelector('.alertaNome').innerHTML = mensagemCampoObrigatorio;
        nomeCompleto.classList.remove("campo-preenchido");
        nomeCompleto.classList.add("campo-nao-preenchido");
        formularioValido = false;
    } else {
        nomeCompleto.classList.remove("campo-nao-preenchido");
        nomeCompleto.classList.add("campo-preenchido");
        document.querySelector('.alertaNome').innerHTML = '';
    }

    if (email.value === '') {
        document.querySelector('.alertaEmail').innerHTML = mensagemCampoObrigatorio;
        email.classList.remove("campo-preenchido");
        email.classList.add("campo-nao-preenchido");
        formularioValido = false;
    } else {
        email.classList.remove("campo-nao-preenchido");
        email.classList.add("campo-preenchido");
        document.querySelector('.alertaEmail').innerHTML = '';
    }
    if (tel.value === '') {
        document.querySelector('.alertaTel').innerHTML = mensagemCampoObrigatorio;
        tel.classList.remove("campo-preenchido");
        tel.classList.add("campo-nao-preenchido");
        formularioValido = false;
    } else {
        tel.classList.remove("campo-nao-preenchido");
        tel.classList.add("campo-preenchido");
        document.querySelector('.alertaTel').innerHTML = '';
    }

    if (msg.value === '') {
        document.querySelector('.alertaMsg').innerHTML = mensagemCampoObrigatorio;
        msg.classList.remove("campo-preenchido");
        msg.classList.add("campo-nao-preenchido");
        formularioValido = false;
    } else {
        msg.classList.remove("campo-nao-preenchido");
        msg.classList.add("campo-preenchido");
        document.querySelector('.alertaMsg').innerHTML = '';
    }

    if (formularioValido === true) {
        formulario.submit();
    } else {
        event.preventDefault();
    }
}