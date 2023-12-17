
const Omori = {
    HP: 255,
    Ataque: 36,
    Habilidades: {}
};

Omori.Habilidades.Esfaquear = Omori.Ataque * 1.5;
Omori.Habilidades.Cortar = Omori.Ataque;
Omori.Habilidades.Apagar = Omori.Ataque * 3;


const Sunny = {
    HP: 325,
    Mana: 55,
    Status: false,
    Ataque: 34,
    Habilidades: {}
}

Sunny.Habilidades.Acalmar = Sunny.HP += (325 / 2);
Sunny.Habilidades.Alegar = Sunny.Ataque;
Sunny.Habilidades.Encorajar = false;
Sunny.Habilidades.Estimar = Sunny.HP = 325;





function AttackSunny() {
    let tipoAtaque = parseInt(Math.random() * 2);
    let selHabilidade = parseInt(Math.random() * 3);




    if (tipoAtaque == 0) {
        Sunny.HP -= Omori.Ataque
        console.log(`Omori ataca Sunny, causando ${Omori.Ataque}`)
        console.log(Sunny.HP)

    } else if (selHabilidade == 1) {
        Sunny.HP -= Omori.Habilidades.Esfaquear
        console.log(`Omori esfaqueia Sunny, o acertando bem no coração, causando ${Omori.Ataque * 1.5}`)
        console.log(Sunny.HP)

    } else if (selHabilidade == 2) {
        for (i = 0; i < 3; i++) {
            Sunny.HP -= Omori.Habilidades.Cortar
            console.log(`Omori corta Sunny suando sua lamina, causando ${Omori.Ataque}`)
        }
        console.log(Sunny.HP)

    } else {
        Sunny.HP -= Omori.Habilidades.Apagar

        console.log('Apagar')
        console.log(Sunny.HP)
    }
}






