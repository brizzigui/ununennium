const hydrogen = "rgb(135, 206, 250)";
const metal = "rgb(171, 86, 245)";
const alkali = "rgb(255, 99, 99)";
const terrous_alkali = "rgb(40, 224, 154)";
const ametal = "rgb(245, 51, 186)"
const noble_gases = "rgb(237, 199, 43)"

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
    "Manganês", "Ferro", "Cobalto", "Níquel", "Cobre", "Zinco", "Gálio", "Germânio", "Arsênio",
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
    "Nihônio", "Flérovio", "Moscóvio", "Livermório", "Tenesso", "Oganessônio"
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

const tips = [
    "O elemento mais leve e abundante no universo. Sua presença está associada à inflamabilidade.", "Este gás nobre menos denso que o ar é conhecido por sua utilização em balões. Também é usado para afinar a voz.", "Um metal alcalino usado em baterias recarregáveis, presente em dispositivos eletrônicos comuns. Ademais, é usado para tratar a bipolaridade.", "Este metal é conhecido por sua rigidez e leveza, sendo usado em ligas para aplicações aeroespaciais.", "Elemento essencial para o crescimento das plantas e encontrado em muitos compostos usados em química orgânica.", "A base da vida, este elemento é integrante essencial nas moléculas orgânicas. Também faz parte de um óxido que contribui para o efeito estufa.", "Constituinte principal do ar atmosférico, é vital para a síntese de compostos biológicos como proteínas e ácidos nucleicos.", "Essencial para a respiração, este elemento é encontrado em grande quantidade na Terra e é um componente crucial da água.", "Conhecido por sua presença em pastas de dentes, este halogênio é usado para prevenir a formação de cáries.", "Um gás nobre frequentemente utilizado em sinais luminosos devido à sua capacidade de emitir luz colorida quando excitado.", "Um metal alcalino altamente reativo, é utilizado em diversos contextos, incluindo na composição do sal de cozinha.", "Este metal alcalino-terroso é essencial para a saúde humana, desempenhando papéis importantes em processos biológicos.", "Um metal leve e resistente, é amplamente utilizado na fabricação de embalagens e estruturas.", "Elemento crucial na indústria de semicondutores, é utilizado na produção de chips e dispositivos eletrônicos.", "Importante para a vida, é um componente fundamental dos ácidos nucleicos e dos fosfolipídios nas membranas celulares.", "Este não-metal é encontrado em aminoácidos e vitaminas, desempenhando um papel vital na biologia.", "Um halogênio altamente reativo, é utilizado como desinfetante e na purificação de água.", "Um gás nobre inerte, é comumente usado em lâmpadas incandescentes e na indústria de soldagem.", "Metal alcalino essencial para a saúde humana, desempenhando um papel crucial na regulação do equilíbrio hídrico.", "Metal alcalino-terroso presente em ossos e dentes, é vital para a coagulação sanguínea e a contração muscular.", "Este metal de transição é conhecido por sua resistência à corrosão e é utilizado em ligas de alumínio para melhorar suas propriedades.", "Metal resistente, leve e anticorrosivo, é frequentemente utilizado em aplicações aeroespaciais e médicas.", "Metal de transição utilizado principalmente na produção de ligas de aço, conferindo-lhes maior resistência e durabilidade.", "Conhecido por sua resistência à corrosão, é utilizado em revestimentos metálicos, cromagem e em ligas de aço inoxidável.", "Elemento essencial para o metabolismo humano, também é utilizado na produção de aço e ferroligas.", "Metal amplamente utilizado em construções e na fabricação de ligas, sendo crucial para a indústria siderúrgica.", "Metal de transição usado em ligas magnéticas, baterias recarregáveis e próteses médicas.", "Metal utilizado em ligas resistentes à corrosão, como o aço inoxidável, e em moedas de níquel.", "Metal conhecido por sua boa condutividade elétrica, sendo amplamente utilizado em fios elétricos e componentes eletrônicos.", "Metal usado principalmente para revestimento de aço (galvanização) e na produção de ligas.", "Este metal de transição possui um ponto de fusão baixo e é usado em dispositivos semicondutores, como LEDs.", "Semicondutor utilizado em eletrônica, desempenha um papel importante em dispositivos semicondutores.", "Elemento encontrado em alguns minerais, é utilizado em semicondutores e inseticidas.", "Elemento essencial para organismos vivos em pequenas quantidades, é usado em células fotovoltaicas e em fotocopiadoras.", "Halogênio líquido à temperatura ambiente, é usado em compostos farmacêuticos e como desinfetante.", "Gás nobre utilizado em lâmpadas fluorescentes e de raios-X devido à sua capacidade de emitir luz quando excitado.", "Metal alcalino altamente reativo, é utilizado em células fotoelétricas e na pesquisa em física atômica.", "Metal alcalino-terroso, é usado em pirotecnia para produzir a cor vermelha nas chamas.", "Metal de transição utilizado em TVs de plasma e em lasers de estado sólido.", "Metal resistente à corrosão, é usado em reatores nucleares, aeronaves e lentes de câmeras.", "Metal de transição usado em superligas devido à sua resistência à corrosão e alta temperatura.", "Metal de transição com alto ponto de fusão, é utilizado em ligas de aço e em eletrônicos.", "Elemento sintético usado em medicina nuclear para imagem por cintilografia.", "Metal de transição utilizado em ligas metálicas e em alguns catalisadores.", "Metal de transição resistente à corrosão, é usado em joias, eletrodos e catalisadores.", "Metal de transição usado em joias, catalisadores e na indústria eletrônica.", "Metal conhecido por sua condutividade elétrica e uso em joias, moedas e condutores elétricos.", "Metal usado em baterias recarregáveis, pigmentos e revestimentos anticorrosivos.", "Semicondutor usado em telas de LCD, painéis solares e em ligas metálicas.", "Metal utilizado em latas de alimentos, soldas e ligas metálicas.", "Semimetal utilizado em ligas metálicas, pigmentos e em alguns medicamentos.", "Semimetal utilizado em semicondutores e células fotovoltaicas.", "Halogênio importante para a saúde humana. Adicionado artificialmente no sal de cozinha.", "Gás nobre utilizado em lâmpadas para flashes de câmeras e em lasers.", "Metal alcalino altamente reativo, utilizado em relógios atômicos e na pesquisa em física atômica.", "Metal alcalino-terroso utilizado em meios de contraste para exames radiológicos e em ímãs supercondutores.", "Elemento do grupo dos lantanídeos utilizado em lâmpadas de arco, baterias de íon-lítio e catalisadores.", "Lantanídeo utilizado em catalisadores, polimento de vidros e em ligas metálicas.", "Lantanídeo usado em ligas metálicas, cerâmicas e em ímãs de alta potência.", "Lantanídeo utilizado em ímãs de neodímio-ferro-boro, os ímãs mais fortes conhecidos.", "Elemento radioativo e sintético, é utilizado em fontes de energia nuclear compactas.", "Lantanídeo usado em ímãs permanentes, catalisadores e em dispositivos médicos.", "Lantanídeo usado em materiais fosforescentes, como em telas de TV e lâmpadas fluorescentes.", "Lantanídeo utilizado em reatores nucleares, agentes de contraste em ressonância magnética e em lâmpadas.", "Lantanídeo utilizado em ímãs de neodímio-ferro-boro e em dispositivos de armazenamento magnético.", "Lantanídeo utilizado em ímãs de alta temperatura, lasers e em reatores nucleares.", "Lantanídeo usado em ímãs de alta potência, reatores nucleares e lasers médicos.", "Lantanídeo utilizado em fibras ópticas, lasers médicos e como absorvedor de nêutrons em reatores nucleares.", "Lantanídeo usado em dispositivos médicos, lasers e em ímãs de neodímio-ferro-boro.", "Lantanídeo utilizado em lasers, dispositivos médicos e em relógios atômicos.", "Lantanídeo usado em pesquisa científica, em detectores de radiação e em dispositivos médicos.", "Metal de transição utilizado em ligas resistentes à corrosão, em reatores nucleares e em processos de produção de semicondutores.", "Metal refratário utilizado em equipamentos eletrônicos, na produção de superligas e em capacitores.", "Metal de transição conhecido por sua alta resistência e usado em filamentos de lâmpadas, em brocas e em ligas de aço.", "Metal de transição utilizado em catalisadores, em ligas resistentes à corrosão e em detectores de radiografia.", "Metal de transição extremamente denso e resistente à corrosão, é utilizado em instrumentos de medição de pressão e em joias.", "Metal de transição extremamente denso e resistente à corrosão, é usado em eletrônicos, em joias e em contatos elétricos.", "Metal precioso utilizado em joias, em catalisadores automotivos e em dispositivos médicos.", "Metal nobre apreciado por sua beleza e elegância, é usado em joias, moedas e em eletrônicos.", "Metal líquido à temperatura ambiente, é utilizado em termômetros, barômetros e em alguns processos industriais - além de ser tóxico à saúde humana e animal.", "Metal altamente tóxico, é utilizado em alguns dispositivos eletrônicos e em medicina nuclear.", "Metal pesado utilizado em baterias, em construções, em pigmentos e historicamente em canos de água - sendo evitado, hoje, por sua toxicidade.", "Elemento usado em ligas de baixo ponto de fusão, em medicamentos e em maquiagens.", "Elemento radioativo e altamente tóxico, é utilizado em dispositivos antiestáticos e em pesquisas científicas. Seu nome é em homenagem a um país do Leste Europeu.", "Halogênio radioativo raro, é produzido em laboratórios e tem aplicações limitadas devido à sua instabilidade.", "Gás nobre radioativo, é utilizado em terapias contra o câncer e em algumas medições de radioatividade.", "Metal altamente radioativo e instável, tem aplicações limitadas devido à sua escassez e curta vida útil.", "Elemento radioativo utilizado historicamente em terapias médicas, embora hoje em dia seu uso seja limitado.", "Elemento radioativo utilizado em algumas aplicações científicas e médicas, devido à sua radioatividade.", "Elemento radioativo usado em reatores nucleares, em lentes de câmeras e historicamente em lanternas de gás.", "Elemento radioativo usado em pesquisas científicas, especialmente em estudos nucleares.", "Elemento radioativo crucial na produção de energia nuclear e antigamente usado em alguns tipos de vidro e pigmentos.", "Elemento transurânico radioativo, é produzido artificialmente em reatores nucleares.", "Elemento transurânico usado em armas nucleares, em reatores nucleares e em fontes de energia espacial.", "Elemento transurânico radioativo, é usado em detectores de fumaça e em fontes de nêutrons.", "Elemento transurânico radioativo, é utilizado em dispositivos médicos e em pesquisas científicas. Seu nome é em homenagem a uma pioneira cientista, ganhadora de dois prêmios Nobel.", "Elemento transurânico radioativo, é produzido artificialmente em reatores nucleares.", "Elemento transurânico radioativo, é utilizado em pesquisas nucleares e em detecção de metal. Seu nome é em homenagem ao estado norte-americano mais populoso.", "Elemento transurânico radioativo, é produzido artificialmente em reatores nucleares. Seu nome é em homenagem a, possivelmente, o mais famoso físico da história.", "Elemento transurânico sintético, tem aplicações limitadas devido à sua produção difícil e vida útil curta.", "Elemento transurânico sintético, é produzido em laboratórios e tem aplicações limitadas.", "Elemento transurânico sintético, é produzido em reatores nucleares e tem poucas aplicações práticas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem pouco uso fora da pesquisa.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações limitadas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas. Nome em homenagem a um importante astrônomo.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas. Nome em homenagem a uma importante capital do Leste Europeu.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas. Seu nome é em homenagem a um estado do Sul dos Estados Unidos.", "Elemento transurânico sintético, é produzido em aceleradores de partículas e tem aplicações apenas em pesquisas científicas."
] 
    // very long line, check tips.txt for easier changes.
    

