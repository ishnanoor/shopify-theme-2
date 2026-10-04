# 🌿 Aura Botanica — Luxury Botanical Skincare Shopify Store & Theme

> An artisanal, high-conversion e-commerce storefront & Shopify theme designed for luxury organic skincare, clean beauty, and herbal wellness brands.

![Aura Botanica Hero](assets/images/hero-editorial.jpg)

---

## ✨ Features & Architecture

- **Editorial Luxury Design**: Custom warm earthy palette (`#1F2E24` Forest Green, `#FAF7F2` Alabaster, `#C67D5A` Terracotta, and `#C2A062` Brushed Gold) paired with editorial serif typography.
- **Shopify Slide-Out Cart Drawer**:
  - Real-time dynamic Free Shipping Progress Meter ($75 threshold).
  - In-cart quantity stepper (+ / -), instant item removal, and auto-delivery badges.
  - In-cart dynamic upsell widget (e.g., Balancing Green Tea Face Mist).
  - Subtotal calculation with local storage persistence.
- **Interactive 3-Step Skin Routine Quiz**: 
  - Customers diagnose skin type, primary concern, and desired finish.
  - Dynamically prescribes a personalized 3-step ritual with a 1-click **Add Full Routine to Bag** button (with a 15% bundle discount).
- **Multi-Currency Converter**: Instant currency recalculation for **USD ($)**, **EUR (€)**, **GBP (£)**, **PKR (₨)**, and **CAD (C$)**.
- **Quick View Modal**: Inspect formulation details, volume sizes, ingredients, and toggle **One-Time Purchase** vs. **Subscribe & Save 15%**.
- **Simulated Shopify Pay Express Checkout**: 256-bit encrypted checkout modal with shipping address inputs and order confirmation toast.
- **Live Search Modal**: Real-time keyword filter across product titles, descriptions, and active ingredients.
- **Botanical Ingredients Transparency Matrix**: Detailed breakdown of key active botanicals (Damascus Rose, Rosehip Oil, Green Tea Polyphenols, Biomimetic Squalane).
- **Verified Customer Reviews Wall**: Social proof cards featuring verified buyer badges.
- **100% Responsive**: Optimized for mobile devices, tablets, and ultra-wide desktop monitors.

---

## 📂 Repository Structure

```text
├── index.html                     # Full interactive standalone storefront preview
├── aura-botanica-shopify-theme.zip # Ready-to-upload Shopify Theme zip archive
├── assets/
│   ├── css/
│   │   └── style.css              # Custom design system & responsive styling
│   ├── js/
│   │   └── main.js                # Core cart state, currency converter, quiz & modal logic
│   └── images/
│       ├── hero-editorial.jpg     # Editorial hero banner image
│       ├── founder-laboratory.jpg # Founder formulation laboratory photo
│       ├── promo-flatlay.jpg      # Flatlay of full ritual & sets
│       ├── rosehip-oil.jpg        # Product solo: Rose & Rosehip Facial Oil
│       ├── rose-cream.jpg         # Product solo: Hydrating Rose Face Cream
│       └── green-tea-mist.jpg     # Product solo: Balancing Green Tea Face Mist
└── shopify-liquid-theme/          # Shopify Liquid Theme source files
    ├── config/
    │   └── settings_schema.json
    ├── layout/
    │   └── theme.liquid
    ├── sections/
    │   ├── header.liquid
    │   └── footer.liquid
    └── snippets/
        └── cart-drawer.liquid
```

---

## 🚀 How to Run Locally

Simply double-click `index.html` or open it with any web browser:

```bash
# Windows PowerShell
Start-Process index.html
```

---

## 🛍️ How to Install on Shopify

1. Download or locate `aura-botanica-shopify-theme.zip` from this repository.
2. In your **Shopify Admin** dashboard, go to:
   > **Online Store** ➔ **Themes**
3. Under the **Theme library** section, click **Add theme** ➔ **Upload zip file**.
4. Select `aura-botanica-shopify-theme.zip` and click **Upload file**.
5. Click **Actions** ➔ **Publish** once uploaded!

---

## 📄 License
MIT License. Handcrafted for Aura Botanica.
