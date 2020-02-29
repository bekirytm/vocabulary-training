class UI {
    
    constructor(){
        this.ggg = [];
        this.new = null;
        this.sorular = [];
        this.true = 0;
        this.false = 0;
        this.soru = [];
        this.dgs = Number(0);
        
    }
    


    static showAlert(message,type){
        
        const alert = document.createElement("div");

        alert.className = `alert alert-${type} col-md-4`;

        alert.textContent = message;

        document.querySelectorAll(".card-body")[1].appendChild(alert);

        setTimeout(function(){
            alert.remove();
        },1500);

    }


    static clearInput(tr,en){
        tr.value = "";
        en.value = "";

    }




    static randomVoca(number,sayi){
        
        const numberQuestions = Number(number);


        const vocabularys = Storage.getVocabularys();
        const voca = new Array(vocabularys);
        const arr = new Array(voca[0]);
        const leng = arr[0].length;

        console.log(arr);
        console.log(leng);

        const randomVocabulary = new Array();
        
        while(sayi<numberQuestions){
            const random = arr[0][Math.floor(Math.random()*leng)];

            randomVocabulary.push(random);
            sayi = sayi+1;
        }

        this.new = randomVocabulary;
        



        
        






        // const voca = Storage.getVocabularys();
        // const vocaBularys = new Array(voca);
        // const arr = new Array(vocaBularys[0]);
        // const leng = arr[0].length;
        
        // const i = 0;

        // const list = new Array();
        // for(i;i<number;i++){
        //     const random = arr[0][Math.floor(Math.random()*leng)];

        //     const trk = random.turkce;
        //     const eng = random.ingilizce;

        //     const soru = [trk,eng];
        //     console.log(soru);
        // }





        
        // console.log(arr[0][Math.floor(Math.random()*leng)]);
        // const random = arr[0][Math.floor(Math.random()*leng)];
        



    }



    static answerQuestion(){
        const newArray = this.new;  //sorular
        const voca = document.getElementById("voca");   //h3
        let answer = document.getElementById("answer").value; //cevap
        const start = document.getElementById("start"); //buton
        

        
        if(newArray === undefined){
            alert("Soru Sayısı Seçin");

        }
        else if(this.soru === undefined){
            this.sorular = {...newArray};
            console.log(this.sorular);
            console.log("oldu");
            this.soru = 2;
        }
        else{
            // if(start.onclick()){
            //     console.log("Tıklandı");
            // }
            // console.log("asdasdasdasdasdasdasdasd");
            

            // let sayim = 0;
            // console.log(newArray);
            start.addEventListener("click",this.deneme(newArray))

            


        }

        // console.log(newArray);




        



        


    }   
    static deneme(newArray2){
        const voca2 = document.getElementById("voca");   //h3
        let answer2 = document.getElementById("answer").value; //cevap
        const start2 = document.getElementById("start"); //buton
        start2.textContent = "Cevapla";
        console.log(newArray2);
        voca2.textContent = newArray2[0].turkce;
        
        const yeni = new Array();
        yeni.push(answer2);
        this.ggg.unpush(answer2);
        console.log(yeni);
        


        newArray2.shift();

    }


    static inputClear(){
        let kkk = document.getElementById("answer");
        kkk.value = "";
    }





    static listVoca(tr,en,index){
        // const list = document.createElement("li");

        // list.className = "list-group-item disabled";
        
        // list.innerHTML = "♦&emsp;TR :  " + tr +   "&emsp;&emsp;&emsp;"    + "EN :  " + en;

        // const liste = document.getElementById("liste");
        // liste.appendChild(list);

        // document.getElementById("list-vocabulary").appendChild(liste);

        const listVoca = document.getElementById("voca-list");
        // console.log(listVoca);

        listVoca.innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${tr}</td>
                <td>${en}</td>
                <td><a href="#" id = "delete-vocabulary" class = "btn btn-danger">Sil</a></td>
            </tr>
        `;

        
    }


    //Kelime sayısı
    static vocaNumber(){

    }


    static vocaChange(){
        const vocabularys = Storage.getVocabularys();
        const vocaArray = new Array(vocabularys);
        const vocaArray2 = new Array(vocaArray[0]);
        const leng = vocaArray2[0].length;

        let random = vocaArray2[0][Math.floor(Math.random()*leng)];
        console.log(random.turkce);
        console.log(random.ingilizce);

        const trVoca = document.getElementById("vocaTr");
        const enVoca = document.getElementById("vocaEn");
        trVoca.textContent = "♦  " + random.turkce;
        enVoca.textContent = "♦  " + random.ingilizce;

    }


    static deleteVocaUI(element){
        element.parentElement.parentElement.remove();
    }

}