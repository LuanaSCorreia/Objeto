// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
    Signo: "Câncer",
    Bairro:'Irajá',
    Profissão:'Professora'
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
   eu.Idade = 22

// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.
delete eu.Bairro
console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.
let cadastro =[
    {
        nome: 'Mariana',
        idade:18,
        telefone:21999998888,
        amigos:'Mavi', amigos1:'Lucas', amigos2:'Raquel', amigos3:'Laura', amigos4:'Daniel'
    },
    {
        nome: 'Beatriz',
        idade:23,
        telefone:21977771111,
        amigos:'Luana', amigos1:'Sarah', amigos2:'Lucas', amigos3:'Aline',amigos4:'Larissa'   
    },
    {
        nome: 'Karynne',
        idade:30,
        telefone:21933332222,
        amigos:'Bruno', amigos1:'Camila', amigos2:'Polli', amigos3:'Dani', amigos4:'Sandy' 
    },
    {
        nome: 'Monica',
        idade:46,
        telefone:21988882222,
        amigos:'Tais', amigos1:'Jack', amigos2:'Vivi', amigos3:'Junior', amigos4:'Otilia' 
    },
    {
        nome: 'Maeva',
        idade:8,
        telefone:21966664444,
        amigos:'Mariah', amigos1:'Duda', amigos2:'Paula', amigos3:'Maya', amigos4:'Dani' 
    }
]

console.log(cadastro[0].amigos)
console.log(cadastro[1].amigos)
console.log(cadastro[2].amigos)
console.log(cadastro[3].amigos)
console.log(cadastro[4].amigos)