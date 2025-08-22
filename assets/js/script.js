const videoFrame = document.querySelector('.container__principal iframe');
const principal = document.querySelector('.main__container');
const sidebar = document.querySelector('.main__recomendation_tab');
const rootHtml = document.documentElement;
const toggleTheme = document.getElementById("toggleTheme");
let selecionado = 0;

let videos = [
  {
    videoId: "https://www.youtube.com/embed/uk3zexnbndE?si=jH8AiYgY1i7tqHr8",
    title: "Patolino: O Mago - CONTEMPLEM O MAGO",
    channelName: "Netflix Brasil",
    channelIcon: "../assets/imgs/logoId/0.jpg",
    thumb: "https://img.youtube.com/vi/uk3zexnbndE/maxresdefault.jpg",
    views: "559.479 visualizações  25 de nov. de 2023",
    subs: "14,1 mi de inscritos",
    likes: "28 mil",
    desc: `LETRA COMPLETA <br>
                    Contemplem o mago<br>
                    Com seus poderes<br>
                    Incríveis poderes<br>
                    Sob o olhar do necromante<br>
                    A escada prateada vai se erguer<br>
                    As pessoas maravilhadas<br>
                    Com seus olhos cheios de poder<br>
                    Comida fria vai esquentar ao enfeitiçar<br>
                    Balançando as suas mãos<br>
                    O cachorro-quente explodirá<br>
                    Na presença do grande mago<br>
                    O trânsito para de repente<br>
                    Pode atravessar a rua<br>
                    Com os carros parados na sua frente<br>
                    Na tv mudam-se os canais<br>
                    Sem que saia do sofá<br>
                    Sua varinha pega então<br>
                    Pra reclinar-se no ar<br>
                    Pela luz fraca do sol negro do reino dos sonhos.<br>
                    O mago sobe as cataratas congeladas de Voldrini<br>
                    Em busca de Celestia, a guardiã do poder infinito<br>
                    Quando de repente um terrível Garlon aparece<br>
                    E ataca com gelo, mas o mago é implacável<br>
                    O Garlon ruge e libera um vento muito sinistro,<br>
                    Mas o mago é implacável.<br>
                    O Garlon invoca as pedras de Prophynia,<br>
                    Mas o mago é implacável.<br>
                    Invocando os poderes dos ancestrais,<br>
                    O mago conjura o fogo sagrado<br>
                    E lança seu feitiço na larva derretida de um Gort insaciável.<br>
                    (Obrigado, Gort!)<br>
                    Ahh, Celestia. Acho que você vai adorar isso<br>
                    O mago fica diante do precipício do poder definitivo,<br>
                    Os portões se abrem para revelar...<br>
                    Hum... Quanto tempo eu fiquei dormindo?<br>
                    Faminto por causa da última missão<br>
                    O mago quer lanchar<br>
                    Traça o rumo do prazer<br>
                    Pro habitual lugar<br>
                    Ele é o mago<br>
                    O místico mago
                    <br><br>
                    Inscreva-se: https://bit.ly/31ynwtw
                    <br><br>
                    Sobre a Netflix:
                    A Netflix é um dos principais serviços de entretenimento do mundo. São mais de 247 milhões de assinaturas pagas em mais de 190 países com acesso a séries, filmes e jogos de diversos gêneros e idiomas. Assinantes podem assistir, pausar e voltar a assistir a um título quantas vezes quiserem em qualquer lugar e alterar o plano a qualquer momento.
                    <br><br>
                    Patolino: O Mago - CONTEMPLEM O MAGO | O Show dos Looney Tunes | Netflix Brasil
    `,
  }, 
  {
    videoId: "https://www.youtube.com/embed/lTYwBW1uAQ8",
    title: "Alex na Selva! 🦁🌳",
    channelName: "DreamWorks",
    thumb: "https://img.youtube.com/vi/lTYwBW1uAQ8/maxresdefault.jpg",
    channelIcon: "https://img.youtube.com/vi/lTYwBW1uAQ8/maxresdefault.jpg",
    views: "6,9 mil visualizações há 3 dias",
    subs: "841 mil inscritos",
    likes: "84",
    desc:
    `
        Alex está trocando o palco pela vida ao ar livre na selva! Quando o rei do zoológico pisa na natureza pela primeira vez, é um passeio selvagem com muitas surpresas. Junte-se ao Alex enquanto ele aprende que a vida selvagem na natureza é muito mais do que somente rugir!

        🦁 Se inscreva no canal:    / @dreamworksmadagascaremportugue  

        🐵 Todos os vídeos:    • Madagascar em Português 🦁 Todos os vídeos  
        🦁Madagascar:    • DreamWorks Madagascar em Português | Anive...  
        🐯Madagascar 2 - A Grande Escapada:    • Madagascar 2 🐡A Grande Escapada  
        🐙Madagascar 3 - Os Procurados:    • Madagascar 3 🐙Os Procurados  
        🐠Conheça a Equipe:    • Madagascar em Português 🐯Conheça a Equipe  
        🐧Os Pinguins de Madagascar:    • Madagascar em Português 🐧Os Pinguins de Ma...  

        O leão Alex é a grande atração do zoológico do Central Park, em Nova York. Ele e seus melhores amigos, a zebra Marty, a girafa Melman e a hipopótamo Glória, sempre passaram a vida em cativeiro e desconhecem o que é morar na selva. Curioso em saber o que há por trás dos muros do zoológico, Marty decide fugir para explorar o mundo.

    `
  },
  {
    "videoId": "https://www.youtube.com/embed/JUE6UQ7IZMw",
    "title": "Looney Tunes em Português",
    "channelName": "WB Kids Brasil",
    "thumb": "https://img.youtube.com/vi/JUE6UQ7IZMw/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/2.jpg",
    "views": "3 mi de visualizações há 2 anos",
    "subs": "4,99 mi de inscritos",
    "likes": "25 mil",
    "desc": `
        Será que o Patolino poderia ser substituído para sempre, sendo ele o melhor amigo de Pernalonga? Achamos que não.  Patolino tem que ser um melhor amigo perfeito! Não é? 🐰🦆

        Por hoje não é só, pessoal! Acompanhe os seus personagens favoritos - Pernalonga e Patolino, Piu-Piu e Frajola, e Coiote e Papa-Léguas enquanto pregam peças, participam de perseguições em alta velocidade, e enganam os seus inimigos.

        WB Kids é o lar de todos os seus vídeos favoritos com personagens dos Looney Tunes, Scooby-Doo, Tom e Jerry e mais! 

        #WBKidsPortuguês #DesenhosClássicos #LooneyTunes

        Disponível Digitalmente!

        MAIS VÍDEOS AQUI
        ►   / @wbkidsbrasil  
        MAIS JOGOS E ATIVIDADES AQUI
        ►https://www.wbkidsgo.com/pt-br/

        All Warner Bros. related characters and elements © & ™ Warner Bros. Entertainment Inc. (s23)`
  },
  {
    "videoId": "../assets/mov/frieren.mp4",
    "title": "The Height of Magic",
    "channelName": "Crunchyroll",
    "thumb": "https://img.youtube.com/vi/_kUFws-dHEI/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/1.jpg",
    "views": "1,9 mi de visualizações há 1 ano",
    "subs": "7,67 mi de inscritos",
    "likes": "27 mil",
    "desc": `
        Episode 26: Frieren and Fern take on Frieren! Watch Frieren: Beyond Journey's End on Crunchyroll! https://got.cr/cc-fbje

        The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…

        Crunchyroll brings you the latest clips, openings, full episodes, and more from your favorite anime!

        FREE 14-DAY CRUNCHYROLL TRIAL 🌟 https://got.cr/cc-14days

        #Frieren #Anime #Crunchyroll`
  },
  {
    "videoId": "https://www.youtube.com/embed/5ZVND5zGZCU",
    "title": "Frieren's Aura",
    "channelName": "Crunchyroll",
    "thumb": "https://img.youtube.com/vi/5ZVND5zGZCU/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/1.jpg",
    "views": "1,8 mi de visualizações há 1 ano",
    "subs": "7,67 mi de inscritos",
    "likes": "29 mil",
    "desc": 
    `
        Episode 26: Frieren's aura is deadly! Watch Frieren: Beyond Journey's End on Crunchyroll! https://got.cr/cc-fbje

        The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…

        Crunchyroll brings you the latest clips, openings, full episodes, and more from your favorite anime!

        FREE 14-DAY CRUNCHYROLL TRIAL 🌟 https://got.cr/cc-14days

        #Frieren #Anime #Crunchyroll
    `
  },
  {
    "videoId": "../assets/mov/frieren.mp4",
    "title": "How Many Triangles are in This Picture?",
    "channelName": "Crunchyroll",
    "thumb": "https://img.youtube.com/vi/zlmsqVWPf98/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/1.jpg",
    "views": "2,1 mi de visualizações há 1 ano",
    "subs": "7,67 mi de inscritos",
    "likes": "31 mil",
    "desc": 
    `
        Episode 21: Frieren destroys Serie's barrier! Watch Frieren: Beyond Journey's End on Crunchyroll! https://got.cr/cc-fbje

        The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…

        Crunchyroll brings you the latest clips, openings, full episodes, and more from your favorite anime!

        FREE 14-DAY CRUNCHYROLL TRIAL 🌟 https://got.cr/cc-14days

        #Frieren #Anime #Crunchyroll
    
    `
  },
  {
    "videoId": "https://www.youtube.com/embed/eXjbk-4ljgc",
    "title": "Frieren e a Jornada para o Além",
    "channelName": "Crunchyroll Brasil",
    "thumb": "https://img.youtube.com/vi/eXjbk-4ljgc/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/3.jpg",
    "views": "132 mil visualizações há 2 anos",
    "subs": "1,99 mi de inscritos",
    "likes": "3,8 mil",
    "desc": 
    `
        Frieren e a Jornada para o Além chega à Crunchyroll em setembro!

        Sinopse oficial: "Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária. 50 anos se passam quando Frieren finalmente volta para visitar Himmel e os outros. Embora ela não tenha envelhecido nada, seus amigos têm pouco tempo de vida restante. É então que Frieren testemunha a morte de Himmel, o que a leva a lamentar não ter passado mais tempo junto dele. Com esse arrependimento em seu coração, ela embarca em uma nova jornada com o objetivo de se conectar e conhecer melhor as pessoas. Ao longo dessa viagem, a elfa Frieren encontrará diversas pessoas e viverá incontáveis aventuras emocionantes!"

        ✨ TESTE CRUNCHYROLL DE GRAÇA POR 14 DIAS: https://got.cr/14DayFreeTrialPT ✨

        #anime #crunchyroll #frieren
    `
  },
  {
    "videoId": "https://www.youtube.com/embed/dTcwA58fQuU",
    "title": "Como viver sem nunca mais fazer carinho em um gato? 😿",
    "channelName": "Crunchyroll Brasil",
    "thumb": "https://img.youtube.com/vi/dTcwA58fQuU/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/3.jpg",
    "views": "3,5 mil visualizações há 7 dias",
    "subs": "1,99 mi de inscritos",
    "likes": "272",
    "desc": 
    `
        No primeiro episódio o mundo está mergulhado no caos, tudo por causa de um vírus que transforma pessoas em gatos através do contato com gatos infectados. Kunagi e Kaoru estão fugindo desse caos mas, ao mesmo tempo, só querem fazer carinho nos gatinhos…

        Disponível original e dublado! Assista ao episódio completo aqui: https://got.cr/NyaightLivingCatYTBR

        #Anime #Crunchyroll #NyaightoftheLivingCat

        TESTE CRUNCHYROLL DE GRAÇA POR 7 DIAS: https://got.cr/7DayFreeTrialPT

        🔸FACEBOOK:   / crunchyroll.pt  
        🔸TWITTER:   / crunchyroll_pt  
        🔸INSTAGRAM:   / crunchyroll_pt  
    `
  },
  {
    "videoId": "../assets/mov/utm.mp4",
    "title": "Ultimate Fighting Goes to the Next Level - Key & Peele",
    "channelName": "Key & Peele",
    "thumb": "https://img.youtube.com/vi/0z-oJTZ1b5Q/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/4.jpg",
    "views": "19 mi de visualizações há 6 anos",
    "subs": "6,44 mi de inscritos",
    "likes": "376 mil",
    "desc": "Two ultimate fighters make their case for why they’re going to win the big match, but one of them clearly takes it more seriously than the other."
  },
  {
    "videoId": "https://www.youtube.com/embed/PkZNo7MFNFg",
    "title": "Learn JavaScript - Full Course for Beginners",
    "channelName": "freeCodeCamp.org",
    "thumb": "https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/5.jpg",
    "views": "20 mi visualizações há 6 anos",
    "subs": "11 mi de inscritos",
    "likes": "281 mil",
    "desc": "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language."
  },
  {
    "videoId": "https://www.youtube.com/embed/QgPatjZ4zGs",
    "title": "ChatGPT 5 – Tudo o que você precisa saber em 5 minutos!",
    "channelName": "DIO",
    "thumb": "https://img.youtube.com/vi/QgPatjZ4zGs/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/6.jpg",
    "views": "520 visualizações há 7 dias",
    "subs": "124 mil inscritos",
    "likes": "75",
    "desc": "Aproveite e assine o DIO PRO Vitalício para desbloquear acesso para sempre a + 1750 bootcamps, cursos, projetos e formações 👉 https://c.dio.me/0Sp7Ix"
  },
  {
    "videoId": "../assets/mov/kungfu.mp4",
    "title": "Kung Fu Panda 2 - Po Finds Inner Peace | Final Fight - 4K",
    "channelName": "TheUnusualShenFan",
    "thumb": "https://img.youtube.com/vi/BlgzD5bnUK8/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/7.jpg",
    "views": "231 mil visualizações há 1 ano",
    "subs": "7,42 mil inscritos",
    "likes": "2,6 mil",
    "desc": "I do not own any of this. Property of Dreamworks Animation."
  },
  {
    "videoId": "https://www.youtube.com/embed/tgbNymZ7vqY",
    "title": "Bohemian Rhapsody | Muppet Music Video",
    "channelName": "The Muppets",
    "thumb": "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/8.jpg",
    "views": "191 mi de visualizações há 15 anos",
    "subs": "1,27 mi de inscritos",
    "likes": "1 mi",
    "desc": "The Muppets' Musical Gang is back at it with their rendition of Queen’s Bohemian Rhapsody!"
  },
  {
    "videoId": "https://www.youtube.com/embed/sBws8MSXN7A",
    "title": "React JS Crash Course",
    "channelName": "Traversy Media",
    "thumb": "https://img.youtube.com/vi/sBws8MSXN7A/maxresdefault.jpg",
    "channelIcon": "../assets/imgs/logoId/9.jpg",
    "views": "1,6 mi de visualizações há 6 anos",
    "subs": "2,37 mi de inscritos",
    "likes": "30 mil",
    "desc": "In this crash course you will learn what React JS is and the fundamentals such as components, state, props, JSX, events, etc."
  }
];


