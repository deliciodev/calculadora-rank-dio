// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
// calculo (vitórias - derrotas)
// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

function rankHero(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  const rank = "";
  if (saldoVitorias < 10) {
    rank = "Ferro";
  } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    rank = "Bronze";
  } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    rank = "Prata";
  } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    rank = "Ouro";
  } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    rank = "Diamante";
  } else if (saldoVitorias > 91 && saldoVitorias <= 100) {
    rank = "Lendário";
  } else {
    rank = "Imortal";
  }
  return saldoVitorias, rank;
}

let vitorias = 15;
let derrotas = 64;

rankHero(saldoVitorias, rank);

console.log(`O Heroi tem ${saldoVitorias} Vitorias e está no rank ${rank}`);
