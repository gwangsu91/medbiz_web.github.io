const toggleBtn = document.querySelector('.medbiz_toggleBtn');
const menu = document.querySelector('.medbiz_menu');
const spot = document.querySelector('.spot');



toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    spot.classList.toggle('active');
});

