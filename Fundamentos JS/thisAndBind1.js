const pessoa = {
    saudacao: 'Boa noite!',
    falar() {
        console.log(this.saudacao)

    }
}

pessoa.falar();

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind ele é um método responsavel por pegar um objeto que vc cria e pode passar para uma variavel ele faz uma amarração de objeto
falarDePessoa()


