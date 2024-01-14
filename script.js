function adicionarTarefa(DoN) {
    let tarefa = document.getElementById("tarefa");
    let lista = document.getElementById("lista" + DoN);
    let item = document.createElement("li");
    item.innerHTML = `<span   class="marcacao" onclick="tarefaConcluida()">${tarefa.value}<span/>`;
    lista.appendChild(item)
}

function tarefaConcluida(){
    let p = document.querySelector("span");
    p.style.textDecoration = 'line-through';
    p.style.color = 'red';
}