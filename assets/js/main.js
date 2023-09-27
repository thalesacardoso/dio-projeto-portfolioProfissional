// função que abre e fecha as abas da página
function abrirAba(nomeAba, i) {
   // variáveis
   let aba = document.getElementById(nomeAba)
   let conteudo = document.getElementsByClassName('conteudo')[i]
   let titulo = document.querySelector(`#${nomeAba} .titulo`)
   let seta = document.getElementsByClassName('seta')[i]

   // Adiciona ou remove classes
   aba.classList.toggle('bgcolor')
   conteudo.classList.toggle('oculto')

   if (aba.classList[0] == 'bgcolor') {
      titulo.style.border = '0'
      seta.style.rotate = '180deg'
   } else {
      titulo.style.border = '2px solid white'
      seta.style.rotate = '0deg'
   }
}


function mudarPerfil(dados) {

   let perfil = {}
   perfil.foto = document.getElementsByClassName('api-perfil')[0]
   perfil.foto.src = dados.photo
   perfil.foto.alt = 'Foto do perfil'

   perfil.nome = document.getElementsByClassName('api-perfil')[1]
   perfil.nome.innerHTML = dados.name

   perfil.job = document.getElementsByClassName('api-perfil')[2]
   perfil.job.innerHTML = dados.job

   perfil.endereco = document.getElementsByClassName('api-perfil')[3]
   perfil.endereco.innerHTML = dados.location

   perfil.telefone = document.getElementsByClassName('api-perfil')[4]
   perfil.telefone.innerHTML = dados.phone

   perfil.email = document.getElementsByClassName('api-perfil')[5]
   perfil.email.innerHTML = dados.email

}


function mudarSkill(dados) {
   let hardSkill = document.getElementById('api-hardSkill')
   let softSkill = document.getElementById('api-softSkill')

   dados.skills.hardSkills.map((skill) => {
      hardSkill.innerHTML += `<img src="${skill.logo}" alt="${skill.name}">`
   })

   dados.skills.softSkills.map((skill) => {
      softSkill.innerHTML += `<li > ${skill} </li>`
   })

}


function mudarIdioma(dados) {
   let idioma = document.getElementById('api-idioma')

   dados.languages.map((lang) => {
      idioma.innerHTML += `<li> ${lang} </li>`
   })

}


function mudarPortfolio(dados) {
   let portfolio = document.getElementById('api-portfolio')

   dados.portfolio.map((port) => {
      portfolio.innerHTML += `
      <div class="projetos">
         <h3>${port.name}</h3>
         <p>${port.url}</p>
      </div> `
   })

}


function mudarExperiencia(dados) {
   let experiencia = document.getElementById('api-experiencia')

   dados.experience.map((exp) => {
      experiencia.innerHTML += `
         <div class="experiencia">
            <h3>${exp.name}</h3>
            <p class="data">${exp.period}</p>
            <p class="descricao">
               ${exp.description}
            </p>
         </div> `
   })

}



// console.log(dados)
apiGithub();