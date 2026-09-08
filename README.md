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
- `script.js` — product data, countdown timer, mobile nav, scroll animations

## How it integrates with Shopify

You don't need any API keys for this to work — **"Shop Now" buttons** open
`ndshirt.com/collections/all` in a new tab (see `SHOP_ALL_URL` in
`script.js`) — shoppers land on your real Shopify catalog to pick a design,
size, and check out exactly as they do today. Nothing about your existing
checkout changes.

### The current lineup (3 of 9 listings wired in)

`PRODUCTS` in `script.js` holds the catalog shown on the site. You said
there are **9 shirts total** in the collection you're promoting, but only
**3 have confirmed photos and copy so far** (from the screenshots you
uploaded):

| Product | Price | Status |
|---|---|---|
| Leave No Doubt (White) | $33.98 | ✅ live — flagship/hero design |
| Leave No Doubt (Navy Blue) | $33.98 | ✅ live |
| Leave No Doubt (Black, chest script) | $33.98 | ✅ live |
| 6 more listings | — | ⏳ waiting on photos + price/name for each |

To add one of the remaining 6:

1. Upload the product photo (or a screenshot of its Shopify product page,
   same as the first 3) to this repo.
2. Crop/resize it the same way as the existing three (trim to just the
   shirt, ~900px on the long side, save as `.webp` in `images/`).
3. Add one object to the `PRODUCTS` array at the top of `script.js` with
   its `name`, `variant`, `price`, and `image` path — nothing else in the
   file needs to change, the grid re-renders automatically from that list.

### Product photos

The 3 live listings were cropped from full-page screenshots of the actual
Shopify product pages (`1.jpg`, `3.jpg`, `4.jpg` in the repo root — trimmed
to just the shirt, resized to ~900px, saved as `.webp` in `images/`). The
header logo/favicon (`images/logo-freeman-shirt.png`,
`images/favicon-freeman-shirt.png`) were cropped from the same screenshots'
circular "ND" mark and are naturally a bit soft since the source is small
— swap in a higher-resolution logo export if you have one.

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

- **Sale banner/name**: currently "Fall Camp Sale," matching what's live
  on ndshirt.com right now. If the real sale changes name or ends, update
  the announcement bar text in `index.html`, the countdown label, the FAQ
  question, and the sticky mobile buy bar (4 places total).
- **Sale end date**: the countdown always targets "this Friday, 11:59pm
  local time." If your sale end date is fixed regardless of day-of-week,
  replace the logic in `initCountdown()` in `script.js` with a hard-coded
  `new Date('2026-XX-XXT23:59:59')`-style target.
- **Colors/fonts**: all in the `:root` variables at the top of `styles.css`.
- **Legal**: a small disclaimer is included in the footer/FAQ noting this
  is an independent fan tribute, not officially licensed by the University
  of Notre Dame — worth keeping given ND's trademarks.
