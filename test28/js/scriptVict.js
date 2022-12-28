const Victorina=[{
    question:"Из какой манги Сану?",
    answer:['под зеленым светом','убить сталкера','хищник'],
    correct:2
},{
    question:"Как звали BJ ALEX в реальной жизни?",
    answer:['Дон Гун','Чан У','Джи Вон'],
    correct:3
},{
    question:"кем работал Чан У?",
    answer:['бармен','моделью','не работал'],
    correct:1
}]
//==================
let testAnswer=document.getElementById('testAnswer')
let listAnsfer=document.getElementById('listAnsfer')
const btn=document.getElementById('testRez')
//==================
//проверка нажатия на кнопку
//==================
btn.onclick=checkAnswer;
 
 function clearPage(){
    testAnswer.innerHTML='';
    listAnsfer.innerHTML='';
 }
 let questionIndex=0, score=0;
 function showQuestion(){
    //ворос
    const question=`<h2>${Victorina[questionIndex]['question']}</h2> `
    testAnswer.innerHTML=question
    //ответ
    for(let i=0;i<Victorina[questionIndex]['answer'].length;i++){
        const Answer=`<label class="answ">
        <input type="radio" value=${i}>
        ${Victorina[questionIndex]['answer'][i]}</label>`
        listAnsfer.innerHTML+=Answer 
          
    }
    
 }
 showQuestion()

 function checkAnswer(){
    //console.log('hi')
const checkedRadio=listAnsfer.querySelector('input[type=radio]:checked')
    if(!checkedRadio){
        btn.blur()
        return;
    }   
    const userAnswer=+checkedRadio.value+1
   
    console.log(userAnswer)
    
    if(Victorina[questionIndex]['correct']===userAnswer){
       score++
    }
    console.log(score)
    //проверка на последний вопрос
 if(questionIndex!=Victorina.length-1){
    console.log('не последний вопрос')
    questionIndex++;
    clearPage();
    showQuestion();
    return;
 }
 else{
    console.log('+++')
    clearPage();
    testRez.value='начать сначала'
    showResult();
 }
}
console.log(score,questionIndex)

 function showResult(){
    let massage;
let rezult=(score/Victorina.length)*100
    console.log('hi')
    if(score==Victorina.length){
        massage='Молодец,ты лючший!!!'
    }
    else if(rezult>50 && rezult<100){
massage='Уже не плохо .Вызов почитать) '
    }
    else massage='Не очень вызов почитать)'
    testAnswer.innerHTML=`<h2>${massage}<h2>`
    listAnsfer.innerHTML=`<h2>	&#128115;&#8205;&#9794;&#65039;вы ответили на${score}из${Victorina.length}&#128200;<h2>
                <h3>	&#128274;ваш результат${rezult.toFixed(2)}	&#128170;<h3>`
    console.log(rezult)
    btn.innerHTML='начать сначало'
    rezultTest.onclick=()=>{history.go()}
 }

 