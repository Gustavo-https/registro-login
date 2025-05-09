//CRUD

const botao = document.getElementById('btnCadastrar');
const listarUsuario = [];

botao.addEventListener('click' , function (){
    const usuario = {
        usuario: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    };
    console.log(usuario);
    listarUsuario.push(usuario);
    listaJson = JSON.stringify(listarUsuario);
    localStorage.setItem("usuarios", listaJson);

});