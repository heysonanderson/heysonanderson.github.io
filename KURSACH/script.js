const calculatorsummoner = document.querySelector('.calc');
let calculator = document.querySelector('.calculator');

let overlay = document.getElementById('overlay-modal');
let modal = document.getElementById('modal');

calculatorsummoner.addEventListener('click', () => {
    overlay.classList.add('active');
    calculator.classList.remove('inactive');
    calculator.classList.add('active');
})

let cena = document.getElementById('cena');

const checkArray = document.querySelectorAll('.checkbox');

let type = 0;
let design = 0;
let task = 0;
for (let i = 0; i < checkArray.length; i++) {
    checkArray[i].addEventListener('click', () => {
    
        if (checkArray[i].checked) {
            
            if (i < 5) {

                for (let ocb = 0; ocb < 5; ocb++) {
                    if(ocb != i){
                        checkArray[ocb].checked = false;
                    }                        
                }
                switch (i) {
                    case 0:
                        type = 30000;
                        break;
                    case 1:
                        type = 50000;
                        break;
                    case 2:
                        type = 130000;
                        break;
                    case 3:
                        type = 30000;
                        break;
                    case 4:
                        type = 230000;
                        break;
                    default:
                        break;
                }
            }
            else if (4 < i && i < 8) {

                for (let ocb = 5; ocb < 8; ocb++) {
                    if(ocb != i){
                        checkArray[ocb].checked = false;
                    }                        
                }
                switch (i) {
                    case 5:
                        task = 20000;
                        break;
                    case 6:
                        task = 45000;
                        break;
                    case 7:
                        task = 15000;
                        break;
                    default:
                        break;
                }

            }
            else if (7 < i && i < 14) {

                for (let ocb = 8; ocb < checkArray.length; ocb++) {
                    if(ocb != i){
                        checkArray[ocb].checked = false;
                    }                        
                }
                switch (i) {
                    case 8:
                        design = 30000;
                        break;
                    case 9:
                        design = 15000;
                        break;
                    case 10:
                        design = 25000;
                        break;
                    case 11:
                        design = 0;
                        break;
                    default:
                        break;
                }

            }
        }
        else{
            if(i < 5){
                type = 0;
            }
            else if(4 < i && i < 8){
                task = 0;
            }
            else if(7 < i && i < 14){
                design = 0;
            }
            
        }

        cena.textContent = `${type + task + design}`;
    })  

}

let question = document.getElementById('question');
const ButtArr = document.querySelectorAll('.ButtArr');

ButtArr.forEach(ButtArrItem => {
    ButtArrItem.addEventListener('click', () => answer(ButtArrItem.innerHTML));
})

let gummy;

function answer(text) {

    gummy = false;

    if (text === 'Заказать Лендинг') {
        question.value = 'Здравствуйте, мне нужен лендинг, хотелось бы обсудить детали!';
    } 
    else if(text === 'Заказать Сайт-визитку'){
        question.value = 'Здравствуйте, мне нужен сайт-визитка, хотелось бы обсудить детали!';
    }
    else if(text === 'Заказать Сайт услуг'){
        question.value = 'Здравствуйте, мне нужен сайт услуг, хотелось бы обсудить детали!';
    }

    openModalBox();
}



function openModalBox(){
    overlay.classList.add('active');
    modal.classList.add('active');
    if(gummy){
        question.value = '';
    }        
}

function closeModalBox(){
    gummy = true;
    overlay.classList.remove('active');
    modal.classList.remove('active');
    calculator.classList.remove('active');
    calculator.classList.add('inactive');
}



const header = document.getElementById('header__inner');

    window.onscroll = (event) => {

        let scroll = window.pageYOffset; 
        

        
        if(0 <= scroll && scroll < 45){
            let x = scroll / 45 - 0.1;
            header.style.backgroundColor = `rgba(15, 15, 15, ${x})`;
        }
        else if(scroll > 45){
            header.style.backgroundColor = `rgba(15, 15, 15, 0.9)`;
        }
    }




