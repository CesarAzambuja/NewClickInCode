document.addEventListener('DOMContentLoaded', function(){
  try{ window.tailwind = window.tailwind || {}; tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] }, colors: { background:'#12171d', card:'#1b2229', foreground:'#ffffff', muted:'#7a8b99', border:'#2a3640', primary:'#00f2ff', secondary:'#3ef08b', accent:'#a2ff00' } } } }; }catch(e){}

  if(window.lucide && lucide.createIcons) lucide.createIcons();

  const currentYearEl = document.getElementById('currentYear');
  if(currentYearEl) currentYearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  let isMenuOpen = false;
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      mobileMenu.classList.toggle('active', isMenuOpen);
      menuBtn.innerHTML = isMenuOpen ? '<i data-lucide="x" class="w-6 h-6"></i>' : '<i data-lucide="menu" class="w-6 h-6"></i>';
      if(window.lucide && lucide.createIcons) lucide.createIcons();
    });

    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileMenu.classList.remove('active');
      menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      if(window.lucide && lucide.createIcons) lucide.createIcons();
    }));
  }

  // Header scroll effect (toggle class)
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => { if(header) header.classList.toggle('scrolled', window.scrollY > 50); });

  // Generate chart bars
  const chartBars = document.getElementById('chartBars');
  if(chartBars){
    const heights = [40,65,45,80,55,90,70,85,60,95];
    heights.forEach(height => {
      const bar = document.createElement('div');
      bar.className = 'rounded-t transition-all duration-300';
      bar.style.height = height + '%';
      bar.style.background = 'linear-gradient(to top, rgba(0,242,255,0.4), rgba(62,240,139,0.8))';
      bar.addEventListener('mouseenter', () => bar.style.background = 'linear-gradient(to top, rgba(0,242,255,0.6), #3ef08b)');
      bar.addEventListener('mouseleave', () => bar.style.background = 'linear-gradient(to top, rgba(0,242,255,0.4), rgba(62,240,139,0.8))');
      chartBars.appendChild(bar);
    });
  }

  // WhatsApp FAB show/hide on scroll (hide when scrolling down)
  const whatsappFab = document.getElementById('whatsappFab');
  if(whatsappFab){
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if(y > lastY && y > 100){ // scrolling down
        whatsappFab.classList.add('whatsapp-hidden');
      } else {
        whatsappFab.classList.remove('whatsapp-hidden');
      }
      lastY = y;
    });
  }

});