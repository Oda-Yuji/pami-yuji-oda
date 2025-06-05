interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`); 
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano da Publicação: ${livro.anoPublicacao}`);
}

exibirLivro({ titulo: 'Entre o Cavalo e o Lobo', autor: 'Daniel', anoPublicacao: 2021 });