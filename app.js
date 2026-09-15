// ═══════════════════════════════════════════════════════════════
// EXOTORY MARKETPLACE - APP.JS
// ═══════════════════════════════════════════════════════════════

// ─── KONFIGURASI BACKEND ───
// GANTI ke URL HTTPS Tuan (Cloudflare Tunnel / Nginx SSL)
// const API_BASE = 'https://lynn.websitesan.store';
const API_BASE = 'http://lynn.websitesan.store:5008'; // untuk testing lokal
// const API_BASE = 'https://xxx.trycloudflare.com'; // untuk production

// ─── KONFIGURASI CONTACT ───
const TELEGRAM_URL = 'https://t.me/kaichonew';
const WHATSAPP_URL = 'https://wa.me/6281234567890';
const LOGIN_URL = 'https://t.me/exotoryultra';

// ═══════════════════════════════════════════════════════════════
// DATA PRODUK LOKAL (6 PRODUK)
// ═══════════════════════════════════════════════════════════════
const PRODUK_LOKAL = [
  {
    id: 'sender_pro',
    name: 'Sender Pro',
    price: 25000,
    originalPrice: 40000,
    imagePath: 'assets/images/produk/produk1.jpg',
    icon: 'fas fa-wifi',
    rating: 4.9,
    sold: 1247,
    badge: 'BEST SELLER',
    badgeColor: '#FFCA28',
    category: 'Sender',
    description: 'Sender Pro adalah bot WhatsApp premium dengan performa tinggi. Cocok untuk spam bug, kirim pesan massal, dan auto-reply.',
    features: [
      'Unlimited send bug',
      'Support grup & private',
      'Auto-reconnect 24 jam',
      'Anti-banned system',
      'Free update 30 hari',
    ],
  },
  {
    id: 'bug_premium',
    name: 'Bug Premium Pack',
    price: 45000,
    originalPrice: 75000,
    imagePath: 'assets/images/produk/produk2.jpg',
    icon: 'fas fa-bug',
    rating: 4.8,
    sold: 856,
    badge: 'HOT',
    badgeColor: '#E91E63',
    category: 'Bug',
    description: 'Bug Premium Pack berisi kumpulan bug WhatsApp terbaru yang masih work. Update rutin setiap bulan.',
    features: [
      '10+ bug aktif',
      'Delay, crash, freeze',
      'Anti-patch dari WA',
      'Update gratis 1 bulan',
      'Tutorial lengkap',
    ],
  },
  {
    id: 'rat_device',
    name: 'RAT Device',
    price: 65000,
    originalPrice: 120000,
    imagePath: 'assets/images/produk/produk3.jpg',
    icon: 'fas fa-mobile-alt',
    rating: 5.0,
    sold: 423,
    badge: 'PREMIUM',
    badgeColor: '#9C27B0',
    category: 'RAT',
    description: 'RAT (Remote Access Trojan) untuk kontrol device dari jauh. Fitur lengkap seperti RAT premium.',
    features: [
      'Live camera streaming',
      'Screenshot realtime',
      'Keylogger',
      'File manager',
      'Location tracking',
      'WhatsApp reader',
    ],
  },
  {
    id: 'tools_gateway',
    name: 'Tools Gateway',
    price: 35000,
    originalPrice: 55000,
    imagePath: 'assets/images/produk/produk4.jpg',
    icon: 'fas fa-tools',
    rating: 4.7,
    sold: 1042,
    badge: 'POPULER',
    badgeColor: '#4FC3F7',
    category: 'Tools',
    description: 'Tools Gateway adalah paket tools untuk kebutuhan daily. Include mini browser, youtube downloader, dan utilitas lainnya.',
    features: [
      'Mini browser',
      'YouTube downloader',
      'Image to URL',
      'WiFi scanner',
      'Free update',
    ],
  },
  {
    id: 'anime_pack',
    name: 'Anime Pack',
    price: 20000,
    originalPrice: 35000,
    imagePath: 'assets/images/produk/produk5.jpg',
    icon: 'fas fa-film',
    rating: 4.6,
    sold: 2134,
    badge: 'NEW',
    badgeColor: '#00E676',
    category: 'Entertainment',
    description: 'Anime Pack untuk pecinta anime. Akses streaming anime tanpa batas dengan kualitas HD.',
    features: [
      'Streaming HD',
      'No ads',
      'Sub Indo',
      'Update episode terbaru',
      'Offline mode',
    ],
  },
  {
    id: 'bundle_all',
    name: 'Bundle All Access',
    price: 120000,
    originalPrice: 250000,
    imagePath: 'assets/images/produk/produk6.jpg',
    icon: 'fas fa-crown',
    rating: 5.0,
    sold: 187,
    badge: 'VIP',
    badgeColor: '#FF9800',
    category: 'Bundle',
    description: 'Bundle All Access — paket paling hemat! Semua produk di atas jadi satu.',
    features: [
      'Semua produk di atas',
      'Priority support 24/7',
      'Lifetime update',
      'Akses grup eksklusif',
      'Custom request fitur',
    ],
    isPremium: true,
  },
];

