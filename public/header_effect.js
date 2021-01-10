const currentURL = location.pathname
const headerLinks = document.querySelectorAll('.header_principal a')

for (const link of headerLinks) {
    if (currentURL.includes(link.getAttribute('href'))) link.classList.add('active')
}