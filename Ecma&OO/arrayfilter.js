let funcionarios = [
  { nome: "Jose", cargo: "Analista de RH", salario: 3100, status: "Ativo" },
  { nome: "Cauan", cargo: "Analista de TI", salario: 6100, status: "Ativo" },
  { nome: "Maria", cargo: "Assitente Adm", salario: 1700, status: "Inativo" },
];

funcionarios.filter(f => {
    return f.salario < 2000

}).filter(f => {
    return f.status === 'Ativo'
})

