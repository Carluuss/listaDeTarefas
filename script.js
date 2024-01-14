function adicionarTarefaDia() {
    let tarefa = document.getElementById("tarefa").value;
    let lista = document.getElementById("listaDia");
    let item = document.createElement("li");
    item.innerText = `${tarefa}`;
    lista.appendChild(item);

}

function adicionarTarefaNoite() {
    let tarefa = document.getElementById("tarefa").value;
    let lista = document.getElementById("listaNoite");
    let item = document.createElement("li");
    item.innerText = `${tarefa}`;
    lista.appendChild(item);
}