let explored = [];
let n_tries = 0;
let accepted = 0;

let index = 0;
let easy_mode = false;
let random_mode = true;
let revealed = false;
let has_won = false;

async function update()
{
    n_tries++;

    let expected_answer = answers[index];
    expected_answer = expected_answer.toLowerCase();
    expected_answer = expected_answer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let current_answer = document.getElementById("current_answer").value;
    current_answer = current_answer.toLowerCase().replace(/[" "]/g, "");
    current_answer = current_answer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if(current_answer === expected_answer)
    {
        if (!revealed) 
        {
            accepted++;

            let current_symbol = symbols[index];
            if(explored.includes(current_symbol) === false)
            {
                explored.push(current_symbol);
            }
        }

        update_stats_cookie();
        update_stats_display();

        if(random_mode === true)
        {
            do
            {
                index = Math.floor(Math.random() * 118); // generates random number for next element
    
            } while(easy_mode === true && !(index+1 < 56 || index+1 > 71 && index+1 < 87)) // re-shuffles to get easier
        }

        else
        {
            do
            {
                index = (index + 1)%119
            } while(easy_mode === true && !(index+1 < 56 || index+1 > 71 && index+1 < 87))
        }
        

        set_cookie("index", index);
        let next_symbol = "";

        if(explored.length === 118 && !has_won)    // if all were explored for the first time
        {
            open_win_menu();
            next_symbol = "Uue";
            index = 118; // after, index+1 is read, so we'll get 119
        }

        else
        {
            next_symbol = symbols[index];
            document.getElementById("element_box").style["background-color"] = colors[index];
        }

        document.getElementById("current_answer").value = "";


        setTimeout(function() {
            document.getElementById("current_element").innerHTML = next_symbol;
            document.getElementById("element_number").innerHTML = index+1;
        }
        , 100);

        if(revealed) // if user revealed the answer
        {
            revealed = false;
            handle_feedback_animation("revealed");
        }
        
        else // if user got it right fair and square
        {
            handle_feedback_animation("correct");
        }
    }

    else
    {
        update_stats_cookie();
        update_stats_display();

        handle_feedback_animation("incorrect");
    }

    write_tip();

}

