let audio = new Audio('./assets/song/OMORI_OST.wav')

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

Sunny.Habilidades.Acalmar = (325 / 2);
Sunny.Habilidades.Alegar = Sunny.Ataque;
Sunny.Habilidades.Encorajar = false;
Sunny.Habilidades.Estimar = 325;

function playMusic() {
    audio.play()
    divMusicPanel.innerHTML = `<button onclick="pauseMusic()"><img src="./assets/img/MusicButton/PauseButton.svg" alt=""></button>`
}

function pauseMusic() {
    audio.pause()
    divMusicPanel.innerHTML = `<button onclick="playMusic()"><img src="./assets/img/MusicButton/PlayButton.svg" alt=""></button>`
}

function LutarHTML() {
    divActionBox.innerHTML = `
            <button onclick="AttackSunny(0)">ATACAR</button>
            <button onclick="ShowHab()">HABILIDADE</button>
    `
}

function ShowHab() {
    divActionBox.innerHTML = `
    <div class="HabilityBox">
    <div class="HabilityBoxCusto">
        <p>Custo: <span id="spanCustoM"></span></p>
        
    </div>
    
    <div>
        <a onclick="AttackSunny(1)">Acalmar</a>
        <a onclick="AttackSunny(2)">Alegar</a>
    </div>
    <div>
        <a onclick="AttackSunny(3)">Encorajar</a>
        <a onclick="AttackSunny(4)">Estimar</a>
    </div>

</div>
    `
}

function AttackSunny(tipoAtaque) {
    if (tipoAtaque == 0) {

        Omori.HP -= Sunny.Ataque;
        console.log(`Sunny ataca Omori, causando ${Omori.Ataque}`);

    } else if (tipoAtaque == 1) {

        Sunny.HP += Sunny.Habilidades.Acalmar;
        console.log(`Sunny se acalmou e regenerou sua vida para ${Sunny.HP}`);

    } else if (tipoAtaque == 2) {

        for (i = 0; i < 3; i++) {
            Omori.HP -= Omori.Habilidades.Cortar
            console.log(`Sunny corta Omori usando sua lamina, causando ${Omori.Ataque}`)
        }

    } else if (tipoAtaque == 3) {

        Sunny.Habilidades.Encorajar = true;
        console.log(`Sunny se sente encorajado, por 3 turnos não gasta mana`)

    } else {

        Sunny.HP = Sunny.Habilidades.Estimar
        console.log(`Sunny se estimou e regenerou sua vida para ${Sunny.HP}`);

    }
   
    AttackOmori()

    console.log(`===========================`);
    console.log(`Sunny HP: ${Sunny.HP}`);
    console.log(`Omori HP: ${Omori.HP}`);
    console.log(`===========================`);
    divActionBox.innerHTML = `
    <button onclick="LutarHTML()">LUTAR</button>
    <button>FUGIR</button>
`


}


function AttackOmori() {
    let tipoAtaque = parseInt(Math.random() * 2);
    let selHabilidade = parseInt(Math.random() * 3);




    if (tipoAtaque == 0) {
        Sunny.HP -= Omori.Ataque
        console.log(`Omori ataca Sunny, causando ${Omori.Ataque}`)

    } else if (selHabilidade == 1) {
        Sunny.HP -= Omori.Habilidades.Esfaquear
        console.log(`Omori esfaqueia Sunny, o acertando bem no coração, causando ${Omori.Ataque * 1.5}`)

    } else if (selHabilidade == 2) {
        for (i = 0; i < 3; i++) {
            Sunny.HP -= Omori.Habilidades.Cortar
            console.log(`Omori corta Sunny usando sua lamina, causando ${Omori.Ataque}`)
        }

    } else {
        Sunny.HP -= Omori.Habilidades.Apagar

        console.log('Apagar')
    }
}






