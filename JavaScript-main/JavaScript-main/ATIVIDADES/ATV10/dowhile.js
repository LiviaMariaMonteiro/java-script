//Atividade A
let num;

do{
    num = prompt('Digite um número (0 para sair): ');
    if (num !== '0') alert(`O dobro do ${num} é ${num * 2}`);
        
} while (num !== '0');

alert('Saindo...')

//Atividade B
let nome;

do {
    nome = prompt('Digite seu nome: ');
} while (nome.toUpperCase() !== 'LÍVIA');

alert('Nome está correto!');
