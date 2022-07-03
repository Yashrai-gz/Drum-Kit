var S=["crash", "kick-bass","tom-2" , "tom-1","snare" , "tom-3", "tom-4"];
var k=['w',"a", "s", "d","j", "k", "l"];
for(let i=0; i<document.querySelectorAll(".drum").length; i++)
{
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
     var audio= new Audio("/sounds/"+ S[i]+".mp3");  //Here instead of writing the loaction like this we can also make use of this.innerHTML to get  which button has been clicked, and making use of switch statement &  make cases on that basis.
     audio.loop=false;
     audio.play();
    
     let buttonInnerHTML=this.innerHTML;
     buttonAnimation(buttonInnerHTML);
     

    
    
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
});

function makeSound(key){
    switch(key)
    {
        case "W":
        case "w":
        var crash= new Audio("/sounds/crash.mp3");
        crash.play();
        break;

        case "A" :
        case "a" :
        var kick= new Audio("/sounds/kick-bass.mp3");
        kick.play();
        break;

        case "S" :
        case  "s" :
        var t2= new Audio("/sounds/tom-2.mp3");
        t2.play();
        break;

        case "D" :
        case "d" :
        var t1= new Audio("/sounds/tom-1.mp3");
        t1.play();
        break;

        case "J" :
        case "j" :
        var snare= new Audio("/sounds/snare.mp3");
        snare.play();
        break;

        case "K" :
        case  "k" :
        var t3= new Audio("/sounds/tom-3.mp3");
        t3.play();
        break;

        case "L" :
        case "l" :
        var t4= new Audio("/sounds/tom-4.mp3");
        t4.play();
        break;

        default :
        alert("invaalid key pressed");
        
        
    }
}

function buttonAnimation(event)
{
    
    let dem=document.querySelector("." + event);
    dem.classList.add("pressed");

    setTimeout(function(){
        dem.classList.remove("pressed");
    },1000);

    
}
