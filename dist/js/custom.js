const el = document.getElementById('current-date');
el.textContent = new Date().toLocaleDateString('id-ID', {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target.toLocaleString('id-ID');
      }
    };
    updateCount();
  });
};

// Jalankan counter saat scroll sampai ke section
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    startCounters();
    observer.disconnect();
  }
});

observer.observe(document.querySelector('.stat-section'));

let mybutton = document.getElementById('btn-back-to-top');

// Munculkan tombol saat scroll turun 300px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = 'block';
    mybutton.classList.add('fade-in-up');
  } else {
    mybutton.style.display = 'none';
  }
}

// Fungsi klik kembali ke atas
mybutton.addEventListener('click', backToTop);

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Efek scroll halus
  });
}
