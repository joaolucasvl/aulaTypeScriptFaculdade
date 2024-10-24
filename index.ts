var primeiraVariavel = "Sou uma variavel";
console.log("o valor da variavel é ", primeiraVariavel)

var variavelPorAnotacao:string;

variavelPorAnotacao = "Algum texto";
console.log("O valor da segunda variavel é ", variavelPorAnotacao);

var tipoNumerico = 1;
console.log("O Valor de tipoNumero ", tipoNumerico);

var tipoNumericoAnotacao: number;
tipoNumericoAnotacao = 2;

console.log("O Valor de TipoNumericoAnotação ", tipoNumericoAnotacao);

var tipoBooleanoTrue:boolean;
var tipoBooleanoFalse:boolean;
tipoBooleanoTrue = true;
tipoBooleanoFalse = false;

console.log("O Valor de TipoBooleano é ", tipoBooleanoTrue);
console.log("O Valor de TipoBooleano é ", tipoBooleanoFalse);

// ------------------------------------------------------------------------------

var isValid: boolean = true
var studentName: string = "";
var amount: number = 0;

if (isValid) {
    studentName = "João";
    amount = 100;
}

console.log(`O aluno ${studentName}, vai pagar um lanche ao professor no valor de ${amount}`);

//------------------------------------------------------------------------------------------------


var cidades = ['Jundiaí', 'Itupeva', 'Sao Paulo']
console.log("O numero de cidades é: ", cidades.length);

for(let i = 0; i < cidades.length; i++) {
    console.log(`A cidade da posição ${i} é: ${cidades[i]}`)
}