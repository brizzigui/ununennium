const hydrogen = "rgb(135, 206, 250)";
const metal = "rgb(171, 86, 245)";
const alkali = "rgb(255, 99, 99)";
const terrous_alkali = "rgb(40, 224, 154)";
const ametal = "rgb(245, 51, 186)"
const noble_gases = "rgb(245, 51, 186)"

const colors = [
    hydrogen, noble_gases, alkali, terrous_alkali, metal, ametal, ametal, ametal,
    ametal, noble_gases, alkali, terrous_alkali, metal, metal, ametal, ametal,
    ametal, noble_gases, alkali, terrous_alkali, metal, metal, metal, metal,
    metal, metal, metal, metal, metal, metal, metal, metal, metal,
    ametal, ametal, noble_gases, alkali, terrous_alkali, metal, metal, metal,
    metal, metal, metal, metal, metal, metal, metal, metal,
    metal, metal, metal, ametal, noble_gases, alkali, terrous_alkali, metal,
    metal, metal, metal, metal, metal, metal, metal, metal,
    metal, metal, metal, metal, metal, metal, metal, metal,
    metal, metal, metal, metal, metal, metal, metal, metal,
    metal, metal, metal, metal, noble_gases, alkali, terrous_alkali, metal,
    metal, metal, metal, metal, metal, metal, metal, metal,
    metal, metal, metal, metal, metal, metal, metal, metal,
    metal, metal, metal, metal, metal, metal, metal, metal,
    metal, metal, metal, metal, noble_gases
  ];

const answers = [
    "Hidrogênio", "Hélio", "Lítio", "Berílio", "Boro", "Carbono", "Nitrogênio", "Oxigênio",
    "Flúor", "Neônio", "Sódio", "Magnésio", "Alumínio", "Silício", "Fósforo", "Enxofre",
    "Cloro", "Argônio", "Potássio", "Cálcio", "Escândio", "Titânio", "Vanádio", "Cromo",
    "Manganês", "Ferro", "Cobalto", "Níquel", "Cobre", "Zinco", "Gálio", " Germânio", "Arsênio",
    "Selênio", "Bromo", "Criptônio", "Rubídio", "Estrôncio", "Ítrio", "Zircônio", "Nióbio",
    "Molibdênio", "Tecnécio", "Rutênio", "Ródio", "Paládio", "Prata", "Cádmio", "Índio",
    "Estanho", "Antimônio", "Telúrio", "Iodo", "Xenônio", "Césio", "Bário", "Lantânio", "Cério",
    "Praseodímio", "Neodímio", "Promécio", "Samário", "Európio", "Gadolínio", "Térbio", "Disprósio",
    "Hólmio", "Érbio", "Túlio", "Itérbio", "Lutécio", "Háfnio", "Tântalo", "Tungstênio",
    "Rênio", "Ósmio", "Irídio", "Platina", "Ouro", "Mercúrio", "Tálio", "Chumbo", "Bismuto",
    "Polônio", "Ástato", "Radônio", "Frâncio", "Rádio", "Actínio", "Tório", "Protactínio",
    "Urânio", "Neptúnio", "Plutônio", "Amerício", "Cúrio", "Berquélio", "Califórnio",
    "Einstênio", "Férmio", "Mendelévio", "Nobélio", "Laurêncio", "Rutherfórdio", "Dúbnio",
    "Seabórgio", "Bóhrio", "Hássio", "Meitnério", "Darmstádio", "Roentgênio", "Copernício",
    "Nihônio", "Flérovio", "Moscóvio", "Livermório", "Tenessino", "Oganessônio"
];

const symbols = [
    "H", "He", "Li", "Be", "B", "C", "N", "O",
    "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S",
    "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr",
    "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As",
    "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb",
    "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In",
    "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La",
    "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb",
    "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta",
    "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl",
    "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac",
    "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk",
    "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db",
    "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh",
    "Fl", "Mc", "Lv", "Ts", "Og"
];


let index = 0;
let easy_mode = false;
let random_mode = false;

async function update()
{
    let expected_answer = answers[index];
    expected_answer = expected_answer.toLowerCase();
    expected_answer = expected_answer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let current_answer = document.getElementById("current_answer").value;
    current_answer = current_answer.toLowerCase();
    current_answer = current_answer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if(current_answer === expected_answer)
    {
        do
        {
            index = Math.floor(Math.random() * 118); // generates random number for next element

        } while(easy_mode === true && !(index+1 < 56 || index+1 > 71 && index+1 < 87)) // re-shuffles to get easier

        document.cookie = "" + index;


        if(index === 118)
        {
            document.getElementById("game").style.display = "none";
            document.getElementById("won").style.display = "block";
            index = 0;
        }

        let next_symbol = symbols[index];
        document.getElementById("current_answer").value = "";
        document.getElementById("element_box").style["background-color"] = colors[index];

        setTimeout(function() {
            document.getElementById("current_element").innerHTML = next_symbol;
            document.getElementById("element_number").innerHTML = index+1;
        }
        , 100);
        
        
        document.getElementById("correct").style.display = "block";
        await new Promise(r => setTimeout(r, 2000));
        document.getElementById("correct").style.display = "none";
    
    }

    else
    {
        document.getElementById("incorrect").style.display = "block";
        await new Promise(r => setTimeout(r, 2000));
        document.getElementById("incorrect").style.display = "none";
    }
}

function start()
{
    console.log(document.cookie);
    index = Number(document.cookie);
    if(index === "")
    {
        index = 0;
    }

    let next_symbol = symbols[index];
    document.getElementById("current_element").innerHTML = next_symbol;
    document.getElementById("element_number").innerHTML = index+1;
    document.getElementById("element_box").style["background-color"] = colors[index];

}

function reset()
{
    index = 0;
    document.cookie = "" + index;
    let next_symbol = symbols[index];
    document.getElementById("current_element").innerHTML = next_symbol;
    document.getElementById("element_number").innerHTML = 1;
    document.getElementById("element_box").style["background-color"] = colors[index];
}

function get_value()
{
    easy_mode = document.getElementById("easy_mode").checked;
    random_mode = document.getElementById("random_mode").checked;
}