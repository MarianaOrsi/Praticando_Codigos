const nomes = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camila"];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log("Quantidade de alunos:", nomes.length);
console.log(`Alunos da sala 1: ${sala1}\n`);
console.log(`Alunos da sala 2: ${sala2}`);