function verificarLikeDeslike(){
    const likeBtn = document.querySelector('.bi-hand-thumbs-up');
    const deslikeBtn = document.querySelector('.bi-hand-thumbs-down');
    likeBtn.addEventListener("click", (e)=>{
        if(e.target.classList.contains('bi-hand-thumbs-up')){
            e.target.classList.add('bi-hand-thumbs-up-fill');
            e.target.classList.remove('bi-hand-thumbs-up');
            if(deslikeBtn.classList.contains('bi-hand-thumbs-down-fill')){
                deslikeBtn.classList.remove('bi-hand-thumbs-down-fill');
                deslikeBtn.classList.add('bi-hand-thumbs-down');
            }
            
        }else{
            e.target.classList.add('bi-hand-thumbs-up');
            e.target.classList.remove('bi-hand-thumbs-up-fill');  
        }
    })

    deslikeBtn.addEventListener("click", (e)=>{
        if(e.target.classList.contains('bi-hand-thumbs-down')){
            e.target.classList.add('bi-hand-thumbs-down-fill');
            e.target.classList.remove('bi-hand-thumbs-down');
            if(likeBtn.classList.contains('bi-hand-thumbs-up-fill')){
                likeBtn.classList.remove('bi-hand-thumbs-up-fill');
                likeBtn.classList.add('bi-hand-thumbs-up');
            }
        }else{
            e.target.classList.add('bi-hand-thumbs-down');
            e.target.classList.remove('bi-hand-thumbs-down-fill');  
        }
    })
}

