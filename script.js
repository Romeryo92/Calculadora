

function acao (num){

    let numero = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = numero + num
  }

  function limpar(){
    let limpar = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = null
  }

  function apagar(){
    let apaga = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = apaga.substring(0, apaga.length -1)
  }

  function resultado(){
    let res = document.getElementById('tela').innerHTML
    if(res){
      document.getElementById('tela').innerHTML = eval(res)
    }else{
      document.getElementById('tela').innerHTML = 'Digite algo!'  
    }
  }
