// ========================
// MENU MOBILE
// ========================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fecha menu ao clicar em um link
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// ========================
// 📊 GRÁFICO CLIMÁTICO
// ========================

const ctx = document.getElementById('climateChart');

if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2026'
      ],
      datasets: [
        {
          label: 'Temperatura Média (°C)',
          data: [26, 30, 24, 25, 29, 27, 26],
          borderWidth: 3,
          tension: 0.4
        },
        {
          label: 'Umidade do Ar (%)',
          data: [55, 35, 80, 62, 38, 48, 60],
          borderWidth: 3,
          tension: 0.4
        },
        {
          label: 'Qualidade do Ar (Índice)',
          data: [70, 90, 40, 55, 88, 85, 45],
          borderWidth: 3,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // altura do gráfico
  ctx.parentElement.style.height = '420px';
}


// ========================
// ✨ ANIMAÇÃO AO ROLAR
// ========================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
  '.card, .image-placeholder, .chart-box'
);

hiddenElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});