            function__criaCartao(materia, pergunta, resposta){ 
 let caixa = document.getElementByI('caixa')
 let cartao = document.createElement('articule')
     
      cartao.className= 'cartao'
 
     cartao.innerHTML = `<div class ="cartao__conteudo"> 
          <h3> ${materia} </h3>
          <div class="cartao__conteudo__pergunta">
          <p>${Pergunta} 
          </p>
          </div> 
          <div class="cartao__conteudo__resposta">
            <p>${Resposta}</p> 
     </div> 
     `
          
           
            caixa.appendChild(cartao)
          }