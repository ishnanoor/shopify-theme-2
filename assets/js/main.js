/**
 * AURA BOTANICA — LUXURY BOTANICAL SKINCARE
 * Interactive Shopify Storefront Core Application
 */

// --- Asset Resolver for Shopify & Local Environments ---
function getAsset(name, fallbackPath) {
  if (typeof window !== "undefined" && window.AURA_ASSETS && window.AURA_ASSETS[name]) {
    return window.AURA_ASSETS[name];
  }
  return fallbackPath;
}

// --- Product Catalog Database ---
const PRODUCTS = [
  {
    id: "serum-01",
    name: "Restorative Botanical Serum",
    subtitle: "Rose & Botanical Blend",
    category: "serums",
    categoryLabel: "Oils & Serums",
    price: 68.00,
    comparePrice: 82.00,
    volume: "30ml / 1.0 fl oz",
    badge: "Bestseller",
    badgeType: "bestseller",
    rating: 4.9,
    reviewsCount: 342,
    get image() { return getAsset("heroEditorial", "assets/hero-editorial.jpg"); },
    actives: "Rose Damascena • Botanical Squalane • Niacinamide",
    description: "An elixir of pure cold-pressed organic botanicals formulated to restore skin barrier density, visibly reverse dehydration, and awaken an undeniable lit-from-within glow.",
    skinTypes: ["dry", "combination", "sensitive", "mature"],
    benefits: [
      "96% observed deeply nourished & plumper skin within 48 hours",
      "Reinforces cellular moisture barrier with biomimetic plant lipids",
      "Pure floral distillation with zero water dilution"
    ],
    ingredients: "Organic Rosa Damascena Flower Water, Olive Squalane, Niacinamide (Vitamin B3), Sodium Hyaluronate, Rosehip Fruit Extract, Camellia Sinensis Leaf Extract."
  },
  {
    id: "oil-02",
    name: "Rose & Rosehip Facial Oil",
    subtitle: "Cold-Pressed Radiant Glow Oil",
    category: "serums",
    categoryLabel: "Oils & Serums",
    price: 54.00,
    comparePrice: 65.00,
    volume: "30ml / 1.0 fl oz",
    badge: "Award Winner",
    badgeType: "award",
    rating: 4.95,
    reviewsCount: 218,
    get image() { return getAsset("rosehipOil", "assets/rosehip-oil.jpg"); },
    actives: "Rosa Canina Seed • Jojoba Gold • Vitamin E",
    description: "A silky, fast-absorbing botanical nectar that seals in potent hydration, neutralizes free radicals, and delivers an instant luminous satin finish without greasiness.",
    skinTypes: ["dry", "combination", "normal"],
    benefits: [
      "Rich in natural trans-retinoic acid for gentle cellular renewal",
      "Non-comedogenic formula that harmonizes skin's sebum production",
      "Packaged in UV-protective amber glass with dropper"
    ],
    ingredients: "100% Cold-Pressed Organic Rosa Canina (Rosehip) Seed Oil, Simmondsia Chinensis (Jojoba) Oil, Helianthus Annuus Seed Oil, Tocopherol (Natural Vitamin E)."
  },
  {
    id: "cream-03",
    name: "Hydrating Rose Face Cream",
    subtitle: "Deep Moisture Soufflé",
    category: "moisturizers",
    categoryLabel: "Moisturizers",
    price: 58.00,
    comparePrice: 70.00,
    volume: "50ml / 1.7 oz",
    badge: "Customer Favorite",
    badgeType: "sale",
    rating: 4.88,
    reviewsCount: 189,
    get image() { return getAsset("roseCream", "assets/rose-cream.jpg"); },
    actives: "Rosehip Oil • Organic Aloe • Shea Butter",
    description: "An artisan whipped cream infused with cold-pressed rosehip and bio-fermented aloe vera. Melts instantly onto skin to lock in 24-hour dewiness and calm redness.",
    skinTypes: ["dry", "sensitive", "normal"],
    benefits: [
      "Clinical-grade 24-hour hydration lock without heaviness",
      "Naturally rich in omegas 3, 6, and 9 for barrier resilience",
      "Sustainable frosted glass jar with handcrafted bamboo cap"
    ],
    ingredients: "Aloe Barbadensis Leaf Juice, Rosa Canina Fruit Oil, Butyrospermum Parkii (Shea) Butter, Cetearyl Olivate, Vegetable Glycerin, Rosa Centifolia Flower Extract."
  },
  {
    id: "mist-04",
    name: "Balancing Green Tea Face Mist",
    subtitle: "Antioxidant Hydrating Elixir",
    category: "mists",
    categoryLabel: "Toning Mists",
    price: 38.00,
    comparePrice: 45.00,
    volume: "100ml / 3.4 fl oz",
    badge: "Clean Beauty Pick",
    badgeType: "bestseller",
    rating: 4.85,
    reviewsCount: 147,
    get image() { return getAsset("greenTeaMist", "assets/green-tea-mist.jpg"); },
    actives: "Green Tea Polyphenols • Botanical Hyaluronan",
    description: "A micro-fine refreshing mist powered by shaded organic green tea leaves and botanical humectants. Instantly resets pH balance, refines pores, and revives tired skin.",
    skinTypes: ["oily", "combination", "sensitive", "acne-prone"],
    benefits: [
      "Defends against environmental pollutants and oxidative stress",
      "Calms irritation and visibly minimizes enlarged pores",
      "Ultra-fine aerosol-free atomizer for an enveloping cloud of hydration"
    ],
    ingredients: "Camellia Sinensis (Green Tea) Leaf Distillate, Hamamelis Virginiana Water, Sodium Hyaluronate, Rosmarinus Officinalis Extract, Radish Root Ferment Filtrate."
  },
  {
    id: "bundle-05",
    name: "The Complete Radiance Ritual Set",
    subtitle: "Full 4-Step Botanical Regimen + Linen Pouch",
    category: "bundles",
    categoryLabel: "Curated Bundles",
    price: 175.00,
    comparePrice: 218.00,
    volume: "Full 4-Piece Suite",
    badge: "Save 20%",
    badgeType: "sale",
    rating: 5.0,
    reviewsCount: 420,
    get image() { return getAsset("promoFlatlay", "assets/promo-flatlay.jpg"); },
    actives: "Full Spectrum Botanical Synergy",
    description: "The complete artisanal collection in full sizes: Restorative Serum, Rosehip Oil, Hydrating Rose Cream, and Green Tea Mist, packaged in our keepsake organic cotton pouch.",
    skinTypes: ["all", "dry", "combination", "sensitive"],
    benefits: [
      "Comprehensive morning & evening botanical skincare routine",
      "Saves $43 vs purchasing individual products",
      "Includes complimentary organic unbleached canvas travel bag"
    ],
    ingredients: "Includes full formulations of all 4 certified organic Aura Botanica creations."
  }
];

