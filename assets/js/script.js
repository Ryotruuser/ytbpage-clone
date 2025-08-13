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

