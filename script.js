console.log("=== Início do Exercício da Cantina ===");

// Passo 1 – Declarando variáveis
console.log("\n--- Passo 1 ---");

// Use var para declarar o nome da cantina.
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

// Use let para declarar a quantidade de salgados disponíveis (esse valor pode mudar).
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// Use const para declarar o preço fixo de cada salgado.
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// ---
// Passo 2 – Atualizando valores
console.log("\n--- Passo 2 ---");

// Atualize o número de salgados. Calcule quanto a cantina ganhou.
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// ---
// Passo 3 – Teste rápido
console.log("\n--- Passo 3 ---");

// 1. O que acontece se tentar mudar o valor de precoSalgado?
console.log("\nTestando reatribuir 'const' (precoSalgado = 6)...");
try {
    precoSalgado = 6; // ERRO: Assignment to constant variable.
    console.log("Valor do preço alterado para: " + precoSalgado);
} catch (e) {
    console.error("ERRO! " + e.message);
    console.log(">> OBJETIVO: 'const' é constante e não pode ser reatribuído.");
}


// 2. O que acontece se criar outra variável com var dentro de um bloco {}?
console.log("\nTestando escopo de 'var' vs 'let'...");

if (true) {
    var testeVar = "Sou var (dentro do bloco)";
    let testeLet = "Sou let (dentro do bloco)";
    console.log(testeVar); // funciona
    console.log(testeLet); // funciona
}

// 'var' vaza o escopo do bloco
console.log("Fora do bloco: " + testeVar); // funciona
console.log(">> OBJETIVO: 'var' tem escopo de função (ou global) e 'vaza' do bloco if.");

// 'let' respeita o escopo do bloco
console.log("\nTestando 'let' fora do bloco...");
try {
    console.log(testeLet); // ERRO: testeLet is not defined
} catch (e) {
    console.error("ERRO! " + e.message);
    console.log(">> OBJETIVO: 'let' tem escopo de bloco e não existe fora do 'if'.");
}

console.log("\n=== Fim do Exercício ===");
