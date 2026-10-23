# Leave No Doubt: Freeman Tribute Collection Landing Page

A one-page brand landing site for the Marcus Freeman "Leave No Doubt"
tribute t-shirts, served at **thefreemanshirt.com** from GitHub Pages
(deploys from `main`). Shopping happens on the ndshirt.com Shopify store;
this page explains the designs and links to the exact products.

Sibling site: theloushirt.com (`mattlafleur-cle/lou`), same structure.

Plain HTML/CSS/JS. No build step, no framework, no dependencies.

## Files

- `index.html`: all page content, including the static product grid
- `styles.css`: styling (navy/gold palette, responsive, self-hosted fonts)
- `script.js`: mobile menu, scroll reveal, optional click events
- `robots.txt`, `sitemap.xml`, `404.html`: search and error handling
- `fonts/`: Inter and Playfair Display (SIL Open Font License)
- `images/opt/`: optimized, resized images actually used by the page;
  originals in `images/` are kept as sources

## How it integrates with Shopify

- Each product card links to its exact ndshirt.com product page.
- Collection-wide buttons go to `ndshirt.com/collections/marcus-freeman`.
- Outbound links carry `utm_source=thefreemanshirt.com` so Shopify
  Analytics can attribute visits and orders, plus a `data-track` label
  for optional click events (see `script.js`).

### Product-to-destination mapping

Verified against the live ndshirt.com catalog on 2026-10-23.

| Design (page section) | Shopify title | Product URL | Sizes |
|---|---|---|---|
| Portrait Poster | Leave No Doubt (White) | `/products/marcus-leave-no-doubt-white-2026` | XS to 5XL |
| Portrait Poster | Leave No Doubt (Heather gray) | `/products/marcus-leave-no-doubt-heather-gray` | XS to 5XL |
| Sideline Portrait | Leave No Doubt (Navy blue) | `/products/marcus-leave-no-doubt-navy-blue` | XS to 5XL |
| Sideline Portrait | Leave No Doubt (White-gray) | `/products/marcus-leave-no-doubt-white` | XS to 5XL |
| 2026 Script | Leave No Doubt (Black chest) | `/products/leave-no-doubt-black-chest` | XS to 5XL |
| 2026 Script | Leave No Doubt (Forest green chest) | `/products/leave-no-doubt-forest-green-chest` | S to 4XL |
| 2026 Script | Leave No Doubt (Navy blue chest) | `/products/leave-no-doubt-navy-blue-chest` | XS to 5XL |
| Chest Shield | Leave No Doubt (Forest green shield) | `/products/leave-no-doubt-forest-green-shield` | S to 4XL |
| Chest Shield | Leave No Doubt (Navy blue shield) | `/products/leave-no-doubt-navy-blue-shield` | XS to 5XL |

Note the handle `marcus-leave-no-doubt-white` is the **White-gray**
product; the plain **White** product is `...-white-2026`.

Every product uses the same size price ladder: XS and S $21, M $24,
L to 2XL $26, 3XL and up $29. If Shopify prices or sizes change, update
the cards, the price note, the FAQ, and the meta description.

### Adding a design or colorway

Copy one `<article class="product-card">` block in `index.html` into the
right design group and update its image, alt text, color line, sizes,
and product URL. Save 400px and full-width WebP versions of the photo
into `images/opt/` and keep the `width`/`height` attributes.

## Hosting

GitHub Pages with the custom domain in `CNAME`; DNS for
thefreemanshirt.com points at GitHub Pages. `www` and `http` redirect to
`https://thefreemanshirt.com/`.

## Local preview

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