// ═══════════════════════════════════════════════════════════════
// DATA PRODUK APK (8 PRODUK)
// ═══════════════════════════════════════════════════════════════
const PRODUK_APK = [
  {
    id: 'member_7hari',
    name: 'MEMBER 7 HARI',
    price: 5000,
    originalPrice: 8000,
    role: 'member',
    duration: 7,
    description: 'Akses 7 hari · role member',
    icon: 'fas fa-user',
    gradient: ['#9C27B0', '#4FC3F7'],
    discount: '-37%',
    features: ['Akses 7 hari', 'Bayar QRIS', 'Tutorial video', 'Tidak wajib Telegram'],
  },
  {
    id: 'full_update',
    name: 'FULL UPDATE',
    price: 30000,
    originalPrice: 35000,
    role: 'member',
    duration: 9999,
    description: 'Akses full update · role member',
    icon: 'fas fa-sync-alt',
    gradient: ['#4FC3F7', '#9C27B0'],
    discount: '-14%',
    features: ['Akses selamanya', 'Update terbaru', 'Bayar QRIS', 'Tidak wajib Telegram'],
  },
  {
    id: 'reseller',
    name: 'RESELLER',
    price: 50000,
    originalPrice: 60000,
    role: 'reseller',
    duration: 9999,
    description: 'Akses reseller · role reseller',
    icon: 'fas fa-store',
    gradient: ['#00E676', '#4FC3F7'],
    discount: '-16%',
    features: ['Akses selamanya', 'Bisa buat member', 'Bayar QRIS', 'Tidak wajib Telegram'],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 70000,
    originalPrice: 75000,
    role: 'vip',
    duration: 9999,
    description: 'Akses VIP · role vip',
    icon: 'fas fa-star',
    gradient: ['#FFCA28', '#FF9800'],
    discount: '-6%',
    features: ['Akses selamanya', 'Priority support', 'Bayar QRIS', 'Tidak wajib Telegram'],
  },
  {
    id: 'owner',
    name: 'OWNER',
    price: 90000,
    originalPrice: 100000,
    role: 'owner',
    duration: 9999,
    description: 'Akses Owner · role owner',
    icon: 'fas fa-crown',
    gradient: ['#E91E63', '#9C27B0'],
    discount: '-10%',
    features: ['Akses selamanya', 'Full admin', 'Bayar QRIS', 'Tidak wajib Telegram'],
  },
  {
    id: 'high_owner',
    name: 'HIGH OWNER',
    price: 120000,
    originalPrice: 125000,
    role: 'high_admin',
    duration: 9999,
    description: 'Akses High Owner',
    icon: 'fas fa-gem',
    gradient: ['#9C27B0', '#E91E63'],
    discount: '-4%',
    features: ['Akses selamanya', 'High admin', 'Bayar QRIS', 'Tidak wajib Telegram'],
  },
  {
    id: 'ceo',
    name: 'CEO',
    price: 150000,
    originalPrice: 165000,
    role: 'ceo',
    duration: 9999,
    description: 'Akses CEO',
    icon: 'fas fa-briefcase',
    gradient: ['#4FC3F7', '#6A1B9A'],
    discount: '-9%',
    features: ['Akses selamanya', 'Full control', 'Bayar QRIS', 'Tidak wajib Telegram'],
  },
  {
    id: 'team_project',
    name: 'TEAM PROJECT',
    price: 200000,
    originalPrice: 200000,
    role: 'team_project',
    duration: 9999,
    description: 'Akses Team Project',
    icon: 'fas fa-users',
    gradient: ['#FF9800', '#E91E63'],
    discount: '-2 SLOT',
    isLimited: true,
    features: ['Akses selamanya', 'Open -2 Slot', 'Bayar QRIS', 'Tidak wajib Telegram'],
  },
];

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let currentTab = 'lokal';
let selectedKey = null; // "lokal:id" atau "apk:id"
let currentOrderId = null;
let pollInterval = null;
let currentProductType = null; // 'lokal' atau 'apk'
let pendingProduct = null;
let pendingUsername = null;
let pendingPassword = null;

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderLokalProducts();
  renderApkProducts();
  updateTabIndicator();
});

