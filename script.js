var typed = new Typed('.text', {
    strings: ['Web Developer', 'Designer', 'App Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});
function showSection(section) {
    // Hide all sections
    document.getElementById('education').classList.remove('active');
    document.getElementById('experience').classList.remove('active');
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.education_btn button');
    buttons.forEach(button => button.classList.remove('active_btn'));
    
    // Show the selected section and highlight the button
    document.getElementById(section).classList.add('active');
    document.querySelector(`.${section}`).classList.add('active_btn');
}

let EducationBtn = document.querySelector('.education');
let ExperienceBtn = document.querySelector('.education');

// Default to showing Education section
document.addEventListener('DOMContentLoaded', () => showSection('education'));

let show_box = document.querySelector('.show_box');
let hide_box = document.querySelector('.hide_box');

EducationBtn.addEventListener('click', () => {
    show_box.forEach(Sbox => { 
        Sbox.style.opacity = '0' ;
    
    });

    hide_box;forEach(Hbox => { 
        Sbox.style.opacity = '1' ;
    
    });

});

Experiencetn.addEventListener('click', () => {
    show_box.forEach(Sbox => { 
        Sbox.style.opacity = '1' ;
    
    });

    hide_box;forEach(Hbox => { 
        Sbox.style.opacity = '0' ;
    
    });

});


