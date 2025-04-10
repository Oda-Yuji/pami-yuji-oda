function exibirMsg(msg)
{
    console.log(msg)
}

exibirMsg("Ondax cerebraix")

exibirMsg("Pênix né, piroca pros íntimos")

exibirMsg("Eu criei sexo")

function soma(n1, n2)
{
    return n1 + n2
}

console.log(soma(2, 7))

const potencia = (n, p) => {
    return Math.pow(n, p)
}

console.log(potencia(7, 2))

const media = (nota1, nota2) => {
    let notaFinal = (nota1 + nota2) / 2

    if (notaFinal < 4.0)
    {
        return "Se fudeu"
    } 
    if (notaFinal >= 6.0)
    {
        return "Passou"
    }

    return "Recuperação, cabaço"
}

console.log(media(5, 2))