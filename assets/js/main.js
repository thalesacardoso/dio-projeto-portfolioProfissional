// função que abre e fecha as abas da página ( Accordion )
function abrirAba(nomeAba, i) {
   // variáveis
   let aba = document.getElementById(nomeAba)
   let conteudo = document.getElementsByClassName('conteudo')[i]
   let titulo = document.querySelector(`#${nomeAba} .titulo`)
   let seta = document.getElementsByClassName('seta')[i]

   // Adiciona ou remove classes
   aba.classList.toggle('bgcolor')
   conteudo.classList.toggle('oculto')

   // Verifica se existe a classe bgcolor, se existir ele tira a borda e gira a seta da aba.
   if (aba.classList[0] == 'bgcolor') {
      titulo.style.border = '0'
      seta.style.rotate = '180deg'
   } else {
      titulo.style.border = '2px solid white'
      seta.style.rotate = '0deg'
   }
}

// Muda os dados do perfil dentro da página através da API
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

// Muda os dados do Skill dentro da página através da API
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

// Muda os dados do Idioma dentro da página através da API
function mudarIdioma(dados) {
   let idioma = document.getElementById('api-idioma')

   dados.languages.map((lang) => {
      idioma.innerHTML += `<li> ${lang} </li>`
   })

}

// Muda os dados da Educação dentro da página através da API
function mudarEducacao(dados){
   let conquistas = document.getElementById('api-conquistas')
   let cursos = document.getElementById('api-cursos')

   dados.education.map((conquist) => {
      conquistas.innerHTML += `<img src="${conquist.logo}" alt="${conquist.name}"> `
      cursos.innerHTML += `
         <div>
            <h3><a href="#">${conquist.name}</a></h3>
            <p>${conquist.titulo}</p>
         </div> 

      `
   })

}

// Muda os dados do Portfólio dentro da página através da API
function mudarPortfolio(dados) {
   let portfolio = document.getElementById('api-portfolio')

   dados.portfolio.map((port) => {
      portfolio.innerHTML += `
      <div class="projetos">
         <h3><a href="${port.url}">${port.name} </a></h3>
         <p>${port.url}</p>
      </div> `
   })

}

// Muda os dados de Experiência Profissional dentro da página através da API
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

// Chama a API
apiGithub();