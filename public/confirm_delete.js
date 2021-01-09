const formDelete = document.querySelector('#form_delete')

formDelete.addEventListener('submit', evento => {
    const confirmation = confirm('Deseja deltar a receita?')
    if (!confirmation) evento.preventDefault()
})