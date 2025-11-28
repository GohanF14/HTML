// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// FAQ toggle
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.plus-icon');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.plus-icon').forEach(item => {
        if (item !== icon) {
            item.classList.remove('rotate');
        }
    });
    
    // Toggle current FAQ
    answer.classList.toggle('active');
    icon.classList.toggle('rotate');
}

// Email validation and interaction
document.querySelectorAll('.email-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#fff';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#333';
    });
});

// Get Started button interaction
document.querySelectorAll('.get-started-btn').forEach(button => {
    button.addEventListener('click', function() {
        const emailInput = this.previousElementSibling;
        if (emailInput && emailInput.value.includes('@')) {
            alert('Welcome to Netflix! (This is a demo)');
        } else {
            alert('Please enter a valid email address.');
            emailInput.focus();
        }
    });
});

// Sign In button
document.querySelector('.sign-in-btn').addEventListener('click', function() {
    alert('Sign In clicked! (This is a demo)');
});