function start()
{
    // restaura elemento
    let starting_cookie = retrive_cookie_by_name("index");

    if(starting_cookie === "")
    {
        index = 0;
    }

    else
    {
        index = parseInt(starting_cookie);
    }


    let next_symbol = symbols[index];
    document.getElementById("current_element").innerHTML = next_symbol;
    document.getElementById("element_number").innerHTML = index+1;
    document.getElementById("element_box").style["background-color"] = colors[index];

    // restaura configurações
    easy_mode = retrive_cookie_by_name("easy_mode") === "true" ? true : false;
    random_mode = retrive_cookie_by_name("random_mode") === "true" ? true : false;
    has_won = retrive_cookie_by_name("won") === "true" ? true : false;


    document.getElementById("easy_mode").checked = easy_mode;
    document.getElementById("random_mode").checked = random_mode;

    // cria estatísticas
    create_stats();
    update_stats_display();

    // arruma dica
    document.getElementById("tip_text").innerHTML = tips[index];

}

function reset()
{
    index = 0;
    revealed = false;
    set_cookie("index", index);
    let next_symbol = symbols[index];
    document.getElementById("current_element").innerHTML = next_symbol;
    document.getElementById("element_number").innerHTML = 1;
    document.getElementById("element_box").style["background-color"] = colors[index];

    document.getElementById("tip_text").innerHTML = tips[index];
}

