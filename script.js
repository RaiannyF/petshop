function cadastrar(){
    localStorage.setItem("nome", document.getElementById('nome').value);
    document.getElementById("resultado").innerHTML=localStorage.getItem("nome");
}