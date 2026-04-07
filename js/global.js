document.addEventListener('DOMContentLoaded', () => {
    scrollTriggers();
})

document.addEventListener('scroll', scrollTriggers);

// Header color change when scroll in homepage (white - transparent)
// Top button hide at page top position
function scrollTriggers() {
    // Top button
    if (window.scrollY <= 200) {
        document.getElementById('btn-top').style.display = "none"
    } else {
        document.getElementById('btn-top').style.display = "flex"
    }

    // Header
    if ((location.pathname == "/index.html" ||location.pathname == "/" || location.pathname == "") && window.scrollY <= 10) {
        document.getElementById('site-header').style.background = "transparent"
        document.getElementById('site-header').style.borderBottom = 0
        document.getElementById('site-header').style.color = "#fff"
        document.documentElement.style.setProperty('--nav-bg', '#fff');
        document.documentElement.style.setProperty('--nav-text', '#000');
    } else {
        document.getElementById('site-header').style.background = "white"
        document.getElementById('site-header').style.borderBottom = '1px solid #00000010'
        document.getElementById('site-header').style.color = "#000"
        document.documentElement.style.setProperty('--nav-bg', '#000');
        document.documentElement.style.setProperty('--nav-text', '#fff');
    }
}