// --- Currency Conversion Rates ---
const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, format: (amount) => `$${amount.toFixed(2)}` },
  EUR: { symbol: "€", rate: 0.92, format: (amount) => `€${(amount * 0.92).toFixed(2)}` },
  GBP: { symbol: "£", rate: 0.79, format: (amount) => `£${(amount * 0.79).toFixed(2)}` },
  PKR: { symbol: "₨", rate: 278.0, format: (amount) => `₨ ${(amount * 278.0).toLocaleString('en-US', {maximumFractionDigits: 0})}` },
  CAD: { symbol: "C$", rate: 1.36, format: (amount) => `C$${(amount * 1.36).toFixed(2)}` }
};

// --- Application State ---
const State = {
  currentCurrency: "USD",
  cart: [],
  wishlist: new Set(),
  activeFilter: "all",
  freeShippingGoal: 75.00, // USD threshold
  selectedQuickViewProduct: null
};

// --- Storage Management ---
function saveState() {
  try {
    localStorage.setItem("aurabotanica_cart", JSON.stringify(State.cart));
    localStorage.setItem("aurabotanica_wishlist", JSON.stringify([...State.wishlist]));
    localStorage.setItem("aurabotanica_currency", State.currentCurrency);
  } catch (e) {
    console.warn("Storage not available:", e);
  }
}

