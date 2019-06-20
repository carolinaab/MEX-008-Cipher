window.cipher = {
  encode: (offset, str) =>{
      let codModif = '';
      let textModif = '';
      //let mayusculas = str.toUpperCase();
      //console.log(mayusculas);

       for (let i = 0; i < str.length; i++) {
         let ascii = str.charCodeAt(i);
         if (ascii >= 65 && ascii <= 90) {
           codModif = ((ascii - 65 + offset) % 26 + 65);
        }   else {
           codModif = ascii;
        }
           textModif += String.fromCharCode(codModif);

      }
        return textModif;
  },
  
  // descifrado
  decode: (offset,str) => {
    let decoModif = '';
    let textDeco = '';
    for(let i= 0; i < str.length; i++) {
      let ascii = str.charCodeAt(i);
      if(ascii >= 65 && ascii <= 90) {
         decoModif = ((ascii + 65 - offset + 26) % 26 + 65);
      }  else {
         decoModif = ascii;

      }
      textDeco += String.fromCharCode(decoModif);
    }
    
    return textDeco;
  }
};
