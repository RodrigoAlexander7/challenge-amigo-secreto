// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

const agregarAmigo = () =>{
   const input = document.getElementById('amigo');
   const amigo = input.value.trim() // removemos espacios
   if(amigo !== '' && !amigos.includes(amigo)) amigos.push(amigo);
   else alert('Ingrese un nombre valido'); 
   input.value = '';
   console.log(amigos)
   actualizarListaAmigos(amigo)
}
const actualizarListaAmigos = (amigo)=>{
   const lista = document.getElementById('listaAmigos');
   const item = document.createElement('li')
   item.textContent = amigo
   lista.appendChild(item)
}

const sortearAmigo = ()=>{
   selected = amigos[Math.floor(Math.random()*amigos.length)];

}