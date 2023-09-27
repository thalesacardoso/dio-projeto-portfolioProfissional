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

}


apiGithub();