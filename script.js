const toggleSwitch= document.querySelector('input[type="checkbox"]');
const nav =  document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1= document.getElementById("image1");
const image2= document.getElementById("image2");
const image3= document.getElementById("image3");
const textBox= document.getElementById("text-box");


const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'



// function image swicth
 function imageSwitch(mode){
     image1.src=`img/undraw_proud_coder_${mode}.svg`
     image2.src=`img/undraw_feeling_proud_${mode}.svg`
     image3.src=`img/undraw_conceptual_idea_${mode}.svg`
 }


// function toggle between to modes

function ToggleLightandDarkMode(IsDark){
    nav.style.background = IsDark?'rgba(0,0,0, 0.5)' :'rgba(255, 255, 255,0.5)';
    textBox.style.background = IsDark?'rgba(255,255,255, 0.5)':'rgba(0,0,0, 0.5)';
    toggleIcon.children[0].textContent = IsDark?'Dark Mode':'light Mode';
    IsDark? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon"):toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    IsDark? imageSwitch('dark'):imageSwitch("light");

}





function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme",DARK_THEME)
        localStorage.setItem("theme", DARK_THEME)
        ToggleLightandDarkMode(true)
    }else{
        document.documentElement.setAttribute("data-theme", LIGHT_THEME)
        localStorage.setItem("theme", LIGHT_THEME)
        ToggleLightandDarkMode(false)
    }
}






//  event listener
toggleSwitch.addEventListener('change', switchTheme);
const currentTheme= localStorage.getItem("theme");

if (currentTheme){
    document.documentElement.setAttribute("data-theme",currentTheme);
    if (currentTheme === "dark"){
        toggleSwitch.checked = true;
        ToggleLightandDarkMode(true)
    }

}