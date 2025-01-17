
var i = 0;
var txt = 'Medha Gupta'; // The text to be typed
var typing=true;

function typeErase()
{
    if(typing)  //during typing
    {
      if(i<txt.length)
      {
        document.getElementById("myName").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typeErase,150);
      }
      else{
        typing=false;
        setTimeout(typeErase,1000);
      }
    }

    else{
        if(i>0)  // while erasing
        {
            document.getElementById("myName").innerHTML=txt.substring(0,i-1);
            i--;
            setTimeout(typeErase,50);
        }

        else{
            typing=true;
            setTimeout(typeErase,1000);
        }
    }
}






window.onload = function() {
    typeErase();
};


//toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
}



// scroll sections
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll=()=>{
sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop-100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height)
      {
        // active navbar links
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
         });
      }
});

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}






const toggleButton = document.getElementById('dark-mode-toggle');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const body = document.querySelector(':root');


localStorage.setItem('dark-mode','enabled');
body.classList.add('dark-mode');
darkMode.style.display = 'none'; // dark
lightMode.style.display = 'inline'; // light off




// Toggle light mode
toggleButton.addEventListener('click', () => {
body.classList.toggle('light-mode');

  // Toggle icons
  if (body.classList.contains('light-mode')) {
    lightMode.style.display = 'none';
    darkMode.style.display = 'inline';
    localStorage.setItem('dark-mode', 'disabled');
  } 
  else {
    darkMode.style.display = 'none';
    lightMode.style.display = 'inline';
    localStorage.setItem('dark-mode', 'enabled');
  }
});
