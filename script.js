let proceedButton = document.getElementById("proceed");
let startPage = document.getElementById("start-page");
let mainContent = document.getElementById("main-content");

let lovelikeyou = document.getElementById("lovelikeyou");
lovelikeyou.pause();

// proceedButton.addEventListener("click", event =>{
//     startPage.style.opacity = '0';
//     setTimeout(()=>{
//         startPage.style.display = 'none';
//         mainContent.style.opacity = '1';
//         mainContent.style.display = 'block';
//         lovelikeyou.muted = false; 
//         lovelikeyou.play();        
//     }, 500);
// });

proceedButton.addEventListener("click", event =>{
    startPage.style.opacity = '0';
    startPage.style.display = 'none';
    mainContent.style.opacity = '1';
    mainContent.style.display = 'block';
    lovelikeyou.muted = false; 
    lovelikeyou.play();        
});