function addText() {
    let resultado = "";
    let docs = [];
    let doc = document.getElementById("text");
    docs = doc.value.split("\n");
    for (let i = 0; i < docs.length; i++) {
        resultado += "*" + docs[i].trim() + "*" + "\n";
    }
    document.getElementById("text").value = resultado;
}

function copyText() {
    let copyText = document.getElementById("text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function clearText() {
    document.getElementById("text").value = "";    
}