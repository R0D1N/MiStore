const authBtn = document.getElementById("open-auth-btn")
const modalAuth = document.getElementById("auth-modal")
const closeBtns = modalAuth.querySelectorAll(".close-btn")
const loginBtn = modalAuth.querySelector(".login-btn")
const openCartBtn = document.getElementById("open-cart-btn")
const logoutBtn = document.getElementById("logout-btn")





const openModal = _ => {
    modalAuth.classList.add("d-block")
    modalAuth.classList.remove("d-none")

    setTimeout(() => {
        modalAuth.classList.add("show")
    }, 10)
}

const closeModal = _ => {
    modalAuth.classList.remove("show")

    setTimeout(() => {
        modalAuth.classList.add("d-none")
    }, 500)
}

const login = _ => {

    openCartBtn.classList.add("d-block")
    openCartBtn.classList.remove("d-none")
    authBtn.classList.add("d-none")
    logoutBtn.classList.add("d-block")
    logoutBtn.classList.remove("d-none")
    closeModal()
}

const logout = _ => {
    openCartBtn.classList.add("d-none")
    openCartBtn.classList.remove("d-block")
    authBtn.classList.add("d-block")
    authBtn.classList.remove("d-none")
    logoutBtn.classList.add("d-none")
    logoutBtn.classList.remove("d-block")

    localStorage.removeItem("auth")
}

const checkAuth = _ => {
    if(JSON.parse(localStorage.getItem("auth"))){
        login()
    }
}

authBtn.addEventListener("click", openModal)

closeBtns.forEach(el => {
    el.addEventListener("click", closeModal)
})

loginBtn.addEventListener("click", () => {

    const loginInput = modalAuth.querySelector("#login-control")
    const passwordInput = modalAuth.querySelector("#password-control")

    const user = {
        login: loginInput.value,
        password: passwordInput.value
    }
    localStorage.setItem("auth", JSON.stringify(user))
    login()
})

logoutBtn.addEventListener("click", logout)

checkAuth()
