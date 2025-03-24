function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  // } ------------------------------------------
  // Pegar a Tag img
  const img = document.querySelector("#profile img")
  //Substituir a Imagem
  if (html.classList.contains("light")) {
    //Se tiver light adicionar a imagem Light

    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se tiver sem o light mode, permanecer a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
