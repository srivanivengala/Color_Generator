function generateColor() {
    // Generate random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // Update the color display and color code
    document.getElementById('colorDisplay').style.backgroundColor = randomColor;
    document.getElementById('colorCode').textContent = randomColor;
}

// Initialize with a color when the page loads
generateColor();