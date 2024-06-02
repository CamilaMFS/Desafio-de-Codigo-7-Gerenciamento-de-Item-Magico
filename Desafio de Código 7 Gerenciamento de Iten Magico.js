class ItemMagico {
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo;
        this.dano = dano;
        this.resistencia = resistencia;
    }

    calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}

const tipoItem = prompt("Digite o tipo do item (arma, escudo, etc.):");
const danoItem = parseInt(prompt("Digite o valor de dano do item:"));
const resistenciaItem = parseInt(prompt("Digite o valor de resistência do item:"));

const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

console.log("Tipo: " + itemPersonalizado.tipo);
console.log("Dano: " + itemPersonalizado.dano);
console.log("Resistência: " + itemPersonalizado.resistencia);

const danoTotal = itemPersonalizado.calcularDano();
console.log("Dano em combate: " + danoTotal);

// Tipo: arma
// Dano: 50
// Resistência: 30
// Dano em combate: 100