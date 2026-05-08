// Shared navigation + scroll animations for KUSUM HOUSE
document.addEventListener('DOMContentLoaded', () => {
  // Load Cinzel font for brand name
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // Fix all navigation links
  document.querySelectorAll('a').forEach(a => {
    const text = a.textContent.trim().toLowerCase();
    if (text === 'sarees' || text === 'shop sarees') a.href = 'sarees.html';
    else if (text === 'kurtis') a.href = 'kurtis.html';
    else if (text.includes('co-ord')) a.href = 'coords.html';
    else if (text === 'lehengas' || text === 'discover heritage') a.href = 'lehengas.html';
    else if (text === 'about us' || text === 'our story') a.href = 'story.html';
    else if (text === 'kusum house') a.href = 'index.html';
  });

  // Fix brand logo links and inject logo image
  document.querySelectorAll('nav a.font-display-xl, nav div.font-display-xl').forEach(el => {
    const text = el.textContent.trim();
    if (text.includes('KUSUM HOUSE') && !el.querySelector('img')) {
      el.href = 'index.html';
      const img = document.createElement('img');
      img.src = 'kusumm.jpeg';
      img.alt = 'KUSUM HOUSE Logo';
      img.style.cssText = 'height:44px;width:44px;border-radius:50%;object-fit:cover;border:1px solid rgba(85,0,8,0.15);margin-right:8px;flex-shrink:0;';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.insertBefore(img, el.firstChild);
    }
  });

  // Apply Cinzel font to all KUSUM HOUSE brand text (nav + footer)
  document.querySelectorAll('nav a, nav div, footer a, footer span').forEach(el => {
    if (el.textContent.trim().includes('KUSUM HOUSE') && !el.querySelector('a')) {
      el.style.fontFamily = "'Cinzel', serif";
      el.style.fontWeight = '600';
      el.style.letterSpacing = '0.12em';
    }
  });

  // =============================================
  // MOBILE MENU SYSTEM
  // =============================================
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Inject mobile menu styles
  const mobileStyles = document.createElement('style');
  mobileStyles.textContent = `
    /* ===== MOBILE NAVBAR FIXES ===== */
    @media (max-width: 767px) {
      nav {
        padding-left: 16px !important;
        padding-right: 16px !important;
        height: 64px !important;
      }
      nav > div {
        padding-left: 16px !important;
        padding-right: 16px !important;
        height: 64px !important;
      }
      /* Hide desktop nav links on mobile */
      nav ul, nav > div > div.hidden {
        display: none !important;
      }
      /* Scale down brand name */
      nav a[href*="index"], nav div {
        font-size: 18px !important;
        line-height: 1.2 !important;
      }
      /* Make brand logo smaller on mobile */
      nav img[alt*="Logo"], nav img[alt*="KUSUM"] {
        height: 36px !important;
        width: 36px !important;
        margin-right: 6px !important;
      }
      /* Fix body top padding for smaller nav */
      body { padding-top: 64px !important; }
      main { padding-top: 0 !important; }
      /* Ensure nav icons don't overflow */
      nav .material-symbols-outlined {
        font-size: 22px !important;
      }
      nav button, nav .flex.gap-4, nav .flex.gap-6, nav .flex.items-center.gap-4, nav .flex.items-center.gap-6 {
        gap: 8px !important;
      }
      /* Hide desktop-only link containers */
      nav .flex-1:not(:has(.material-symbols-outlined)):not(:has(img)) {
        display: none !important;
      }
      nav > div > div.flex.gap-8:not(:has(.material-symbols-outlined)) {
        display: none !important;
      }
      /* Ensure nav uses simple left-right layout */
      nav > div {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        flex-wrap: nowrap !important;
        overflow: hidden !important;
      }
      /* Prevent text wrapping in brand */
      nav a {
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }
    }
    .kh-hamburger {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      color: #550008;
      padding: 4px;
      z-index: 100;
    }
    @media (max-width: 767px) {
      .kh-hamburger { display: flex; align-items: center; justify-content: center; }
    }
    .kh-mobile-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    .kh-mobile-overlay.open {
      visibility: visible;
      opacity: 1;
    }
    .kh-mobile-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(37, 25, 24, 0.5);
      backdrop-filter: blur(4px);
    }
    .kh-mobile-panel {
      position: absolute;
      top: 0;
      right: 0;
      width: 85%;
      max-width: 380px;
      height: 100%;
      background: #fff8f7;
      box-shadow: -8px 0 30px rgba(85, 0, 8, 0.1);
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    .kh-mobile-overlay.open .kh-mobile-panel {
      transform: translateX(0);
    }
    .kh-mobile-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      border-bottom: 1px solid rgba(223, 191, 189, 0.4);
    }
    .kh-mobile-header img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid rgba(85,0,8,0.15);
      margin-right: 10px;
    }
    .kh-mobile-brand {
      display: flex;
      align-items: center;
      font-family: 'Cinzel', serif;
      font-weight: 600;
      font-size: 20px;
      color: #550008;
      letter-spacing: 0.12em;
      text-decoration: none;
    }
    .kh-mobile-close {
      background: none;
      border: none;
      cursor: pointer;
      color: #550008;
      padding: 4px;
    }
    .kh-mobile-links {
      list-style: none;
      padding: 16px 0;
      margin: 0;
    }
    .kh-mobile-links li {
      border-bottom: 1px solid rgba(223, 191, 189, 0.2);
    }
    .kh-mobile-links a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 24px;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 500;
      color: #251918;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .kh-mobile-links a:hover,
    .kh-mobile-links a:active {
      background: rgba(85, 0, 8, 0.04);
      color: #550008;
    }
    .kh-mobile-links a .material-symbols-outlined {
      font-size: 18px;
      color: #8b716f;
    }
    .kh-mobile-footer {
      margin-top: auto;
      padding: 24px;
      border-top: 1px solid rgba(223, 191, 189, 0.3);
      text-align: center;
    }
    .kh-mobile-footer p {
      font-family: 'Montserrat', sans-serif;
      font-size: 11px;
      color: #8b716f;
      letter-spacing: 0.05em;
    }
  `;
  document.head.appendChild(mobileStyles);

  // Find the icons container in the nav (last flex div with icons)
  const iconsDiv = nav.querySelector('div > div:last-child') || nav.querySelector('.flex.items-center.gap-4') || nav.querySelector('.flex.gap-6');

  // Create hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'kh-hamburger';
  hamburger.setAttribute('aria-label', 'Open menu');
  hamburger.innerHTML = '<span class="material-symbols-outlined" style="font-size:28px;">menu</span>';

  // Insert hamburger into the nav icons area
  if (iconsDiv) {
    iconsDiv.appendChild(hamburger);
  } else {
    // Fallback: append to nav's inner div
    const navInner2 = nav.querySelector('div');
    if (navInner2) navInner2.appendChild(hamburger);
  }

  // ===== MOBILE NAVBAR NORMALIZATION =====
  // On mobile, hide ALL desktop-only nav link containers and ensure clean layout
  if (window.innerWidth < 768) {
    const navContainer = nav.querySelector('div') || nav;
    // Hide any div/ul that contains only nav links (not the brand, not icons)
    navContainer.querySelectorAll(':scope > div, :scope > ul').forEach(child => {
      const links = child.querySelectorAll('a');
      const hasOnlyNavLinks = links.length > 0 && !child.querySelector('img[alt*="Logo"], img[alt*="KUSUM"], .material-symbols-outlined');
      const isBrandEl = child.textContent.trim().includes('KUSUM HOUSE');
      if (hasOnlyNavLinks && !isBrandEl) {
        child.style.display = 'none';
      }
    });
    // Also hide standalone flex link containers
    navContainer.querySelectorAll('.flex-1, .flex.gap-8, .hidden.md\\:flex').forEach(el => {
      if (!el.querySelector('img') && !el.querySelector('.material-symbols-outlined')) {
        el.style.display = 'none';
      }
    });
  }
  // Re-check on resize
  window.addEventListener('resize', () => {
    const navContainer = nav.querySelector('div') || nav;
    navContainer.querySelectorAll(':scope > div, :scope > ul').forEach(child => {
      const links = child.querySelectorAll('a');
      const hasOnlyNavLinks = links.length > 0 && !child.querySelector('img[alt*="Logo"], img[alt*="KUSUM"], .material-symbols-outlined');
      const isBrandEl = child.textContent.trim().includes('KUSUM HOUSE');
      if (hasOnlyNavLinks && !isBrandEl) {
        child.style.display = window.innerWidth < 768 ? 'none' : '';
      }
    });
  });

  // Create mobile menu overlay
  const overlay = document.createElement('div');
  overlay.className = 'kh-mobile-overlay';
  overlay.innerHTML = `
    <div class="kh-mobile-backdrop"></div>
    <div class="kh-mobile-panel">
      <div class="kh-mobile-header">
        <a href="index.html" class="kh-mobile-brand">
          <img src="kusumm.jpeg" alt="Logo"/>
          KUSUM HOUSE
        </a>
        <button class="kh-mobile-close" aria-label="Close menu">
          <span class="material-symbols-outlined" style="font-size:28px;">close</span>
        </button>
      </div>
      <ul class="kh-mobile-links">
        <li><a href="index.html">Home <span class="material-symbols-outlined">chevron_right</span></a></li>
        <li><a href="sarees.html">Sarees <span class="material-symbols-outlined">chevron_right</span></a></li>
        <li><a href="kurtis.html">Kurtis <span class="material-symbols-outlined">chevron_right</span></a></li>
        <li><a href="coords.html">Co-ord Sets <span class="material-symbols-outlined">chevron_right</span></a></li>
        <li><a href="lehengas.html">Lehengas <span class="material-symbols-outlined">chevron_right</span></a></li>
        <li><a href="story.html">Our Story <span class="material-symbols-outlined">chevron_right</span></a></li>
        <li><a href="checkout.html">Cart <span class="material-symbols-outlined">chevron_right</span></a></li>
      </ul>
      <div class="kh-mobile-footer">
        <p>© 2024 KUSUM HOUSE. Crafting Contemporary Heritage.</p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Open/close handlers
  const closeBtn = overlay.querySelector('.kh-mobile-close');
  const backdrop = overlay.querySelector('.kh-mobile-backdrop');

  function openMenu() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close on link click
  overlay.querySelectorAll('.kh-mobile-links a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // =============================================
  // SCROLL ANIMATIONS
  // =============================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('section, article, .group, header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });

  // Navbar show/hide on scroll  
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    if (curr > lastScroll && curr > 100) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = curr;
  });
  nav.style.transition = 'transform 0.3s ease';

  // Back to top button
  const btn = document.createElement('button');
  btn.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
  btn.style.cssText = 'position:fixed;bottom:32px;right:32px;width:48px;height:48px;border-radius:50%;background:#550008;color:#fff;border:none;cursor:pointer;display:none;z-index:999;box-shadow:0 4px 16px rgba(85,0,8,0.3);transition:all 0.3s ease;';
  btn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
  });

  // Smooth page load
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });
});
