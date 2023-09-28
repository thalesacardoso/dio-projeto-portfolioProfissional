
// Função que faz a requisição dos dados pela API
async function apiGithub() {
   // URL de onde será consumido os dados
   let url = 'https://raw.githubusercontent.com/thalesacardoso/dio-projeto-portfolioProfissional/main/data/profile.json'

   // Método responsável por fazer a requisição
   await fetch(url)
         .then(response => response.json())
         .then(dados => {
            // Passa o resultado da promisse convertido em JSON como parâmetro das funções abaixo
            mudarPerfil(dados)
            mudarSkill(dados)
            mudarIdioma(dados)
            mudarEducacao(dados)
            mudarPortfolio(dados)
            mudarExperiencia(dados)
         })
}