function get_value()
{
    easy_mode = document.getElementById("easy_mode").checked;
    random_mode = document.getElementById("random_mode").checked;

    set_cookie("easy_mode", easy_mode);
    set_cookie("random_mode", random_mode);
}

function reveal()
{
    document.getElementById("current_answer").value = answers[index];
    revealed = true;
}

function set_cookie(name, value) {
    const date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000)); //expires in a year
    let expires = "expires="+ date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function retrive_cookie_by_name(requested_name)
{
    let string = document.cookie;
    all_cookies = string.replace(/[" "]/g, "").split(";");

    for(let i = 0; i < all_cookies.length; i++)
    {
        let name_value_pair = (all_cookies[i].split("="));
        if(name_value_pair[0] === requested_name)
        {
            return name_value_pair[1];
        }
    }

    return "";
}

function check_if_stats_exist()
{
    if (retrive_cookie_by_name("stats") === "")
    {
        return false;
    }

    return true;
}

function create_stats()
{
    if(check_if_stats_exist())
    {
        let cookie = retrive_cookie_by_name("stats");
        cookie = cookie.split("/");

        n_tries = parseInt(cookie[0]);
        accepted = parseInt(cookie[1]);
        
        cookie[2] = cookie[2].split(",");

        for (let i = 0; i < cookie[2].length; i++) {
            let element = cookie[2][i];
            
            if (element != "")
            {
                explored.push(element);
            }
        }
    }

    else
    {
        update_stats_cookie();
    }
}

