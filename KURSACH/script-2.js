let emo = document.querySelector('.emoji')
emo.addEventListener('dragstart', () =>{
    emo.src = "/KURSACH/imgs/emoji-2.gif"
})
emo.addEventListener('dragend', () =>{
    setTimeout(() => {
        emo.src = "/KURSACH/imgs/thinking-emoji.gif" 
    }, 2500);
})
