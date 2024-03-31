const range = document.getElementById('range');

range.addEventListener('input', function (e) {
    const value = e.target.value;
    // const label = e.target.nextElementSibling;
    const label = document.getElementById("range-content");
    if (value > 50 && value < 80) {
        // console.log((+value - 5) + '%')
        label.style.left = (+value - 1) + '%';
        label.textContent = value;
    } else if (value >= 80) {
        // console.log((+value - 1) + '%')
        label.style.left = (+value - 2) + '%';
        label.textContent = value;
    } else if (value > 30 && value < 50) {
        // console.log((+value - 1) + '%')
        label.style.left = (+value + 1) + '%';
        label.textContent = value;
    } else if (value <= 30) {
        // console.log((+value - 1) + '%')
        label.style.left = (+value + 3) + '%';
        label.textContent = value;
    }

})
