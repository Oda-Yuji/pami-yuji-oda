let produto: string = 'Mouse';
let preco: number = 59.90;
let disponivel: boolean = true;

if(disponivel == true) {
    let disponivel: string = 'Sim';
    console.log(`Produto: ${produto} - Preço: R$${preco}0 - Disponível: ${disponivel}`);
}

if(disponivel != true) {
    let disponivel: string = 'Não';
    console.log(`Produto: ${produto} - Preço: ${preco} - Disponível: ${disponivel}`);
}