function subToMe() {
    window.open('https://github.com/Ryotruuser', '_blank');
}

function moveItem(array, fromIndex, toIndex) {
  const item = array.splice(fromIndex, 1)[0]; // remove o item
  array.splice(toIndex, 0, item); // insere no novo índic
  return array;
}

function renderMainVideo(video) {
  principal.innerHTML = `
    <iframe 
        src=${video.videoId} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
    <h1 class="video__title">${video.title}</h1>

    <div class="channel__details">
        <div class="details__col1">
            <img class="channel__img" src="${video.channelIcon}" alt="">
            <div class="channel__detalils_text">
                <h4 class="channel__name">${video.channelName}</h4>
                <h4 class="channel__cont">${video.subs}</h4>
            </div>
            <button onclick="subToMe()" class="channel__sub">Inscreva-se</button>
        </div>

        <div class="details__col2">
            <div class="video__like">
                <i class="bi bi-hand-thumbs-up"></i>
                <span>${video.likes}</span>
            </div>
            <div class="video__deslike">
                <i class="bi bi-hand-thumbs-down"></i>
                <span>Não gostei</span>
            </div>
            <div class="video__share">
                <i class="bi bi-share-fill"></i>
                <span>Compartilhar</span>
            </div>
            <div class="video__download" >
                <i class="bi bi-download"></i>
                <span>Download</span>
            </div>
        </div>
    </div>

    <div class="video__details">
        <h4 class="video__details_views">${video.views}</h4>
        <p class="video__details_desc">${video.desc}</p>
    </div>
  `;

  verificarLikeDeslike(); // sempre reanexa os listeners
}

toggleTheme.addEventListener("click", changeTheme);

sidebar.addEventListener("click", (e)=>{
    console.log(e)
})

function renderSidebar() {
  sidebar.innerHTML = "";

  videos.slice(1).forEach((video, index) => {
    const card = document.createElement("div");
    card.classList.add("recomendation__video");
    card.innerHTML = `
      <img src=${video.thumb} alt="" class="card__img">
      <div class="card__texts">
          <h4 class="card__title">${video.title}</h4>
          <p class="card__channel">${video.channelName}</p>
          <p class="card__views">${video.views}</p>
      </div>
    `;
    sidebar.appendChild(card);

    card.addEventListener("click", () => {
      moveItem(videos, index + 1, 0);
      renderMainVideo(videos[0]);
      renderSidebar();
    });
  });
}

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark"){
        rootHtml.setAttribute("data-theme", "light");
    }else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    toggleTheme.classList.toggle("bi-brightness-high");
    toggleTheme.classList.toggle("bi-moon-stars");
}

function init(){

    renderMainVideo(videos[0]);
    renderSidebar();
}

init();