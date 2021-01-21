const pastas = [
  'card',
  'slider',
  'jogoDaVelha',
  'galeriaDeFotosInsta',
  'menu',
  'videoPlayer'
]

const menu = document.getElementById('nav')
let elements = []

for(let i = 0 ; i < pastas.length; i++){
  elements[i] = `<a href="../projetos/${pastas[i]}/index.html">${pastas[i]}</a>`
}

menu.innerHTML = elements.join('')//Tirar a vírgula