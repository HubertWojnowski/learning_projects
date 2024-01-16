document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.navbar')

    const addShadow = () => {
        if (window.scrollY >= 200) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)
})