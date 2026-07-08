document.addEventListener('DOMContentLoaded', async () => {
    const navContainer = document.getElementById('navbar-placeholder');

    const response = await fetch('nav.html');
    navContainer.innerHTML = await response.text();
});
