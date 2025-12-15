// A. dark mode
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // iniiba ung text shown depende sa mode
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Toggle Light Mode';
    } else {
        themeBtn.textContent = 'Toggle Dark Mode';
    }
});


// B. edit job title
const editJobBtn = document.getElementById('editJobBtn');
const jobTitle = document.querySelector('.tagline');

editJobBtn.addEventListener('click', function() {
    const newTitle = prompt('Enter your new job title:', jobTitle.textContent);
    
    if (newTitle !== null && newTitle.trim() !== '') {
        jobTitle.textContent = newTitle;
    }
});


// C. show/hide skills
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');

toggleSkillsBtn.addEventListener('click', function() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});


// D. live character counter
const msgBox = document.getElementById('msgBox');
const counter = document.getElementById('counter');
const maxLength = 200;

msgBox.addEventListener('keyup', function() {
    const remaining = maxLength - msgBox.value.length;
    counter.textContent = remaining;
    
    // if lang, kung unti na lang yung characters, magiiba ung kulay. yung parang ano limit basta alam mo na
    if (remaining < 20) {
        counter.style.color = '#e07860';
    } else {
        counter.style.color = '#555';
    }
});


// E. form validation
function validateForm() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    
    // check kung name = empty
    if (nameField.value.trim() === '') {
        alert('Please enter your name.');
        nameField.focus();
        return false;
    }
    
    // check naman kung email = empty
    if (emailField.value.trim() === '') {
        alert('Please enter your email.');
        emailField.focus();
        return false;
    }
    
    // valid email formatting
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        alert('Please enter a valid email address.');
        emailField.focus();
        return false;
    }
    
    alert('Message sent successfully!');
    return true;
}


// F. todays date
const dateDisplay = document.getElementById('dateDisplay');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.textContent = 'Today is ' + today.toLocaleDateString('en-US', options);


// G. 3. greeting based on time || removed emoji cuz nag eerror sa ibang devices and browsers
const greetingDisplay = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = '';

if (hour >= 5 && hour < 12) {
    greetingText = 'Good Morning!';
} else if (hour >= 12 && hour < 17) {
    greetingText = 'Good Afternoon!';
} else if (hour >= 17 && hour < 21) {
    greetingText = 'Good Evening!';
} else {
    greetingText = 'Good Night!';
}

greetingDisplay.textContent = greetingText;
