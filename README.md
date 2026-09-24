# Leave No Doubt — Marcus Freeman Tribute Collection

A standalone marketing/landing site for the Marcus Freeman "Leave No Doubt"
tribute t-shirt line, built to sit **alongside** your existing Shopify
store at [ndshirt.com](https://ndshirt.com) — it spotlights the collection
and hands off to Shopify for actual size selection, cart, and checkout.

This is a sibling site to [theloushirt.com](https://theloushirt.com) (the
Lou Holtz tribute collection) — same structure, same plain HTML/CSS/JS, no
build step, no framework, no dependencies. It was seeded directly from that
site's template.

## Files

- `index.html` — page structure/content
- `styles.css` — all styling (navy/gold ND palette, responsive)
- `script.js` — product data, mobile nav, scroll animations

## How it integrates with Shopify

You don't need any API keys for this to work — **"Shop Now" buttons** open
`ndshirt.com/collections/all` in a new tab (see `SHOP_ALL_URL` in
`script.js`) — shoppers land on your real Shopify catalog to pick a design,
size, and check out exactly as they do today. Nothing about your existing
checkout changes.

### The current lineup (all 9 listings wired in)

`PRODUCTS` in `script.js` holds the full catalog shown on the site — all
9 "Leave No Doubt" colorways/designs, matching the complete ndshirt.com
lineup:

| Product | Price | Status |
|---|---|---|
| Leave No Doubt (White) | $21.00 | ✅ live — flagship/hero design |
| Leave No Doubt (Navy Blue) | $21.00 | ✅ live |
| Leave No Doubt (Black, chest script) | $21.00 | ✅ live |
| Leave No Doubt (Forest Green, chest script) | $21.00 | ✅ live |
| Leave No Doubt (Forest Green, shield) | $21.00 | ✅ live |
| Leave No Doubt (Navy Blue, chest script) | $21.00 | ✅ live |
| Leave No Doubt (Navy Blue, shield) | $21.00 | ✅ live |
| Leave No Doubt (Heather Gray) | $21.00 | ✅ live |
| Leave No Doubt (White-Gray) | $21.00 | ✅ live |

Prices last revised 2026-09-24 — the ndshirt.com catalog moved to a flat
$21.00 across the board (matches theloushirt.com's pricing update).

To add a new design/colorway if one launches later:

1. Upload the product photo (or a screenshot of its Shopify catalog/product
   page) to this repo.
2. Crop/resize it the same way as the existing ones (trim to just the
   shirt, ~900px on the long side, save as `.webp` in `images/`).
3. Add one object to the `PRODUCTS` array at the top of `script.js` with
   its `name`, `variant`, `price`, and `image` path — nothing else in the
   file needs to change, the grid re-renders automatically from that list.

### Product photos

The first 3 listings (White, Navy Blue, Black chest script) were cropped
from full-page screenshots of their individual Shopify product pages. The
remaining 6 were cropped directly from a screenshot of the ndshirt.com
catalog grid page instead (smaller source tiles, but still resized to
~900px and clean at the sizes used on this site). The header logo/favicon
(`images/logo-freeman-shirt.png`, `images/favicon-freeman-shirt.png`) were
cropped from a screenshot's circular "ND" mark and are naturally a bit
soft since the source is small — swap in a higher-resolution logo export
if you have one.

## Where to host it

Hosted on **GitHub Pages**, pointed at the custom domain
**thefreemanshirt.com**. The repo already has the `CNAME` file GitHub
Pages needs; the remaining setup is DNS at your registrar — this is the
exact same process used for theloushirt.com:

1. Log into your domain registrar's DNS management for thefreemanshirt.com.
2. Add four **A** records so the bare domain points at GitHub Pages:

   | Type | Name | Points to |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

3. Add one **CNAME** record so `www.thefreemanshirt.com` also works:

   | Type | Name | Points to |
   |---|---|---|
   | CNAME | www | mattlafleur-cle.github.io |

4. Remove/replace any existing A or CNAME record already sitting on `@` or
   `www` (e.g. a registrar's default parking-page record) — only one
   record set per name is allowed. **Watch out for a stray AAAA record**
   on `@` too (some registrars add one by default) — delete it if present,
   it caused exactly this kind of "site won't load" issue on theloushirt.com.
5. Back in GitHub: **Settings → Pages** on this repo should already show
   `thefreemanshirt.com` as the custom domain (from the `CNAME` file). Once
   DNS propagates (minutes to a few hours), it'll show "DNS check
   successful" — then check **Enforce HTTPS** once it becomes available
   (certificate issuance can take a while after DNS passes; this is normal).

DNS changes can take anywhere from a few minutes to 24-48 hours to fully
propagate. Until then, `https://mattlafleur-cle.github.io/freeman/` keeps
working as before.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

- **Colors/fonts**: all in the `:root` variables at the top of `styles.css`.
- **Legal**: a small disclaimer is included in the footer/FAQ noting this
  is an independent fan tribute, not officially licensed by the University
  of Notre Dame — worth keeping given ND's trademarks.
