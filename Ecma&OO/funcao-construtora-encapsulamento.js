let Carro = function() {
  this.cor = "Amarelo";
  this.modelo = "Chevette";
  this.velocidadeAtual = 0;
  this.velocidadeMaxima = 180;

  this.acelerar = function() {
    let velocidade = this.getVelocidadeAtual() + 50;
    if (velocidade > this.velocidadeMaxima) {
        velocidade = this.velocidadeMaxima
    }
    this.setVelocidadeAtual(velocidade);
  };

  this.getVelocidadeAtual = function() {
    return this.velocidadeAtual;
  };

  this.setVelocidadeAtual = function(velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual;
  };
};


let Carro2 = function() {
  this.cor = "Amarelo";
  this.modelo = "Chevette";
  this.velocidadeAtual = 0;
  let velocidadeMaxima = 180;
  let quilometrosRodadados = 0


  this.acelerar = function() {
    let velocidade = this.getVelocidadeAtual() + 50;
    if (velocidade > velocidadeMaxima) {
        velocidade = velocidadeMaxima
    }
    this.setVelocidadeAtual(velocidade);
    setQuilometrosRodados(0.07)
    console.log(quilometrosRodadados)
  };

  this.getVelocidadeAtual = function() {
    return this.velocidadeAtual;
  };

  this.setVelocidadeAtual = function(velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual;
  };

  let setQuilometrosRodados = function(q) {
    quilometrosRodadados += q
  }
};