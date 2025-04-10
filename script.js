let currentFontSize = 16;

function toggleAccessibility() {
    const options = document.getElementById('accessibility-options');
    options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
}

function changeFontSize(action) {
    const body = document.body;
    if (action === 'increase') {
        currentFontSize += 2;
    } else if (action === 'decrease') {
        currentFontSize = Math.max(10, currentFontSize - 2);
    }
    body.style.fontSize = currentFontSize + 'px';
}