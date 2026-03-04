
const fullName = document.getElementById('username');
const position = document.getElementById('position');
const department = document.getElementById('departamento');
const button = document.getElementById('btn-gerar');

const badgeDepartment = document.getElementById('badge-department');
const badgeName = document.getElementById('badge-name');
const badgePosition = document.getElementById('badge-position');

const circulo = document.querySelector('.circulo');


button.addEventListener('click', function(event) {
    // prevent form submission / page reload
    event.preventDefault();

    const nome = fullName.value;
    const cargo = position.value;
    const departamento = department.value;

    badgeName.textContent = nome;
    badgePosition.textContent = cargo;
    badgeDepartment.textContent = departamento;

    const badge = document.getElementById('badge');
    const departamentoEscolhido = departamento.toLowerCase();

    // set a default text colour that contrasts with the badge
    let text = '';

    if (departamentoEscolhido === 'design') {
        badge.style.backgroundColor = '#e8c8faff';
        text = '#000000';           
        badge.style.border = '1px solid #896597ff';
        circulo.style.border = '1px solid #896597ff';
    } else if (departamentoEscolhido === 'desenvolvimento') {
        badge.style.backgroundColor = '#b9c9ffff';
        text = '#000000';  
        badge.style.border = '1px solid #6e83c5ff';
        circulo.style.border = '1px solid #6e83c5ff';
    } else if (departamentoEscolhido === 'marketing') {
        badge.style.backgroundColor = '#deffb9ff';
        text = '#000000';           
        badge.style.border = '1px solid #8dda90ff';
        circulo.style.border = '1px solid #8dda90ff';
    } else {
        badge.style.backgroundColor = '';
        text = '';
    }
    
    badgeName.style.color = text;
    badgeName.style.backgroundColor = badge.style.backgroundColor;
    badgeName.style.border = badge.style.border;

    badgePosition.style.color = text;
    badgePosition.style.backgroundColor = badge.style.backgroundColor;
    badgePosition.style.border = badge.style.border;

    badgeDepartment.style.color = text;
    badgeDepartment.style.backgroundColor = badge.style.backgroundColor;
    badgeDepartment.style.border = badge.style.border;

});