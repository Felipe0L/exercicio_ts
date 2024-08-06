function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}
const resultado: number = multiplicacao(5, 2); 

console.log(`O resultado da multiplicação é ${resultado}`);

function saudacao(nome: string): string {
    let olaNome = `Olá ${nome}!`;
    return olaNome
};

console.log(saudacao('Felipe'));