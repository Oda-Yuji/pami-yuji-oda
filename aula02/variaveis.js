var numero = 2;

let texto = "Hello";

const oQueEisso = "?";

//O ponto e vírgula é opcional! Boas práticas o usam 

console.log('Tipo var:', numero);

//Concatenar com vírgula me garante um espaço

numero = 13;

console.log(texto + " o número agora é " + numero);
console.log(texto, "o número agora é", numero);
console.log(`${texto} o número agora é ${numero}`);

texto = 69;

console.log(texto + numero);

// Concatenar dois valores numéricos com + vai acabar somando

// console.log(oQueEisso);

// Constantes não podem ter novos valores assinalados a ela

// oQueEisso = "uma constante???";

// console.log(oQueEisso);