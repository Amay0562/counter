function init() {

	var con = document.getElementById("con");

    var num = 0;

    var i = 1;

    while (num != 1000){
        num += 100;
        if(num == 500){
            continue;
        }
        console.log(num);
    do{
        console.log("The number is " + i);
        i++;

    }while(i <= 10)

    
    
        

    }
 }




	


document.addEventListener("DOMContentLoaded",init,false);