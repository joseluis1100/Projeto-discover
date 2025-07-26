function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://i.redd.it/ga26odpyiqt31.jpg");
    img.setAttribute("alt", "Foto no tema claro");
  } else {
    img.setAttribute("src", "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:360,cw:1200,ch:1200,q:80,w:1200/xsMH4DxwTEdURCh9VqXCHP.jpg");
    img.setAttribute("alt", "Foto no tema escuro");
  }
}