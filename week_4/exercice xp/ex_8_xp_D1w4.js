   //the part one is the same as part 2 excluding the arry methode and displayJuice function..;
   function makeJuice(size){
        let ingredients=[];
        function addIngredients(ing1,ing2,ing3){
            ingredients.push(ing1,ing2,ing3)
        }
        
        function displayJuice(){
            const sentance=`The client wants a ${size} juice, containing: ${ingredients.join(" , ")}"`
            document.getElementById("output").innerHTML=sentance
        }
        addIngredients("banana","appel","orange");
        addIngredients("manga","kiwi","grap");
        displayJuice();
    }
    makeJuice("large");
