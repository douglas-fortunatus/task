/* === tabs ===*/ 
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
})

/* === password === */

const passwordInput = document.querySelector('#password-input');

const togglePasswordButton = document.querySelector('#toggle-password');

togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
});