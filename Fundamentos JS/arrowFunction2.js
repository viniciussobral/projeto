function Pessoa() {
    this.idade = 0

    setInterval(() => {

        this.idade++
        console.log(this.idade)
    }, 1000)

}

// a vantagem de funções com o arrow é que o this não varia dentro dela ao contrario de funções normais

new Pessoa