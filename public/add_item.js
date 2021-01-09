function addIngredient() {
    const father = document.querySelector('#father_ingredients')
    const fields = father.querySelectorAll('input')

    // clona o último input
    const newField = fields[fields.length - 1].cloneNode(true)

    // verifica se o ultimo input esta preenchido
    if (fields[fields.length - 1].value == '') return false

    // zera o valor do input e adiciona no elemento pai
    newField.value = ''
    father.appendChild(newField)
}

function addStep() {
    const father = document.querySelector('#father_steps')
    const fields = father.querySelectorAll('input')

    const newField = fields[fields.length - 1].cloneNode(true)

    if (fields[fields.length - 1].value == '') return false

    newField.value = ''
    father.appendChild(newField)
}

document
    .querySelector('.add_item.ingredient')
    .addEventListener('click', addIngredient)

document
    .querySelector('.add_item.step')
    .addEventListener('click', addStep)