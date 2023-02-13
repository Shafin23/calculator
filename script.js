const btn = document.getElementsByClassName("btn");
const display = document.getElementById("display");
const remove = document.getElementById("remove");
const back = document.getElementById("back");
const equal = document.getElementById("equal");

for(const button of btn){
    // only for number button to be clicked
    if(button!=remove && button!=back && button!=equal){
        button.addEventListener("click",function(){
            display.innerText += button.innerText;
            
        });
    }

    // delete all number from screen
    else if(button == remove){
        button.addEventListener("click",function(){
            display.innerText="";
        })
    }

    // delete the last number of the screen
    else if(button == back){
        button.addEventListener("click",function(){
            display.innerText = (display.innerText - (display.innerText%10))/10;
        });

    }
    else if(button==equal){
        // display.innerText = eval(display.innerText); 
        button.addEventListener("click",function(){
            console.log(display.innerText = eval(display.innerText));
        })
    }
    
}
