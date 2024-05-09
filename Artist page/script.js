document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.range input[type="range"]');
    const sliderValue = document.querySelector('.sliderValue span');

    slider.addEventListener('input', function() {
        sliderValue.textContent = this.value;
    });
});


// JavaScript to toggle the visibility of the price filter
document.getElementById('priceFilterToggle').addEventListener('click', function() {
    var filterContainer = document.getElementById('priceFilterContainer');
    if (filterContainer.style.display === 'none') {
      filterContainer.style.display = 'block';
    } else {
      filterContainer.style.display = 'none';
    }
  });
  
  document.getElementById('priceFilterToggle').addEventListener('click', function() {
    var filterContainer = document.getElementById('priceFilterContainer');
    filterContainer.style.display = filterContainer.style.display === 'block' ? 'none' : 'block';
  });
  