





  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.textContent;
      projectCards.forEach(card => {
        if (category === 'All') {
          card.style.display = 'block';
        } else if (card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

    
  




