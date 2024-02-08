document.querySelector('.header__burger-btn').addEventListener('click', function() {
    document.querySelector('.header__nav-burger').classList.toggle('header__nav-burger_active')
    document.querySelector('.header__burger-btn-icon').classList.toggle('header__burger-btn-icon_active')
})