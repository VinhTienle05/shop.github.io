const topBar = document.getElementById('topBar');
const menuContainer = document.getElementById('menuContainer');
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');
const sanphamItem = document.getElementById('sanphamItem');
const sanphamSubmenu = document.getElementById('sanphamSubmenu');
const arrow = sanphamItem.querySelector('.arrow');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > topBar.offsetHeight) {
        topBar.classList.add('hidden');
        document.body.style.paddingTop = '0'; // Loại bỏ padding khi ẩn
    } else if (scrollTop < lastScrollTop) {
                topBar.classList.remove('hidden');
                document.body.style.paddingTop = topBar.offsetHeight + 'px'; // Thêm lại padding khi hiện
    }

    lastScrollTop = scrollTop;
});

menuContainer.addEventListener('mouseenter', () => {
    mainMenu.classList.add('open');
});

menuContainer.addEventListener('mouseleave', () => {
    mainMenu.classList.remove('open');
});

sanphamItem.addEventListener('click', (event) => {
    event.preventDefault();
    sanphamSubmenu.classList.toggle('open-submenu');
    arrow.classList.toggle('rotated');
});