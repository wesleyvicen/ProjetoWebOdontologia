var removerTds = document.querySelectorAll('.remover');

removerTds.forEach(function (item) {
    item.addEventListener('dblclick', function () {
        var confirmacao = confirm('Deseja realmente remover este item?')
        if (confirmacao) {
            item.parentNode.remove();
        }
    })
});
