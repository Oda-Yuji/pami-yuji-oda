function exibirLivro(livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo));
    console.log("Autor: ".concat(livro.autor));
    console.log("Ano da Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
}
exibirLivro({ titulo: 'Entre o Cavalo e o Lobo', autor: 'Daniel', anoPublicacao: 2021 });
