window.onload = () => {
  
  const cards = document.querySelectorAll('.card-custom');
  const button = document.querySelectorAll('.btn');
  button.forEach(btn => {
    btn.addEventListener('click', function() {
      const value = this.textContent.toLowerCase();
      addClass(this);
      filterProduct(value);
    });
  });
  
  function addClass(param) {
    button.forEach(btn => btn.classList.remove('active'));
    param.classList.add('active');
  }
  
  function filterProduct(value) {
    cards.forEach(card => {
      const type = card.dataset.type.toLowerCase();
      card.className = (value == type || value == 'all') ? '' : 'd-none';
    });
  }
  
  const input = document.querySelector('.search');
  input.addEventListener('keyup', function() {
    button.forEach(btn => btn.classList.remove('active'));
    const value = this.value.trim().toLowerCase();
    cards.forEach(card => {
      const type = card.dataset.type.toLowerCase();
      const text = card.querySelector('.title');
      const number = card.querySelector('.price');
      filterProductByValue(card, type, value, text, number);
    });
  });
  
  function filterProductByValue(card, type, value, text, number) {
    const title = text.textContent.toLowerCase();
    const price = number.textContent.toLowerCase();
    card.className = (type.indexOf(value) != -1 || title.indexOf(value) != -1 || price.indexOf(value) != -1) ? '' : 'd-none';
  }
  
}