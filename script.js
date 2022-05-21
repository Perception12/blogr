var menuItem = document.getElementsByClassName('menu-item');

for (let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', (event) => {
        let dropdown = event.target.querySelector('.dropdown');
        toggleDropDown(dropdown);
    })
}

var toggleDropDown = (element) => {
    if (element.style.display=='block'){
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
        turnOtherDropdown(element);
    }
}

var turnOtherDropdown = (element) => {
    for (let i = 0; i < menuItem.length; i++){
        dropdown = menuItem[i].querySelector('.dropdown');
        if (dropdown != element) {
            dropdown.style.display = 'none';
        }
    }
}