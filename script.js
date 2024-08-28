const shift = 3;

function codificarTexto(texto) {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/)) {
            let codigo = texto.charCodeAt(i);
            let nuevoCodigo = ((codigo - 97 + shift) % 26) + 97; 
            encriptado += String.fromCharCode(nuevoCodigo);
        } else {
            encriptado += char;
        }
    }
    return encriptado;
}

function decodificarTexto(texto) {
    let desencriptado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/)) {
            let codigo = texto.charCodeAt(i);
            let nuevoCodigo = ((codigo - 97 - shift + 26) % 26) + 97;
            desencriptado += String.fromCharCode(nuevoCodigo);
        } else {
            desencriptado += char;
        }
    }
    return desencriptado;
}

function codificar() {
    let texto = document.querySelector('.left-panel .text-area').value.toLowerCase();
    let textoEnCodigo = codificarTexto(texto);
    document.querySelector('.right-panel .text-area').value = textoEnCodigo;
}

function decodificar() {
    let texto = document.querySelector('.left-panel .text-area').value.toLowerCase();
    let textoDecodificado = decodificarTexto(texto);
    document.querySelector('.right-panel .text-area').value = textoDecodificado;
}

function copiar() {
    let resultado = document.querySelector('.right-panel .text-area');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
