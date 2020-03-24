function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()


    msg.innerHTML = `Agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
    
    if (hora >= 4 && hora < 12){
        img.src = "img/manha.png"
        document.body.style.background = "#edcc92"
    } else if (hora >= 12 && hora < 18){
        img.src = "img/tarde.png"
        document.body.style.background = "#202416"
    } else {
        img.src = "img/noite.png"
        document.body.style.background = "#004488"
    }
}
