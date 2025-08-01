// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

const agregarAmigo = () =>{
   const input = document.getElementById('amigo');
   const amigo = input.value.trim() // removemos espacios

   if(amigo !== '' && !amigos.includes(amigo)) {
      amigos.push(amigo);
      //actualizarListaAmigos(amigo) 

   }
   else alert('Ingrese un nombre valido'); 

   input.value = '';
   console.log(amigos)
   mostrarListaAmigos(amigos)
   
}

const mostrarListaAmigos = (amigos)=>{
   const lista = document.getElementById('listaAmigos');
   lista.innerHTML = '';
   /* Usando For each 
   amigos.forEach(amigo => {
      const item = document.createElement('li')
      item.textContent = amigo
      lista.appendChild(item)
   });
   */
  for(i = 0; i < amigos.length; i++){
      const item = document.createElement('li')
      item.textContent = amigos[i]
      lista.appendChild(item)
  }
}

/*
Esta funcion no la usaremos puesto que el enfoque preferido en las indicaciones es usando el iterador for
const actualizarListaAmigos = (amigo)=>{
   const lista = document.getElementById('listaAmigos');
   const item = document.createElement('li')
   item.textContent = amigo
   lista.appendChild(item)
}
*/

const sortearAmigo = ()=>{
   selected = amigos[Math.floor(Math.random()*amigos.length)];

}