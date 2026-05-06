let argumentos = Process.argv.slice(2);
let senha = argumentos[0];

console.log("Senha inserida:", senha);

let forca = 1;

if(senha.length < 10) {
console.log("A sua senha é muito  curta!");
} else if (
!senha.includes("@") && !senha.includes("$")
) {
console.log("Precisa incluir símbolos!")
} else if (senha == senha.toLowerCase() || senha == senha.toUpperCase()){
console.log("ok, senha forte!");
}

