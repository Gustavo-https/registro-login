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

function listar(){
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    let tabela = document.getElementById('listar_usuarios');
    tabela.innerHTML - '';
    usuariosCadastrados.forEach((usuario, index) => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.usuario}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick="excluirUsuario(${index})" >Excluir</button>
                <button onclick="editarUsuario(${index})" >Editar</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

listar();