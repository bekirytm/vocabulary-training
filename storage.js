class Storage{



    static getVocabularys(){

        let vocabulary;
        if(localStorage.getItem("vocabulary") === null){
            vocabulary = [];
        }
        else{
            vocabulary = JSON.parse(localStorage.getItem("vocabulary"));
        }
        return vocabulary;
    }   


    static addVocabularyStorage(newVoca){

        let vocabulary = this.getVocabularys();

        vocabulary.push(newVoca);

        localStorage.setItem("vocabulary",JSON.stringify(vocabulary));
    }







    static listStorage(){
        let vocabulary = this.getVocabularys();

        // console.log(vocabulary[0].turkce);
        vocabulary.forEach(function(tr,index){
            UI.listVoca(tr.turkce,tr.ingilizce,index);

        });

    }


    static deleteVocaStrage(title){
        let vocabulary = this.getVocabularys();

        vocabulary.forEach(function(voca,index){
            if(title === voca.turkce){
                vocabulary.splice(index,1);
            }
        });
        localStorage.setItem("vocabulary",JSON.stringify(vocabulary));
    }



    
}