function update_stats_cookie()
{
    set_cookie("stats", "" + n_tries + "/" + accepted + "/" + explored)
}

function update_stats_display()
{
    document.getElementById("number_explored").innerHTML = explored.length;
    document.getElementById("number_attempts").innerHTML = n_tries;
    document.getElementById("correctly_answered").innerHTML = accepted;

}

function reset_stats()
{
    n_tries = 0;
    accepted = 0;
    explored = [];
    console.log(explored);

    update_stats_cookie();
    set_cookie("won", false);
    update_stats_display();
}


async function handle_feedback_animation(feedback_id)
{
    if (feedback_id != "revealed") 
    {   
        document.getElementById("revealed").style.opacity = "0";
        document.getElementById("revealed").style.animation = "none";
    }

    if (feedback_id != "correct") 
    {   
        document.getElementById("correct").style.opacity = "0";
        document.getElementById("correct").style.animation = "none";
    }

    if (feedback_id != "incorrect") 
    {   
        document.getElementById("incorrect").style.opacity = "0";
        document.getElementById("incorrect").style.animation = "none";
    }

    if (document.getElementById(feedback_id).style.animation == "2s ease 0s 1 normal none running feedback_animation_in") 
    {
        document.getElementById(feedback_id).style.opacity = 1;
        document.getElementById(feedback_id).style.animation = "none";
        await new Promise(r => setTimeout(r, 1));

        document.getElementById(feedback_id).style.animation = "feedback_animation_in 2s";
        document.getElementById(feedback_id).style.opacity = 0;
    }

    else
    {
        document.getElementById(feedback_id).style.animation = "feedback_animation_in 2s";

        let original_index = index;
        await new Promise(r => setTimeout(r, 2000));

        if(original_index === index && feedback_id != "incorrect")
        {
            document.getElementById(feedback_id).style.animation = "none";
        }
    }
}

function write_tip()
{
    document.getElementById("tip_text").innerHTML = tips[index];
}

function open_win_menu()
{
    document.getElementById("won").style.display = "block";
    document.getElementById("interaction").style.display = "none";
    document.getElementById("element_box").style["background-color"] = "palegreen";

    has_won = true;
    set_cookie("won", has_won);
}

function close_win_menu()
{
    document.getElementById("won").style.display = "none";
    document.getElementById("interaction").style.display = "block";
}