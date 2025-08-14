const videoFrame = document.querySelector('.container__principal iframe');
const principal = document.querySelector('.container__principal');
const sidebar = document.querySelector('.card__recomendations');

let videos = [
  {
    videoId: "https://www.youtube.com/embed/uk3zexnbndE?si=jH8AiYgY1i7tqHr8",
    title: "Patolino: O Mago - CONTEMPLEM O MAGO | O Show dos Looney Tunes | Netflix Brasil",
    channelName: "Netflix Brasil",
    channelIcon: "../assets/imgs/logoId/0.jpg",
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
  }
];



function addVideoToPage(videos, page){
    page.innerHTML = `
        <iframe 
            width="952" 
            height="537" 
            src=${videos[0].videoId} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
        <h1 class="video__title">${videos[0].title}</h1>

        <div class="channel__details">

            <div class="details__col1">
                <img class="channel__img" src="${videos[0].channelIcon}" alt="">
                <div class="channel__detalils_text">
                    <h4 class="channel__name">${videos[0].channelName}</h4>
                    <h4 class="channel__cont">${videos[0].subs}</h4>
                </div>
                <button onclick="subToMe()" class="channel__sub">Inscreva-se</button>
            </div>

            <div class="details__col2">

                <div class="video__like">
                    <i class="bi bi-hand-thumbs-up"></i>
                    <span>${videos[0].likes}</span>
                </div>

                <div class="video__deslike">
                    <i class="bi bi-hand-thumbs-down"></i>
                    <span>Não gostei</span>
                </div>

                <div class="video__share">
                    <i class="bi bi-share-fill"></i>
                    <span>Compartilhar</span>
                </div>

                <div class="video__" >
                    <i class="bi bi-download"></i>
                    <span>Download</span>
                </div>

                </div>
            </div>

            <div class="video__details">
                <h4 class="video__details_views">${videos[0].views}</h4>
                <p class="video__details_desc">
                    ${videos[0].desc}
                </p>
            </div>
        </div>
    
    `;

}






addVideoToPage(videos, principal);
// btns de like e deslike e besteirinha de subto github
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

function subToMe() {
    window.open('https://github.com/Ryotruuser', '_blank');
}



