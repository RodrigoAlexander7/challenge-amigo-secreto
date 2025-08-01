// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

const agregarAmigo = () =>{
   const input = document.getElementById('amigo');
   const amigo = input.value.trim() // removemos espacios
   if(amigo === '' ) alert('Ingrese un nombre valido');
   else amigos.push(amigo);
   input.innerHTML = '';
   console.log(amigos)
}

