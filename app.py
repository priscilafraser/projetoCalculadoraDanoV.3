from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    imagemyoda = '../static/img/yoda.png'
    imagemvader = "../static/img/darthvader.jpg"
    imagemluke = "../static/img/luke.jpg"
    imagemhan = '../static/img/hansolo.jpg'
    imagemimperador = "../static/img/imperador.jpg"
    imagemchewy = "../static/img/chewbacca.jpg"
    imagemleia = '../static/img/princesaleia.jpg'
    imagemtroop = "../static/img/stormtrooper.png"

    sabreverde = "../static/img/sabreluzverde.png"
    sabrevermelho = "../static/img/sabreluzvermelha.jpg"
    armahan = "../static/img/armahansolo.jpg"
    armachewy = "../static/img/armaChewbacca.png"
    armaleia = "../static/img/armaprincesaleia.jpg"
    armatroop = "../static/img/armastormtooper.png"


    navemillenium = "../static/img/navemilleniumfalcon.jpg"
    navevader = "../static/img/navedarthvader.jpg"
    naveimperador = "../static/img/nave3.jpg"
    
    return render_template(
        'index.html',
        imagemyoda = imagemyoda,
        imagemvader = imagemvader,
        imagemluke = imagemluke,
        imagemhan = imagemhan,
        imagemimperador = imagemimperador,
        imagemchewy = imagemchewy,
        imagemleia = imagemleia,
        imagemtroop = imagemtroop,

        sabreverde = sabreverde,
        sabrevermelho = sabrevermelho,
        armahan = armahan,
        armachewy = armachewy,
        armaleia = armaleia,
        armatroop = armatroop,

        navemillenium = navemillenium,
        navevader = navevader,
        naveimperador = naveimperador
    )

if __name__ == '__main__':
    app.run(debug = True)