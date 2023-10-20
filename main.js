const form = document.getElementById('form-cadastro');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-cadastro');
    const inputNumeroContato = document.getElementById('numero-cel');
    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`; 
    linha += '</tr>';

    linhas += linha;

    const corpotTabela = document.querySelector('table');
    corpotTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';    
})

 