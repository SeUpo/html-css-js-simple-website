function openNav() {
  document.querySelector(".mySidenav").style.width = "250px";
}
function closeNav() {
document.querySelector(".mySidenav").style.width = "0";
}

function DarkTheme() {
    const body = document.body
    const isDarkTheme = localStorage.getItem('DarkTheme') == 'true'

    localStorage.setItem('DarkTheme', !isDarkTheme)
    body.classList.toggle('dark-theme', !isDarkTheme)

    document.querySelectorAll("#logo-black").forEach((el) => {
      el.classList.toggle('hide', !isDarkTheme)})
    document.querySelectorAll("#logo-white").forEach((el) => {
      el.classList.toggle('hide', isDarkTheme)})
    document.querySelectorAll(".svg-bg").forEach((el) => {
      el.classList.toggle('bg-dark', isDarkTheme)})
    document.querySelectorAll(".options-item.active").forEach((el) => {
      el.classList.toggle('active-dark', isDarkTheme)})
    document.querySelectorAll(".example-block").forEach((el) => {
      el.classList.toggle('active-dark', isDarkTheme)})
}

document.querySelector('.toggle-theme').addEventListener('click', DarkTheme)

function onload() {
    document.body.classList.toggle('dark-theme', localStorage.getItem('DarkTheme') == 'true')
    if (localStorage.getItem('DarkTheme') === 'true') {
      document.querySelector('.toggle-theme').checked = false
      document.querySelectorAll("#logo-black").forEach((el) => {
        el.classList.add('hide')})

    } else {
      document.querySelector('.toggle-theme').checked = true
      document.querySelectorAll("#logo-white").forEach((el) => {
        el.classList.add('hide')})
      document.querySelectorAll(".svg-bg").forEach((el) => {
        el.classList.add('bg-dark')})  
      document.querySelectorAll(".options-item.active").forEach((el) => {
        el.classList.add('active-dark')})
      document.querySelectorAll(".example-block").forEach((el) => {
        el.classList.add('active-dark')})
    }
}

document.addEventListener('DOMContentLoaded', onload)