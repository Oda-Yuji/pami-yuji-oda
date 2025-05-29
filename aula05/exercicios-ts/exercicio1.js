var produto = 'Mouse';
var preco = 59.90;
var disponivel = true;
if (disponivel == true) {
    var disponivel_1 = 'Sim';
    console.log("Produto: ".concat(produto, " - Pre\u00E7o: R$").concat(preco, "0 - Dispon\u00EDvel: ").concat(disponivel_1));
}
if (disponivel != true) {
    var disponivel_2 = 'Não';
    console.log("Produto: ".concat(produto, " - Pre\u00E7o: ").concat(preco, " - Dispon\u00EDvel: ").concat(disponivel_2));
}