function loadState() {
  try {
    const savedCart = localStorage.getItem("aurabotanica_cart");
    const savedWishlist = localStorage.getItem("aurabotanica_wishlist");
    const savedCurrency = localStorage.getItem("aurabotanica_currency");

    if (savedCart) State.cart = JSON.parse(savedCart);
    if (savedWishlist) State.wishlist = new Set(JSON.parse(savedWishlist));
    if (savedCurrency && CURRENCIES[savedCurrency]) State.currentCurrency = savedCurrency;
  } catch (e) {
    console.warn("Failed to load saved state:", e);
  }
}

// --- Format Currency Helper ---
function formatPrice(amountInUSD) {
  const curr = CURRENCIES[State.currentCurrency] || CURRENCIES.USD;
  return curr.format(amountInUSD);
}

// --- Render Product Catalog ---
function renderProductGrid() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const filtered = State.activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === State.activeFilter);

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = State.wishlist.has(product.id);
    return `
      <article class="product-card" data-id="${product.id}" data-category="${product.category}">
        <div class="product-image-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="product-badge ${product.badgeType}">${product.badge}</span>
          <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}', event)" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                  aria-label="Wishlist">
            <svg width="18" height="18" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
          <div class="product-quick-view-overlay">
            <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Quick View
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-category-row">
            <span class="product-category">${product.categoryLabel}</span>
            <span class="product-volume">${product.volume}</span>
          </div>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-key-actives">${product.actives}</p>
          <div class="product-rating">
            <div class="rating-stars">
              ${'★'.repeat(5)}
            </div>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>
          <div class="product-bottom-row">
            <div class="product-prices">
              <span class="price-current">${formatPrice(product.price)}</span>
              ${product.comparePrice ? `<span class="price-compare">${formatPrice(product.comparePrice)}</span>` : ''}
            </div>
            <button class="btn-add-to-cart" onclick="addToCart('${product.id}')">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add to Bag
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// --- Cart Operations ---
function addToCart(productId, quantity = 1, options = {}) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = State.cart.findIndex(
    item => item.id === productId && item.isSubscription === !!options.isSubscription
  );

  if (existingItemIndex > -1) {
    State.cart[existingItemIndex].quantity += quantity;
  } else {
    State.cart.push({
      id: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: options.isSubscription ? product.price * 0.85 : product.price,
      image: product.image,
      volume: product.volume,
      isSubscription: !!options.isSubscription,
      quantity: quantity
    });
  }

  saveState();
  updateCartUI();
  showToast(`Added "${product.name}" to your shopping bag.`);
  openCartDrawer();
}

function updateCartQuantity(index, delta) {
  if (!State.cart[index]) return;
  State.cart[index].quantity += delta;
  if (State.cart[index].quantity <= 0) {
    State.cart.splice(index, 1);
  }
  saveState();
  updateCartUI();
}

function removeCartItem(index) {
  if (!State.cart[index]) return;
  const removedName = State.cart[index].name;
  State.cart.splice(index, 1);
  saveState();
  updateCartUI();
  showToast(`Removed "${removedName}" from shopping bag.`);
}

function updateCartUI() {
  const totalItems = State.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalUSD = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update badges
  document.querySelectorAll(".cart-badge").forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "flex" : "none";
  });

  const cartItemsCountEl = document.getElementById("cart-items-count");
  if (cartItemsCountEl) cartItemsCountEl.textContent = `${totalItems} items`;

  // Update Free Shipping Progress Bar
  const meterText = document.getElementById("shipping-meter-text");
  const meterFill = document.getElementById("shipping-progress-fill");
  if (meterText && meterFill) {
    const remaining = State.freeShippingGoal - subtotalUSD;
    if (remaining <= 0 && totalItems > 0) {
      meterText.innerHTML = `🎉 You've unlocked <span>FREE Express Shipping</span>!`;
      meterFill.style.width = "100%";
      meterFill.style.background = "#2D8A4E";
    } else {
      const percentage = Math.min(100, Math.max(0, (subtotalUSD / State.freeShippingGoal) * 100));
      meterText.innerHTML = `Add <span>${formatPrice(Math.max(0, remaining))}</span> more to unlock <strong>FREE Express Shipping</strong>`;
      meterFill.style.width = `${percentage}%`;
      meterFill.style.background = "linear-gradient(90deg, var(--color-sage), var(--color-forest))";
    }
  }

  // Render Cart Body
  const cartBody = document.getElementById("cart-items-body");
  if (cartBody) {
    if (State.cart.length === 0) {
      cartBody.innerHTML = `
        <div class="empty-cart-state">
          <div class="empty-cart-icon">🌿</div>
          <h4 class="empty-cart-text">Your bag is currently empty</h4>
          <p class="empty-cart-sub">Discover our organic botanical rituals formulated to awaken your natural radiance.</p>
          <button class="btn-primary" onclick="closeCartDrawer(); window.location.href='#products';">
            Explore Best Sellers
          </button>
        </div>
      `;
    } else {
      cartBody.innerHTML = State.cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-variant">${item.volume}${item.isSubscription ? ' • Auto-Delivery (-15%)' : ''}</div>
            <div class="cart-item-bottom">
              <div class="quantity-stepper">
                <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
              </div>
              <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
              <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Remove item">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `).join('');

      // Add Cart Upsell recommendation if not already in cart
      const hasMist = State.cart.some(item => item.id === "mist-04");
      if (!hasMist) {
        cartBody.innerHTML += `
          <div class="cart-upsell">
            <div class="cart-upsell-header">Frequently Paired Together</div>
            <div class="cart-upsell-item">
              <img src="${getAsset('greenTeaMist', 'assets/green-tea-mist.jpg')}" alt="Mist" class="cart-upsell-img">
              <div class="cart-upsell-details">
                <div class="cart-upsell-title">Balancing Green Tea Mist</div>
                <div class="cart-upsell-price">${formatPrice(38.00)}</div>
              </div>
              <button class="btn-add-upsell" onclick="addToCart('mist-04')">+ Add</button>
            </div>
          </div>
        `;
      }
    }
  }

  // Update Subtotal & Checkout Button
  const subtotalEl = document.getElementById("cart-subtotal-amount");
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotalUSD);

  const checkoutBtn = document.getElementById("btn-cart-checkout");
  if (checkoutBtn) {
    checkoutBtn.disabled = State.cart.length === 0;
    checkoutBtn.style.opacity = State.cart.length === 0 ? "0.6" : "1";
    checkoutBtn.style.pointerEvents = State.cart.length === 0 ? "none" : "auto";
  }
}