// ═══════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function calcDiscount(price, original) {
  return Math.round(((original - price) / original) * 100);
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const icon = document.getElementById('toastIcon');
  const text = document.getElementById('toastText');
  
  toast.className = 'toast show';
  if (type === 'error') {
    toast.classList.add('error');
    icon.className = 'fas fa-exclamation-circle';
  } else if (type === 'success') {
    toast.classList.add('success');
    icon.className = 'fas fa-check-circle';
  } else {
    icon.className = 'fas fa-info-circle';
  }
  
  text.textContent = message;
  
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ═══════════════════════════════════════════════════════════════
// TAB SWITCH
// ═══════════════════════════════════════════════════════════════
function switchTab(tab) {
  currentTab = tab;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  document.getElementById(`tab-${tab}`).classList.add('active');
  
  updateTabIndicator();
  
  // Reset selection
  selectedKey = null;
  updateBottomBar();
  updateCartBadge();
}

function updateTabIndicator() {
  const indicator = document.getElementById('tabIndicator');
  indicator.style.transform = currentTab === 'lokal' ? 'translateX(0)' : 'translateX(100%)';
}

// ═══════════════════════════════════════════════════════════════
// RENDER PRODUK LOKAL
// ═══════════════════════════════════════════════════════════════
function renderLokalProducts() {
  const grid = document.getElementById('lokalGrid');
  grid.innerHTML = '';
  
  PRODUK_LOKAL.forEach(p => {
    const discount = calcDiscount(p.price, p.originalPrice);
    const isSelected = selectedKey === `lokal:${p.id}`;
    
    const card = document.createElement('div');
    card.className = `card-lokal ${isSelected ? 'selected' : ''}`;
    card.onclick = () => onSelectProduct('lokal', p.id);
    
    card.innerHTML = `
      <div class="card-image">
        <div class="fallback-icon"><i class="${p.icon}"></i></div>
        <img src="${p.imagePath}" 
             alt="${p.name}" 
             onerror="this.style.display='none'"
             onload="this.previousElementSibling.style.display='none'">
        <div class="card-badge-discount">
          <i class="fas fa-tag"></i> -${discount}%
        </div>
        <div class="card-badge-label" style="background: linear-gradient(135deg, ${p.badgeColor}, ${p.badgeColor}99);">
          ${p.badge}
        </div>
        ${isSelected ? '<div class="card-check"><i class="fas fa-check"></i></div>' : ''}
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-rating">
          <i class="fas fa-star star"></i>
          <span>${p.rating}</span>
          <span>·</span>
          <span>${p.sold}+</span>
        </div>
        <div class="card-price-row">
          <span class="card-price">${formatRupiah(p.price)}</span>
          <span class="card-price-old">${formatRupiah(p.originalPrice)}</span>
        </div>
        <button class="card-btn-detail" onclick="event.stopPropagation(); showDetailLokal('${p.id}')">
          <i class="fas fa-eye"></i> DETAIL
        </button>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════
// RENDER PRODUK APK
// ═══════════════════════════════════════════════════════════════
function renderApkProducts() {
  const list = document.getElementById('apkList');
  list.innerHTML = '';
  
  PRODUK_APK.forEach(p => {
    const isSelected = selectedKey === `apk:${p.id}`;
    const durationText = p.duration === 9999 ? 'Selamanya' : `${p.duration} hari`;
    
    const card = document.createElement('div');
    card.className = `card-apk ${isSelected ? 'selected' : ''}`;
    card.onclick = () => onSelectProduct('apk', p.id);
    
    card.innerHTML = `
      <div class="apk-icon-box" style="background: linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]}); box-shadow: 0 0 16px ${p.gradient[0]}80;">
        <i class="${p.icon}"></i>
        ${p.isLimited ? '<span style="position:absolute; top:-4px; right:-4px; padding:2px 4px; background:#E91E63; color:white; font-size:6px; font-weight:900; border-radius:4px; font-family:var(--font-display);">LTD</span>' : ''}
      </div>
      <div class="apk-info">
        <div class="apk-name">${p.name}</div>
        <div class="apk-desc">${p.description}</div>
        <div class="apk-meta">
          <span class="apk-badge-discount">${p.discount}</span>
          <span class="apk-duration"><i class="fas fa-clock" style="font-size:9px;"></i> ${durationText}</span>
        </div>
      </div>
      <div class="apk-right">
        ${isSelected ? '<div class="apk-check"><i class="fas fa-check"></i></div>' : '<div style="height:24px;"></div>'}
        <div class="apk-price-box">
          <span class="apk-price">${formatRupiah(p.price)}</span>
          ${p.originalPrice > p.price ? `<span class="apk-price-old">${formatRupiah(p.originalPrice)}</span>` : ''}
        </div>
        <button class="apk-btn-detail" onclick="event.stopPropagation(); showDetailApk('${p.id}')">
          <i class="fas fa-eye"></i> DETAIL
        </button>
      </div>
    `;
    
    list.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════
// SELECT PRODUCT
// ═══════════════════════════════════════════════════════════════
function onSelectProduct(type, id) {
  const key = `${type}:${id}`;
  selectedKey = selectedKey === key ? null : key;
  
  if (type === 'lokal') renderLokalProducts();
  else renderApkProducts();
  
  updateBottomBar();
  updateCartBadge();
}

function getSelectedProduct() {
  if (!selectedKey) return null;
  const [type, id] = selectedKey.split(':');
  
  if (type === 'lokal') {
    const p = PRODUK_LOKAL.find(x => x.id === id);
    return p ? { ...p, type: 'lokal' } : null;
  } else {
    const p = PRODUK_APK.find(x => x.id === id);
    return p ? { ...p, type: 'apk' } : null;
  }
}

function updateBottomBar() {
  const bar = document.getElementById('bottomBar');
  const p = getSelectedProduct();
  
  if (!p) {
    bar.style.display = 'none';
    return;
  }
  
  bar.style.display = 'block';
  document.getElementById('badgeCat').textContent = p.type === 'apk' ? 'APK' : 'LOKAL';
  document.getElementById('selectedName').textContent = p.name;
  document.getElementById('totalPrice').textContent = formatRupiah(p.price);
  
  const badge = document.getElementById('badgeCat');
  badge.style.background = p.type === 'apk'
    ? 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))'
    : 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))';
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.style.display = selectedKey ? 'flex' : 'none';
}

function onCartClick() {
  if (!selectedKey) {
    showToast('Pilih produk dulu ya!', 'info');
    return;
  }
  showBuyConfirmation();
}

// ═══════════════════════════════════════════════════════════════
// DETAIL PRODUK
// ═══════════════════════════════════════════════════════════════
function showDetailLokal(id) {
  const p = PRODUK_LOKAL.find(x => x.id === id);
  if (!p) return;
  renderDetailModal({ ...p, type: 'lokal' });
}

function showDetailApk(id) {
  const p = PRODUK_APK.find(x => x.id === id);
  if (!p) return;
  renderDetailModal({ ...p, type: 'apk' });
}

function renderDetailModal(p) {
  const isLokal = p.type === 'lokal';
  const gradient = isLokal ? ['#9C27B0', '#4FC3F7'] : p.gradient;
  
  document.getElementById('detailIcon').style.background = `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;
  document.getElementById('detailIcon').innerHTML = `<i class="${p.icon}"></i>`;
  
  const metaParts = [];
  if (p.rating) metaParts.push(`<span><i class="fas fa-star star"></i> ${p.rating}</span>`);
  if (p.sold) metaParts.push(`<span>${p.sold}+ Terjual</span>`);
  if (p.duration) metaParts.push(`<span><i class="fas fa-clock"></i> ${p.duration === 9999 ? 'Selamanya' : p.duration + ' Hari'}</span>`);
  
  const featuresHtml = (p.features || []).map(f => `
    <div class="feature-item">
      <div class="check"><i class="fas fa-check"></i></div>
      <span>${f}</span>
    </div>
  `).join('');
  
  const imageHtml = p.imagePath 
    ? `<div class="detail-image-wrapper">
         <div class="detail-fallback-icon"><i class="${p.icon}"></i></div>
         <img src="${p.imagePath}" onerror="this.style.display='none'">
       </div>`
    : `<div class="detail-image-wrapper" style="height:120px;">
         <div class="detail-fallback-icon"><i class="${p.icon}"></i></div>
       </div>`;
  
  document.getElementById('detailBody').innerHTML = `
    ${imageHtml}
    <h2 class="detail-name">${p.name.toUpperCase()}</h2>
    <div class="detail-meta">${metaParts.join('')}</div>
    <div class="detail-price-row">
      <span class="detail-price">${formatRupiah(p.price)}</span>
      ${p.originalPrice > p.price ? `<span class="detail-price-old">${formatRupiah(p.originalPrice)}</span>` : ''}
    </div>
    
    <div class="detail-section">
      <div class="detail-section-title">
        <div class="bar"></div>
        <h4>DESKRIPSI</h4>
      </div>
      <div class="detail-box">
        <p>${p.description}</p>
      </div>
    </div>
    
    <div class="detail-section">
      <div class="detail-section-title">
        <div class="bar"></div>
        <h4>FITUR UNGGULAN</h4>
      </div>
      <div class="detail-box">${featuresHtml}</div>
    </div>
    
    <div class="notif-info">
      <i class="fas ${isLokal ? 'fa-info-circle' : 'fa-magic'}"></i>
      <span>${isLokal ? 'PRODUK LOKAL: Setelah bayar, hubungi Telegram/WA untuk ambil produk' : 'PRODUK APK: Setelah bayar, akun akan dibuat otomatis dengan role ini'}</span>
    </div>
    
    <button class="detail-btn-back" onclick="closeModal('detailModal')">
      <i class="fas fa-arrow-left"></i> KEMBALI
    </button>
  `;
  
  openModal('detailModal');
}

// ═══════════════════════════════════════════════════════════════
// BUY CONFIRMATION
// ═══════════════════════════════════════════════════════════════
function showBuyConfirmation() {
  const p = getSelectedProduct();
  if (!p) return;
  
  document.getElementById('confirmKategori').textContent = p.type === 'apk' ? 'Produk APK' : 'Produk Lokal';
  document.getElementById('confirmProduk').textContent = p.name;
  document.getElementById('confirmHarga').textContent = formatRupiah(p.price);
  
  openModal('confirmModal');
}

function onCancelBuy() {
  closeModal('confirmModal');
  showToast('Transaksi dibatalkan', 'info');
}

function onConfirmBuy() {
  closeModal('confirmModal');
  const p = getSelectedProduct();
  if (!p) return;
  
  currentProductType = p.type;
  
  if (p.type === 'apk') {
    // Untuk APK: minta username & password dulu
    document.getElementById('inputUsername').value = '';
    document.getElementById('inputPassword').value = '';
    openModal('accountModal');
  } else {
    // Untuk Lokal: langsung create order
    createOrder('guest_' + Date.now(), 'auto_' + Date.now());
  }
}

function onSubmitAccount() {
  const username = document.getElementById('inputUsername').value.trim();
  const password = document.getElementById('inputPassword').value.trim();
  
  if (username.length < 3) {
    showToast('Username minimal 3 karakter', 'error');
    return;
  }
  if (password.length < 4) {
    showToast('Password minimal 4 karakter', 'error');
    return;
  }
  
  pendingUsername = username;
  pendingPassword = password;
  closeModal('accountModal');
  createOrder(username, password);
}

// ═══════════════════════════════════════════════════════════════
// CREATE ORDER
// ═══════════════════════════════════════════════════════════════
async function createOrder(username, password) {
  const p = getSelectedProduct();
  if (!p) return;
  
  const roleId = p.type === 'apk' ? p.id : `lokal_${p.id}`;
  
  showToast('Membuat order...', 'info');
  
  try {
    const response = await fetch(`${API_BASE}/createOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        roleId: roleId,
        amount: p.price,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      currentOrderId = data.orderId;
      showQrisModal(data.qris, p);
      startPolling();
    } else {
      showToast(data.message || 'Gagal membuat order', 'error');
    }
  } catch (err) {
    console.error('Create order error:', err);
    showToast('Gagal terhubung ke server: ' + err.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════════════
// QRIS MODAL
// ═══════════════════════════════════════════════════════════════
function showQrisModal(qrisData, product) {
  document.getElementById('qrisKategori').textContent = product.type === 'apk' ? 'Produk APK' : 'Produk Lokal';
  document.getElementById('qrisProduk').textContent = product.name;
  document.getElementById('qrisHarga').textContent = formatRupiah(product.price);
  document.getElementById('stepBayar').textContent = `Bayar sesuai nominal: ${formatRupiah(product.price)}`;
  
  // Render QRIS
  const qrisContainer = document.getElementById('qrisCode');
  qrisContainer.innerHTML = '';
  new QRCode(qrisContainer, {
    text: qrisData,
    width: 220,
    height: 220,
    colorDark: '#000000',
    colorLight: '#FFFFFF',
    correctLevel: QRCode.CorrectLevel.H,
  });
  
  // Reset status
  const statusBox = document.getElementById('statusBox');
  statusBox.classList.remove('success');
  document.getElementById('statusText').textContent = 'Menunggu pembayaran...';
  
  openModal('qrisModal');
}

function onCancelQris() {
  if (currentOrderId) {
    // Cancel order di backend
    fetch(`${API_BASE}/cancelOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: currentOrderId }),
    }).catch(() => {});
  }
  
  stopPolling();
  closeModal('qrisModal');
  currentOrderId = null;
  showToast('Transaksi dibatalkan', 'info');
}

