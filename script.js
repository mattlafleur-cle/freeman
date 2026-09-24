// =========================================================
// Leave No Doubt — Marcus Freeman Tribute Collection
// Product data + interactions
//
// This file is structured the same way as the sibling
// theloushirt.com site's script.js — see that repo if you want
// the pattern this was built from.
// =========================================================

// Every "Shop Now" button on the site (product cards, hero, sticky buy
// bar) opens the full catalog in a new tab rather than an individual
// product page — see initShopLinks() below and the matching hardcoded
// hrefs in index.html. Change this one constant to point "Shop Now" at
// the catalog elsewhere, or somewhere else entirely.
const SHOP_ALL_URL = 'https://ndshirt.com/collections/all';

// The full current lineup — all 9 "Leave No Doubt" listings. Add a row
// here if a new colorway ever launches; nothing else in this file needs
// to change, the grid re-renders automatically from this list.
//
// `image` is the real product photo (in images/); `design`/`shirt`/`ink`
// are only used as a fallback if a product has no photo yet — see
// teeSVG() below.
const PRODUCTS = [
  {
    name: 'Leave No Doubt',
    variant: 'White',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-white.webp',
    design: 'leave-no-doubt',
    shirt: '#f7f4ec',
    ink: '#0d1b3f'
  },
  {
    name: 'Leave No Doubt',
    variant: 'Navy Blue',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-navy.webp',
    design: 'leave-no-doubt',
    shirt: '#0d1b3f',
    ink: '#c9a961'
  },
  {
    name: 'Leave No Doubt',
    variant: 'Black (Chest Script)',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-black.webp',
    design: 'leave-no-doubt',
    shirt: '#111111',
    ink: '#c9a961'
  },
  {
    name: 'Leave No Doubt',
    variant: 'Forest Green (Chest Script)',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-forest-green-chest.webp',
    design: 'leave-no-doubt',
    shirt: '#1e3d24',
    ink: '#c9a961'
  },
  {
    name: 'Leave No Doubt',
    variant: 'Forest Green (Shield)',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-forest-green-shield.webp',
    design: 'leave-no-doubt',
    shirt: '#1e3d24',
    ink: '#c9a961'
  },
  {
    name: 'Leave No Doubt',
    variant: 'Navy Blue (Chest Script)',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-navy-chest.webp',
    design: 'leave-no-doubt',
    shirt: '#0d1b3f',
    ink: '#c9a961'
  },
  {
    name: 'Leave No Doubt',
    variant: 'Navy Blue (Shield)',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-navy-shield.webp',
    design: 'leave-no-doubt',
    shirt: '#0d1b3f',
    ink: '#c9a961'
  },
  {
    name: 'Leave No Doubt',
    variant: 'Heather Gray',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-heather-gray.webp',
    design: 'leave-no-doubt',
    shirt: '#b8b8b8',
    ink: '#0d1b3f'
  },
  {
    name: 'Leave No Doubt',
    variant: 'White-Gray',
    price: '21.00',
    tag: 'New',
    url: SHOP_ALL_URL,
    image: 'images/leave-no-doubt-white-gray.webp',
    design: 'leave-no-doubt',
    shirt: '#f7f4ec',
    ink: '#0d1b3f'
  }
];

// ---------- fallback artwork (only used if a product has no photo yet) ----------
const TEE_PATH = 'M70 10 L20 40 L35 75 L60 62 V240 A6 6 0 0 0 66 246 H154 A6 6 0 0 0 160 240 V62 L185 75 L200 40 L150 10 C150 28 132 40 110 40 C88 40 70 28 70 10 Z';

function teeSVG(p) {
  return `
  <svg class="tee" viewBox="0 0 220 260" xmlns="http://www.w3.org/2000/svg">
    <path d="${TEE_PATH}" fill="${p.shirt}" stroke="rgba(0,0,0,.08)" stroke-width="1.5"/>
    <text x="110" y="122" text-anchor="middle" font-family="Playfair Display, serif" font-weight="700" font-size="16" fill="${p.ink}">${p.name}</text>
    <text x="110" y="146" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="12" fill="${p.ink}">${p.variant}</text>
  </svg>`;
}

// ---------- render product grid ----------
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-visual">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
        ${p.image
          ? `<img class="tee-photo" src="${p.image}" alt="${p.name} (${p.variant}) t-shirt" loading="lazy">`
          : teeSVG(p)}
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-variant">${p.variant}</div>
        <div class="product-price">$${p.price}</div>
        <a class="product-cta" href="${SHOP_ALL_URL}" target="_blank" rel="noopener noreferrer">Shop Now</a>
      </div>
    </article>
  `).join('');
}

// ---------- mobile nav ----------
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const header = document.querySelector('.site-header');
  if (!toggle || !header) return;
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- scroll reveal ----------
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => observer.observe(el));
}

// ---------- misc ----------
function initMisc() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initNav();
  initReveal();
  initMisc();
});
