
window.onload = () => {


  // enlaces de pestañas
  const linkActivo = document.getElementById("link-cifrar");
  const linkDesactivo = document.getElementById("link-descifrar");
  // ocultar secciones
  linkActivo.addEventListener("click", () => {
    document.getElementById("link-cifrar").classList.add("link_active");
    document.getElementById("link-descifrar").classList.remove("link_active");
    document.getElementById("contenido-mensaje-cifrar").classList.remove("display_none");
    document.getElementById("contenido-mensaje-cifrar").classList.add("display_block");
    document.getElementById("contenido-mensaje-descifrar").classList.remove("display_block");
    document.getElementById("contenido-mensaje-descifrar").classList.add("display_none");
  });

  linkDesactivo.addEventListener("click", () => {
    document.getElementById("link-cifrar").classList.remove("link_active");
    document.getElementById("link-descifrar").classList.add("link_active");
    document.getElementById("contenido-mensaje-descifrar").classList.remove("display_none");
    document.getElementById("contenido-mensaje-descifrar").classList.add("display_block");
    document.getElementById("contenido-mensaje-cifrar").classList.remove("display_block");
    document.getElementById("contenido-mensaje-cifrar").classList.add("display_none");
  });



  const btnCifrar = document.getElementById("btn-cifrar");
  btnCifrar.addEventListener("click", () => {
    let textoCifrar = document.getElementById("caja-mensaje-cifrar").value;

    let offsetCifrar = document.getElementById("offset-cifrar").value;
    document.getElementById("comprobar-mensaje-cifrar").innerHTML = window.cipher.encode(textoCifrar, offsetCifrar);
  });



  const btnDescifrar = document.getElementById("btn-descifrar");
  btnDescifrar.addEventListener("click", () => {
    let textoDescifrar = document.getElementById("caja-mensaje-descifrar").value;

    let offsetDescifrar = document.getElementById("offset-descifrar").value;
    document.getElementById("comprobar-mensaje-descifrar").innerHTML = window.cipher.decode(textoDescifrar, offsetDescifrar);
  });
}