// ═══════════════════════════════════════════════════════════════
// POLLING PEMBAYARAN
// ═══════════════════════════════════════════════════════════════
function startPolling() {
  stopPolling();
  
  let checks = 0;
  const maxChecks = 30;
  
  pollInterval = setInterval(async () => {
    checks++;
    if (checks > maxChecks) {
      stopPolling();
      document.getElementById('statusText').textContent = 'Waktu pembayaran habis.';
      return;
    }
    
    try {
      const res = await fetch(`${API_BASE}/checkOrder?orderId=${currentOrderId}`);
      const data = await res.json();
      
      if (data.status === 'completed') {
        stopPolling();
        
        // Update status
        const statusBox = document.getElementById('statusBox');
        statusBox.classList.add('success');
        document.getElementById('statusText').textContent = 'Pembayaran berhasil!';
        
        // Ambil data order
        const orderData = data.order || {};
        
        // Tutup QRIS modal, buka sukses modal
        setTimeout(() => {
          closeModal('qrisModal');
          showSuccessModal(orderData);
        }, 800);
      }
    } catch (err) {
      console.error('Poll error:', err);
    }
  }, 10000);
}

function stopPolling() {
  if (pollInterval) {
    clearInterval(pollInterval);
    pollInterval = null;
  }
}

