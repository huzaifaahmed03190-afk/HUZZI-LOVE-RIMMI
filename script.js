function enterWebsite(){

    document.getElementById("welcome").style.display = "none";

    let music = document.getElementById("bgMusic");

    if(music){
        music.play().catch(function(){
            console.log("Music waiting for user interaction");
        });
    }

}




let message = "I Love You Rimmi ❤️ Forever & Always 🌹";

let index = 0;



function showLetter(){

    let letter = document.getElementById("letter");

    if(letter){

        letter.style.display = "block";

    }


    let typing = document.getElementById("typing");


    if(typing && index === 0){

        typingEffect();

    }

}




function typingEffect(){

    let typing = document.getElementById("typing");


    if(typing && index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typingEffect,100);

    }

}





function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "heart";


    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";


    document.body.appendChild(heart);


    setTimeout(function(){

        heart.remove();

    },5000);

}


setInterval(createHeart,300);







function loveCounter(){

    let startDate = new Date("2025-07-08");

    let now = new Date();

    let difference = now - startDate;



    let days = Math.floor(difference / (1000*60*60*24));

    let hours = Math.floor((difference / (1000*60*60)) % 24);

    let minutes = Math.floor((difference / (1000*60)) % 60);

    let seconds = Math.floor((difference / 1000) % 60);



    if(document.getElementById("days")){

        document.getElementById("days").innerHTML = days;

        document.getElementById("hours").innerHTML = hours;

        document.getElementById("minutes").innerHTML = minutes;

        document.getElementById("seconds").innerHTML = seconds;

    }

}


setInterval(loveCounter,1000);let memories = document.querySelectorAll(".memory");

window.addEventListener("scroll", function(){

    memories.forEach(function(photo){

        let position = photo.getBoundingClientRect().top;
        let screen = window.innerHeight;


        if(position < screen - 100){

            photo.classList.add("show");

        }

    });

});let surpriseShown = false;

window.addEventListener("scroll", function(){

    if(
        !surpriseShown &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
    ){

        document.getElementById("surprise").style.display = "block";

        surpriseShown = true;
    }

});

function closeSurprise(){

    document.getElementById("surprise").style.display = "none";

}