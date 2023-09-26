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

   if(aba.classList[0] == 'bgcolor'){
      titulo.style.border = '0'
      seta.style.rotate = '180deg'
   } else {
      titulo.style.border = '2px solid white'
      seta.style.rotate = '0deg'
   }
}
