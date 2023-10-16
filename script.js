function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* 
  a função toogle faz o comando abaixo, se tiver tira se não tiver coloca...

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
