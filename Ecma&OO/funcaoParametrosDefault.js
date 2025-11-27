// Parâmetros default em funções em JavaScript permitem que você defina valores padrão para os parâmetros de uma função. Se nenhum valor for passado para esses parâmetros quando a função for chamada, os valores padrão serão usados.
const contarUmaHistoria = (personagem = 'Nina', atividade = 'brincar', nomeDono = 'Cauan') => {
    console.log(`Era uma vez um cachorro chamado ${personagem}, ela adorava ${atividade}, seu dono era o ${nomeDono} e eles viveram felizes para sempre.`)
}

contarUmaHistoria() // usando os valores padrão
contarUmaHistoria('Dog', undefined, 'João')