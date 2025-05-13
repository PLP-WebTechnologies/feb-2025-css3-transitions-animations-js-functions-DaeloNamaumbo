// Check for saved preferences on load
document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('userThemeColor');
    if (savedColor) {
        document.getElementById('userColor').value = savedColor;
        document.body.style.backgroundColor = savedColor;
    }
});

function handleClick() {
    const button = document.querySelector('.animated-button');
    button.classList.add('bounce');
    
    // Remove animation class after it completes
    setTimeout(() => {
        button.classList.remove('bounce');
    }, 500);
}

function saveUserPreference() {
    const colorInput = document.getElementById('userColor');
    const selectedColor = colorInput.value;
    
    // Save to localStorage
    localStorage.setItem('userThemeColor', selectedColor);
    
    // Apply the color
    document.body.style.backgroundColor = selectedColor;
}
