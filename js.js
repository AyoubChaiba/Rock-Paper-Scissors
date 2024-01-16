let selection = document.querySelectorAll(".select");
let finl = document.querySelector("[data-finl]")
let textYou = document.querySelector("[data-you] samp")
let textPC = document.querySelector("[data-pc] samp")

    let SELECTIONS = [
        {name: 'Rock' ,emoji: '✊' ,beats : 'Scissors'},
        {name: 'Paper' ,emoji: '✋' ,beats : 'Rock'},
        {name: 'Scissors' ,emoji: '✌' ,beats : 'Paper'},
    ]

    function on(name) {
        let select = SELECTIONS.find( e => e.name === name);
        let pcRandom = random();
        let youwin = iswin(select,pcRandom);
        let pcwin = iswin(pcRandom,select);
            divAdd(pcRandom,pcwin);
            divAdd(select,youwin);
        youwin && textScore(textYou)
        pcwin && textScore(textPC)
    }

    function iswin(select, select_x){
        return select.beats == select_x.name ;
    }

    function random() {
        let random = Math.floor(Math.random() * selection.length) ;
        return SELECTIONS[random];
    }

    function divAdd(select,boolean) {
        let div = document.createElement('div');
            div.innerHTML = select.emoji ;
            div.classList.add('add');
        boolean && div.classList.add('winner');
            finl.after(div);
    }

    function textScore(text){
        text.innerHTML = ++text.innerText;
    }