// ═══════════════════════════════════════════════════════════════
// SUCCESS MODAL
// ═══════════════════════════════════════════════════════════════
function showSuccessModal(orderData) {
  const p = getSelectedProduct();
  if (!p) return;
  
  const isApk = p.type === 'apk';
  
  document.getElementById('successTitle').textContent = isApk ? 'AKUN BERHASIL DIBUAT!' : 'PEMBAYARAN BERHASIL';
  
  const infoBox = document.getElementById('successInfoBox');
  
  if (isApk) {
    // Tampilkan credentials akun
    const uname = orderData.username || pendingUsername || '-';
    const pass = orderData.password || pendingPassword || '-';
    const role = orderData.roleName || p.name;
    const dur = orderData.day;
    const durText = dur === 9999 || p.duration === 9999 ? 'Selamanya (9999 hari)' : `${dur || p.duration} hari`;
    
    infoBox.innerHTML = `
      <div class="success-info-row">
        <span>👤 Username</span>
        <span>${uname}</span>
      </div>
      <div class="success-info-row">
        <span>🔐 Password</span>
        <span>${pass}</span>
      </div>
      <div class="success-info-row">
        <span>🎭 Role</span>
        <span>${role.toUpperCase()}</span>
      </div>
      <div class="success-info-row">
        <span>📅 Durasi</span>
        <span>${durText}</span>
      </div>
    `;
    
    // Notif warning
    const notif = document.getElementById('notifScreenshot');
    notif.classList.add('warning');
    notif.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <span>SIMPAN BAIK-BAIK! SCREENSHOT BUKTI INI UNTUK LOGIN APLIKASI</span>
    `;
    
    // Sembunyikan contact, tampilkan login
    document.getElementById('contactSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
    
  } else {
    // Tampilkan info pembelian
    infoBox.innerHTML = `
      <div class="success-info-row">
        <span>JENIS PRODUK</span>
        <span>${p.name}</span>
      </div>
      <div class="success-info-row">
        <span>HARGA</span>
        <span class="harga">${formatRupiah(p.price)}</span>
      </div>
    `;
    
    // Notif screenshot
    const notif = document.getElementById('notifScreenshot');
    notif.classList.remove('warning');
    notif.innerHTML = `
      <i class="fas fa-camera"></i>
      <span>SCREENSHOT BUKTI INI UNTUK MENGAMBIL PRODUK NYA</span>
    `;
    
    // Tampilkan contact, sembunyikan login
    document.getElementById('contactSection').style.display = 'block';
    document.getElementById('loginSection').style.display = 'none';
  }
  
  openModal('successModal');
}

function onCloseSuccess() {
  closeModal('successModal');
  
  // Reset state
  selectedKey = null;
  currentOrderId = null;
  pendingUsername = null;
  pendingPassword = null;
  currentProductType = null;
  
  // Reset UI
  renderLokalProducts();
  renderApkProducts();
  updateBottomBar();
  updateCartBadge();
}

// ═══════════════════════════════════════════════════════════════
// MODAL HELPERS
// ═══════════════════════════════════════════════════════════════
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal saat klik overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      const id = overlay.id;
      if (id === 'detailModal' || id === 'accountModal') {
        closeModal(id);
      }
    }
  });
});

// Cleanup saat tab ditutup
window.addEventListener('beforeunload', () => {
  stopPolling();
});