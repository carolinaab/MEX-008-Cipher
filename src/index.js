let inputEncode = document.getElementById('input-encode');
const offset = document.getElementById('offset');
const boton = document.getElementById('boton');
const inputDecode = document.getElementById('input-decode');

//  cifrar.addEventListener('keyup', () => {

inputEncode.addEventListener("keyup", () => {
  inputDecode.value = window.cipher.encode(parseInt(offset.value), inputEncode.value.toUpperCase());
});
//valores del descifrado
let inputDeco = document.getElementById('input-deco')
const offset2 = document.getElementById('offset2')
const boton2 = document.getElementById('boton2')
const inputEnco = document.getElementById('input-enco')


inputDeco.addEventListener('keyup', () => {
  inputEnco.value = window.cipher.decode(parseInt(offset.value), inputDeco.value.toUpperCase());
});