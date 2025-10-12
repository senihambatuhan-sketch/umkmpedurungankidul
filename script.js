// Animasi scroll
const cards = document.querySelectorAll('.umkm-card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
});

// Fitur pencarian UMKM
const searchInput = document.getElementById('search');
const umkmList = document.getElementById('umkmList');
const umkmCards = umkmList.getElementsByClassName('umkm-card');

searchInput.addEventListener('keyup', function() {
  const filter = this.value.toLowerCase();
  Array.from(umkmCards).forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});
