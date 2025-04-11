function carregarDados(){
    let codigo = document.getElementById("codigo").value
    let url = `https://pokeapi.co/api/v2/pokemon/${codigo}`
    fetch(url)
        .then((response) => {
        return response.json()
    })
    .then((dado) => {
        console.log(dado.url)
        document.getElementById("name").innerHTML = dado.name
        document.getElementById("id").innerHTML = dado.id

        let img = dado.sprites.other.home.front_default

        if (img) {
            let imageEl = document.getElementById("image")
            imageEl.setAttribute("src", img)
            imageEl.style.display = ""
        } else {
            document.getElementById("image").style.display = "none"
        } //Esse trecho verifica se o (img) possui um valor válido. Se possuir
          //ele irá tornar o elemento de imagem no HTML visível. Se não detectar
          //um valor válido, o elemento continua escondido.

        console.log(img)

        document.getElementById("type1").innerHTML = dado.types[0].type.name

        document.getElementById("hp").innerHTML = dado.stats[0].base_stat
        document.getElementById("attack").innerHTML = dado.stats[1].base_stat
        document.getElementById("defense").innerHTML = dado.stats[2].base_stat
        document.getElementById("specialattack").innerHTML = dado.stats[3].base_stat
        document.getElementById("specialdefense").innerHTML = dado.stats[4].base_stat
        document.getElementById("speed").innerHTML = dado.stats[5].base_stat

        document.getElementById("hpname").innerHTML = dado.stats[0].stat.name
        document.getElementById("attackname").innerHTML = dado.stats[1].stat.name
        document.getElementById("defensename").innerHTML = dado.stats[2].stat.name
        document.getElementById("saname").innerHTML = dado.stats[3].stat.name
        document.getElementById("sdname").innerHTML = dado.stats[4].stat.name
        document.getElementById("spdname").innerHTML = dado.stats[5].stat.name
    })

}
