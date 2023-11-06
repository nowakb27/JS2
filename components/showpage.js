function showPage(pageName) {
    var pages = document.getElementsByClassName('page-content');
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id === pageName) {
            pages[i].classList.remove('hidden');
        } else {
            pages[i].classList.add('hidden');
        }
    }
}

function toggleNav() {
    var nav = document.getElementById('navbarNav');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
        nav.classList.add('show');
    }
}