// --- Cart Drawer Opening / Closing ---
function openCartDrawer() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("modal-backdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("modal-backdrop").classList.remove("active");
  document.body.style.overflow = "";
}

// --- Quick View Modal ---
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  State.selectedQuickViewProduct = product;

  const modal = document.getElementById("quick-view-modal");
  const backdrop = document.getElementById("modal-backdrop");
  if (!modal || !backdrop) return;

  modal.innerHTML = `
    <button class="modal-close-btn" onclick="closeQuickView()" aria-label="Close modal">✕</button>
    <div class="quick-view-content">
      <div class="modal-image-col">
        <img src="${product.image}" alt="${product.name}" class="modal-main-img">
      </div>
      <div class="modal-details-col">
        <span class="modal-tag">${product.categoryLabel} • ${product.volume}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-rating-row">
          <div class="rating-stars">${'★'.repeat(5)}</div>
          <span class="rating-count">${product.rating} (${product.reviewsCount} verified reviews)</span>
        </div>
        <div class="modal-price-box">
          <span class="modal-price-now" id="qv-price-display">${formatPrice(product.price)}</span>
          ${product.comparePrice ? `<span class="modal-price-was">${formatPrice(product.comparePrice)}</span>` : ''}
        </div>
        <p class="modal-desc">${product.description}</p>
        
        <div class="purchase-options">
          <label class="purchase-option-label active" onclick="setPurchaseType(this, false, ${product.price})">
            <div class="option-left">
              <input type="radio" name="purchase_type" value="onetime" checked>
              <span>One-Time Purchase</span>
            </div>
            <strong>${formatPrice(product.price)}</strong>
          </label>
          <label class="purchase-option-label" onclick="setPurchaseType(this, true, ${product.price})">
            <div class="option-left">
              <input type="radio" name="purchase_type" value="subscription">
              <span>Subscribe & Save</span>
              <span class="option-save-badge">Save 15%</span>
            </div>
            <strong>${formatPrice(product.price * 0.85)}</strong>
          </label>
        </div>

        <div class="modal-cta-row">
          <button class="btn-primary" style="flex-grow: 1;" onclick="addQuickViewToCart('${product.id}')">
            Add to Bag — <span id="qv-btn-price">${formatPrice(product.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

let quickViewIsSubscription = false;

function setPurchaseType(element, isSubscription, basePrice) {
  document.querySelectorAll(".purchase-option-label").forEach(el => el.classList.remove("active"));
  element.classList.add("active");
  quickViewIsSubscription = isSubscription;

  const currentPrice = isSubscription ? basePrice * 0.85 : basePrice;
  const priceDisplay = document.getElementById("qv-price-display");
  const btnPriceDisplay = document.getElementById("qv-btn-price");

  if (priceDisplay) priceDisplay.textContent = formatPrice(currentPrice);
  if (btnPriceDisplay) btnPriceDisplay.textContent = formatPrice(currentPrice);
}

function addQuickViewToCart(productId) {
  addToCart(productId, 1, { isSubscription: quickViewIsSubscription });
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  const backdrop = document.getElementById("modal-backdrop");
  if (modal) modal.classList.remove("open");
  if (backdrop && !document.getElementById("cart-drawer").classList.contains("open")) {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- Wishlist Toggle ---
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  if (State.wishlist.has(productId)) {
    State.wishlist.delete(productId);
    showToast("Removed item from your wishlist.");
  } else {
    State.wishlist.add(productId);
    showToast("Saved item to your wishlist ❤️");
  }
  saveState();
  updateWishlistUI();
  renderProductGrid();
}

function updateWishlistUI() {
  const count = State.wishlist.size;
  document.querySelectorAll(".wishlist-badge").forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  });
}

// --- Live Search ---
function openSearchModal() {
  const searchModal = document.getElementById("search-modal");
  const backdrop = document.getElementById("modal-backdrop");
  searchModal.classList.add("open");
  backdrop.classList.add("active");
  document.getElementById("search-input").focus();
  document.body.style.overflow = "hidden";
}

function closeSearchModal() {
  document.getElementById("search-modal").classList.remove("open");
  document.getElementById("modal-backdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function handleSearch(query) {
  const resultsContainer = document.getElementById("search-results");
  if (!query || query.trim() === "") {
    resultsContainer.innerHTML = "";
    return;
  }
  const clean = query.toLowerCase().trim();
  const matched = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(clean) || 
    p.category.toLowerCase().includes(clean) || 
    p.actives.toLowerCase().includes(clean) ||
    p.description.toLowerCase().includes(clean)
  );

  if (matched.length === 0) {
    resultsContainer.innerHTML = `<p style="padding: 1.5rem; text-align: center; color: var(--color-text-muted);">No botanical formulas found matching "${query}".</p>`;
    return;
  }

  resultsContainer.innerHTML = matched.map(p => `
    <div class="search-result-item" onclick="closeSearchModal(); openQuickView('${p.id}');">
      <img src="${p.image}" alt="${p.name}" class="search-res-img">
      <div style="flex-grow: 1;">
        <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--color-forest);">${p.name}</h4>
        <span style="font-size: 0.75rem; color: var(--color-text-muted);">${p.volume} • ${p.categoryLabel}</span>
      </div>
      <span style="font-weight: 700; color: var(--color-forest);">${formatPrice(p.price)}</span>
    </div>
  `).join('');
}

// --- Simulated Shopify Checkout Modal ---
function openCheckoutModal() {
  closeCartDrawer();
  const modal = document.getElementById("checkout-modal");
  const backdrop = document.getElementById("modal-backdrop");
  const summaryBox = document.getElementById("checkout-summary-box");

  const subtotalUSD = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeShip = subtotalUSD >= State.freeShippingGoal;
  const shippingCost = isFreeShip ? 0.00 : 8.00;
  const grandTotalUSD = subtotalUSD + shippingCost;

  summaryBox.innerHTML = `
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
      <span style="color: var(--color-text-muted);">Items (${State.cart.reduce((s, i) => s + i.quantity, 0)}):</span>
      <strong>${formatPrice(subtotalUSD)}</strong>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.88rem;">
      <span style="color: var(--color-text-muted);">Shipping:</span>
      <strong>${isFreeShip ? '<span style="color: #008060;">FREE</span>' : formatPrice(shippingCost)}</strong>
    </div>
    <div style="display: flex; justify-content: space-between; padding-top: 0.75rem; border-top: 1px solid var(--color-border); font-size: 1.15rem; font-weight: 700; color: var(--color-forest);">
      <span>Total:</span>
      <span>${formatPrice(grandTotalUSD)}</span>
    </div>
  `;

  modal.classList.add("open");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal").classList.remove("open");
  document.getElementById("modal-backdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function completeCheckoutOrder(event) {
  event.preventDefault();
  const btn = event.target.querySelector("button[type='submit']");
  btn.innerHTML = `<span class="spinner"></span> Processing Securely with Shopify Pay...`;
  btn.disabled = true;

  setTimeout(() => {
    State.cart = [];
    saveState();
    updateCartUI();
    closeCheckoutModal();
    showToast("🎉 Order Confirmed! Thank you for ordering from Aura Botanica. Confirmation email dispatched.");
  }, 1800);
}

// --- Interactive Skin Routine Quiz ---
const QuizState = {
  step: 1,
  skinType: "dry",
  concern: "glow",
  texture: "rich"
};

function selectQuizOption(step, key, value, element) {
  QuizState[key] = value;
  element.parentElement.querySelectorAll(".quiz-option-card").forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
}

function nextQuizStep() {
  if (QuizState.step < 3) {
    document.getElementById(`quiz-step-${QuizState.step}`).style.display = "none";
    QuizState.step++;
    document.getElementById(`quiz-step-${QuizState.step}`).style.display = "block";
    updateQuizProgress();
  } else {
    // Generate results
    showQuizResults();
  }
}

function prevQuizStep() {
  if (QuizState.step > 1) {
    document.getElementById(`quiz-step-${QuizState.step}`).style.display = "none";
    QuizState.step--;
    document.getElementById(`quiz-step-${QuizState.step}`).style.display = "block";
    updateQuizProgress();
  }
}

function updateQuizProgress() {
  const percent = QuizState.step === 1 ? 33 : (QuizState.step === 2 ? 66 : 100);
  document.getElementById("quiz-progress-bar").style.width = `${percent}%`;

  [1, 2, 3].forEach(i => {
    const indicator = document.getElementById(`quiz-indicator-${i}`);
    if (indicator) {
      if (i === QuizState.step) {
        indicator.className = "quiz-step-indicator active";
      } else if (i < QuizState.step) {
        indicator.className = "quiz-step-indicator completed";
      } else {
        indicator.className = "quiz-step-indicator";
      }
    }
  });
}

function showQuizResults() {
  document.getElementById("quiz-step-3").style.display = "none";
  document.getElementById("quiz-step-progress").style.display = "none";
  const resultBox = document.getElementById("quiz-result-box");
  resultBox.style.display = "block";

  // Pick 3 synergistic products
  const rec1 = PRODUCTS.find(p => p.id === "mist-04");
  const rec2 = PRODUCTS.find(p => p.id === "serum-01");
  const rec3 = PRODUCTS.find(p => p.id === "cream-03");

  const recList = document.getElementById("quiz-rec-items");
  recList.innerHTML = `
    <div class="quiz-rec-card">
      <img src="${rec1.image}" alt="${rec1.name}" class="quiz-rec-img">
      <span class="quiz-rec-step">Step 1: Prep & Tone</span>
      <h4 class="quiz-rec-name">${rec1.name}</h4>
      <div class="quiz-rec-price">${formatPrice(rec1.price)}</div>
    </div>
    <div class="quiz-rec-card">
      <img src="${rec2.image}" alt="${rec2.name}" class="quiz-rec-img">
      <span class="quiz-rec-step">Step 2: Treat & Restore</span>
      <h4 class="quiz-rec-name">${rec2.name}</h4>
      <div class="quiz-rec-price">${formatPrice(rec2.price)}</div>
    </div>
    <div class="quiz-rec-card">
      <img src="${rec3.image}" alt="${rec3.name}" class="quiz-rec-img">
      <span class="quiz-rec-step">Step 3: Seal & Nourish</span>
      <h4 class="quiz-rec-name">${rec3.name}</h4>
      <div class="quiz-rec-price">${formatPrice(rec3.price)}</div>
    </div>
  `;
}

function addFullQuizRoutineToCart() {
  addToCart("mist-04", 1);
  addToCart("serum-01", 1);
  addToCart("cream-03", 1);
  showToast("Added full custom 3-Step Routine to your bag with 15% discount applied!");
  openCartDrawer();
}

function resetQuiz() {
  QuizState.step = 1;
  document.getElementById("quiz-result-box").style.display = "none";
  document.getElementById("quiz-step-progress").style.display = "flex";
  document.getElementById("quiz-step-1").style.display = "block";
  updateQuizProgress();
}

// --- Toast Notification Helper ---
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span>🌿</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// --- Currency Selector Change ---
function changeCurrency(newCurrency) {
  if (!CURRENCIES[newCurrency]) return;
  State.currentCurrency = newCurrency;
  saveState();
  renderProductGrid();
  updateCartUI();
  showToast(`Currency updated to ${newCurrency} (${CURRENCIES[newCurrency].symbol})`);
}

// --- Mobile Navigation ---
function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("modal-backdrop");
  if (drawer.classList.contains("open")) {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    drawer.classList.add("open");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// --- Newsletter Subscription ---
function handleNewsletter(event) {
  event.preventDefault();
  const input = event.target.querySelector("input[type='email']");
  const email = input.value.trim();
  if (!email) return;

  input.value = "";
  showToast(`Welcome to the Circle! Use code BOTANICA15 at checkout for 15% off.`);
}

// --- App Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  loadState();

  // Set currency selector initial value
  const currencySelect = document.getElementById("currency-selector");
  if (currencySelect) currencySelect.value = State.currentCurrency;

  // Render products
  renderProductGrid();
  updateCartUI();
  updateWishlistUI();

  // Category Filter Tabs
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      State.activeFilter = btn.dataset.category;
      renderProductGrid();
    });
  });

  // Header Scroll Shadow
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Global Backdrop Click to Close All Modals
  document.getElementById("modal-backdrop").addEventListener("click", () => {
    closeCartDrawer();
    closeQuickView();
    closeSearchModal();
    closeCheckoutModal();
    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    document.body.style.overflow = "";
  });
});
