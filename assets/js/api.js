
async function apiGithub() {
   let url = 'https://raw.githubusercontent.com/thalesacardoso/dio-projeto-portfolioProfissional/main/data/profile.json'

   await fetch(url)
   .then(response => response.json())
   .then(dados => {
      mudarPerfil(dados)
      mudarSkill(dados)
      mudarIdioma(dados)
      mudarPortfolio(dados)
   })
}