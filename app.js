

const form = document.getElementById("voca-form");
const success = document.getElementById("success");
const error = document.getElementById("error");


const addForm = document.getElementById("addVoca");
const turkceElement = document.getElementById("turkce");
const ingilizceElement = document.getElementById("ingilizce");

const cevapla = document.getElementById("start");
const okeyNumber = document.getElementById("numberOkey");


const changeButton = document.getElementById("next");


const tables = document.getElementById("tables");


allEvents();


function allEvents(){

    tables.addEventListener("click",deleteVoca);

    addForm.addEventListener("submit",addVocabulary);
    document.addEventListener("DOMContentLoaded",domContent);


    changeButton.addEventListener("click",changeVocabulary);
}



function deleteVoca(e){
    // console.log(e.target.id);
    if(e.target.id === "delete-vocabulary"){
        UI.deleteVocaUI(e.target);
        Storage.deleteVocaStrage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);


    }
    e.preventDefault();
}


function changeVocabulary(){
    UI.vocaChange();
}



function domContent(){
    Storage.listStorage();
    UI.vocaNumber();
    const sayi = document.getElementById("sayi");
    sayi.innerHTML = document.getElementById("voca-list").rows.length ;
}



function questions(e){
    console.log("BULMA");

    const numberQuestion = document.getElementById("questionNumber");
    const numberQuest = numberQuestion.options[numberQuestion.selectedIndex].text;  //Seçilen soru sayısı
    const sayi = 0;




    UI.randomVoca(numberQuest,sayi);

    e.preventDefault();
}







//Cevapla Butonu 
function getVocabulary(){


    UI.answerQuestion();
    setTimeout(function(){

    },500);
    UI.inputClear();
}





function addVocabulary(e){


    const turkce = turkceElement.value.trim();
    const ingilizce = ingilizceElement.value.trim();
    const index = document.getElementById("voca-list").rows.length;

    const newVoca = new Vocabulary(turkce,ingilizce,index);

    if(turkce === "" || ingilizce === ""){
        UI.showAlert("Bu alan boş bırakılamaz.","danger");
    }
    else{
        
        UI.listVoca(turkce,ingilizce,index);
        Storage.addVocabularyStorage(newVoca);
        UI.showAlert("Başarıyla Eklendi.","success");
    }
    

    
    UI.clearInput(turkceElement,ingilizceElement);
    e.preventDefault();
}