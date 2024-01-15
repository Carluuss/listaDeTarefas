function adicionarTarefa(DoN) {
   
    if (tarefa.value.trim()==""){
        alert("Digite uma tarefa a ser adicionada");
    }else{
        let tarefa = document.getElementById("tarefa");
        let lista = document.getElementById("lista" + DoN);
        let item = document.createElement("li");
        item.innerHTML = `<span  ondblclick="tarefaIncompleta(this)" onclick="tarefaConcluida(this)">${tarefa.value}</span><button type='button' class="btnRemover" onclick="remover(this.parentNode)">Remover</button>`;
        lista.appendChild(item)
    }
}

function tarefaConcluida(span){
    span.style.textDecoration = 'line-through';
    span.style.color = 'red';
}

function tarefaIncompleta(span){
    span.style.textDecoration = 'none';
    span.style.color = 'white';
}

function remover(item){
    item.parentNode.removeChild(item);
}