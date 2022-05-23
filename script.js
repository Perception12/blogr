var menuItem = document.getElementsByClassName('menu-item');

for (let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', (event) => {
        let dropdown = event.target.querySelector('.dropdown');
        let arrow = event.target.querySelector('.arrow');
        toggleDropDown(dropdown, arrow);
        toggleUnderline(event.target);
    })
}

var toggleDropDown = (dropdown, arrow) => {
    toggleArrow(arrow);
    if (dropdown.style.display=='block'){
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
        turnOtherDropdown(dropdown);
    } 
}

var turnOtherDropdown = (element) => {
    for (let i = 0; i < menuItem.length; i++){
        dropdown = menuItem[i].querySelector('.dropdown');
        downArrow = menuItem[i].querySelector('.arrow').children[0];
        upArrow = menuItem[i].querySelector('.arrow').children[1];
        if (dropdown != element) {
            dropdown.style.display = 'none';
            downArrow.style.display = 'inline-block';
            upArrow.style.display = 'none';
            menuItem[i].style.textDecoration = 'none';
        }
    }
}

var toggleArrow = (element) => {
    var down = element.children[0];
    var up = element.children[1];

    if (down.style.display != 'none'){
        up.style.display = 'inline-block';
        down.style.display = 'none';
    } else {
        up.style.display = 'none';
        down.style.display = 'inline-block';
    }
}

var toggleUnderline = (element) => {
    if (element.style.textDecoration != 'underline'){
        element.style.textDecoration = 'underline'
    } else {
        element.style.textDecoration = 'none';
    }
}