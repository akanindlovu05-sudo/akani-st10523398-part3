# Bean & Bake Café Website

**Module:** Web Development (Introduction) – WEDE5020
**Student:** Akani Mundlovu
**Student number:** ST10523398
**Repository:** _(paste your GitHub repository link here)_

---

## 1. About the Project

Bean & Bake Café is a fictional neighbourhood bakery and coffee shop in Johannesburg, offering
artisanal bread, custom cakes, pastries and handcrafted coffee. This website was built as the
Portfolio of Evidence for WEDE5020, giving the café an online presence where visitors can read
about the business, browse the product catalog, submit a custom order enquiry, and find contact
and location details.

### Website Goals and Objectives

- Showcase the café's daily bakes and custom cake service to attract new customers.
- Make it easy to request a custom cake or bulk order through a simple enquiry form.
- Provide clear operating hours, location and contact details.
- Present a warm, appetising and consistent visual identity across every page.

---

## 2. Website Structure

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero banner, welcome message, why choose us, specialty highlights, promotion |
| About Us | `about.html` | Our story, history, mission, vision and the team |
| Products | `products.html` | Full catalog of cakes, cupcakes, pastries, bread, cookies and coffee |
| Enquiry | `enquiry.html` | Custom order / general enquiry form and how custom orders work |
| Contact | `contact.html` | Visit details, operating hours, phone/email and a map |

### File Structure

```
bean-and-bake-cafe/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── favicon.png
│   ├── logo-full.png
│   ├── icon-cake.svg
│   ├── icon-cupcake.svg
│   ├── icon-croissant.svg
│   ├── icon-bread.svg
│   ├── icon-cookies.svg
│   ├── icon-coffee.svg
│   ├── icon-fresh.svg
│   ├── icon-local.svg
│   ├── icon-custom.svg
│   ├── icon-pin.svg
│   ├── icon-clock.svg
│   └── icon-phone.svg
├── screenshots/
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
└── README.md
```

---

## 3. Part 2 – CSS Styling and Responsive Design

Part 2 focused on the visual design of the website. All five pages are now linked to one external
stylesheet (`css/style.css`), so the whole site shares one visual identity. Every inline `style="..."`
attribute from Part 1 has been removed and rewritten as proper CSS classes.

### 3.1 External Stylesheet

The stylesheet is organised into 19 numbered, commented sections (reset, variables, base styles,
layout helpers, buttons, header/navigation, hero, cards, forms, footer, media queries and so on),
which keeps it easy to navigate and maintain. Colours and fonts are declared once as CSS custom
properties in `:root` and reused everywhere, which keeps the number of individual selectors down.

### 3.2 Colour Scheme

The palette was taken directly from the Bean & Bake Café logo, so the website and the brand mark
feel like one product.

| Variable | Hex | Used for |
|----------|-----|----------|
| `--brown-dark` | `#3b2313` | Footer, promotions band, headings |
| `--brown` | `#7a4a2a` | Secondary button hover, icon accents |
| `--orange` | `#c97a3f` | Primary buttons, links, active nav link |
| `--orange-bright` | `#e0954f` | Decorative rings, underlines, hover accents |
| `--cream` | `#f7ecd9` | Hero background, tag pills, hover backgrounds |
| `--cream-soft` | `#fbf4e7` | Alternating section backgrounds, form panel |
| `--ink` | `#2e1b10` | Heading text |
| `--body-text` | `#5c4636` | Body text |

### 3.3 Typography

- **Font:** Poppins (already linked from Google Fonts in Part 1), weights 400/600/700, with
  `Segoe UI` and Tahoma as fallbacks if the font fails to load.
- A type scale is applied with `rem` units: `h1` 2.6rem, `h2` 1.9rem, `h3` 1.15rem, body 1rem.
- `line-height` of 1.65 on body text keeps long paragraphs easy to read.
- Paragraph width is limited with `max-width` (for example `62ch`) so text doesn't stretch too
  wide on large screens.

### 3.4 Layout

- **Flexbox** is used for the header bar, the navigation list, hero buttons and the enquiry
  page's process steps.
- **CSS Grid** is used for the hero split layout, the card grids (features, specialties, product
  catalog, contact details), the about page's mission/vision/history cards, the story split
  section, the form layout and the footer columns.
- Spacing is handled with consistent padding and `gap` values instead of manual margins on every
  element.

### 3.5 Interactive States (Pseudo-classes)

| Element | `:hover` | `:focus` | `:active` |
|---------|----------|----------|-----------|
| Navigation links | Cream background, orange text | Orange outline | Dark brown background |
| Primary/secondary buttons | Background darkens or fills in | Brown outline offset from the button | Button shifts down 2px |
| Cards | Lifts up, shadow appears, top border darkens | – | – |
| Form fields | Border changes to orange | Brown border with a soft glow | – |
| Menu button (mobile) | Border changes to orange | Orange outline | Turns solid brown while the menu is open |
| Footer/contact links | Colour change and underline | Visible outline | – |

Focus states were kept clearly visible so the site can still be used with a keyboard.

### 3.6 Responsive Design

| Breakpoint | Screen | What changes |
|-----------|--------|--------------|
| Default | Desktop (above 992px) | Multi-column grids, horizontal navigation, split hero and story sections |
| `max-width: 992px` | Tablet | Root font size drops to 95%, hero and story sections become single column with the image reordered above the text, three/four-column grids become two columns, the enquiry form stacks, map height reduces |
| `max-width: 600px` | Mobile | Root font size drops to 90%, headings scale down, the navigation collapses into a menu button that opens a drop-down menu, every grid becomes a single column, buttons become full width, decorative rings behind the logo images are hidden, map height reduces again |

Relative units are used throughout: `rem` for font sizes and spacing, `%` for widths, `ch` for
paragraph line length. Every image inherits `max-width: 100%; height: auto;` from the CSS reset,
so nothing overflows its container on a small screen.

### 3.7 Mobile Navigation Menu

The navigation collapses into a menu button (the three-line "hamburger" icon) on screens narrower
than 600px, instead of stacking all five links under the logo. It is built with HTML and CSS only,
using a hidden checkbox as the switch, so it does not depend on JavaScript:

```html
<input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Open the navigation menu">
<label for="nav-toggle" class="nav-button" title="Menu">
  <span></span><span></span><span></span>
</label>
```

```css
nav {
  display: none;
  position: absolute;
  top: calc(100% + 0.7rem);
  left: 0;
  right: 0;
}

.nav-toggle:checked ~ nav {
  display: block;
}
```

Tapping the button drops the menu down over the page instead of pushing content out of the way,
and the checkbox can be reached and toggled with the keyboard, so it stays usable without a mouse.

---

## 4. Testing Evidence

The website was tested in Google Chrome using the browser Developer Tools (F12 → Toggle device
toolbar) at the following screen sizes:

- **Desktop:** 1440 × 900
- **Tablet:** iPad Air (820 × 1180)
- **Mobile:** iPhone SE (375 × 667)

### Desktop View

![Desktop view of the home page](screenshots/desktop.png)

### Tablet View

![Tablet view of the home page](screenshots/tablet.png)

### Mobile View

![Mobile view of the home page, showing the open navigation menu](screenshots/mobile.png)

The layout adjusts at each breakpoint: the navigation changes from a horizontal menu to a drop-down
menu button, the multi-column grids collapse to fewer columns and then to one, and the images and
logo badge scale down without ever overflowing the page.

---

## 5. How to View the Website

1. Download or clone the repository.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or right-click it and choose **Open with Live Server**.

An internet connection is recommended the first time, so that the Google Font and the Google Map
embed on the Contact page can load. The site still works without them because a fallback font
stack is specified.

---

## 6. Changelog

### Part 2 – 18 September 2026

**Corrections based on Part 1 feedback**

| # | Change | Reason |
|---|--------|--------|
| 1 | Removed a broken `<img>` tag that was sitting inside `<head>` on `index.html`, before `<title>` | An image tag is not valid inside `<head>`; the browser was silently ignoring it and the image never appeared anywhere on the page. |
| 2 | Removed a severely malformed `<img>` tag on `products.html` that was missing its closing bracket and had bled into the `<title>` element's attributes | This broke the parsing of the whole `<head>` section on that page. |
| 3 | Created the `css/` and `js/` folders and moved `style.css` and `main.js` into them | Every page already linked to `css/style.css` and `js/main.js`, but the files were sitting in the project root with no styling and no scripts. The stylesheet had no effect at all in Part 1 because of this mismatch. |
| 4 | Renamed `Bean & Bake.png` to `images/logo.png` (and added `images/favicon.png`, `images/logo-full.png`) | Spaces and an `&` character in a filename have to be URL-encoded to work reliably as a web link; renaming the file avoids broken image links across browsers and operating systems. |
| 5 | Replaced the six missing product photos (`images/cake.jpg`, `pastry.jpg`, `cupcake.jpg`, `bread.jpg`, `cookies.jpg`, `coffee.jpg`) with original SVG icon illustrations in the café's colour palette | None of these image files existed in the Part 1 submission, so every product card on the home and products pages showed a broken image icon. |
| 6 | Added an `<h1>` to `about.html`, `products.html`, `enquiry.html` and `contact.html` | Each of these pages started with an `<h2>` and had no `<h1>` at all, which skips a heading level and is flagged by accessibility and SEO checks. |
| 7 | Removed every inline `style="..."` attribute (padding, margins, and the entire enquiry form's styling) and moved the rules into `css/style.css` | The module brief asks for styling to live in the external stylesheet, not inline in the HTML; inline styles also cannot be overridden by media queries for responsive design. |
| 8 | Added `<div class="field">` wrappers around each form control on the enquiry form | Needed so the fields could be styled and spaced consistently from the external stylesheet. |
| 9 | Added `<meta name="description">` and `<meta name="author">` to all five pages, plus a favicon link | Improves SEO, identifies the author of the work, and gives the site a browser tab icon. |
| 10 | Converted the phone number and email address into `tel:` and `mailto:` links | Visitors can now contact the café in one click instead of copying the details manually. |
| 11 | Added a `title` attribute to the Google Map `<iframe>` on the Contact page and added the map section itself (it was missing from Part 1) | Screen readers need a description of an embedded frame, and the contact page had no map at all. |
| 12 | Escaped `&` as `&amp;` in visible text such as the page titles and headings | `&` on its own is not valid inside HTML text content; it must be encoded. |
| 13 | Added `aria-label` to the `<nav>` element and `aria-current="page"` to the active navigation link on each page | Improves screen-reader accessibility for the navigation menu. |
| 14 | _(Add any other point your lecturer raised in the Part 1 feedback here)_ | |

**New work for Part 2**

- Created the external stylesheet `css/style.css` and linked it correctly to all five pages.
- Added a CSS reset and a set of default styles (font family, font size, colours, spacing).
- Defined the colour palette (taken from the logo) and font stack as CSS variables in `:root`.
- Applied a full typography scale using relative units.
- Built the desktop layout with CSS Grid and Flexbox: a split hero, feature grid, card grids,
  product grid, form layout and a three-column footer.
- Styled the header, navigation, buttons, cards, forms, side panel, contact cards, map and footer.
- Added `:hover`, `:focus` and `:active` states to navigation links, buttons, cards and form fields.
- Designed a set of original SVG icons (products, features and contact details) in the site's
  colour palette, since no product photography existed in the Part 1 submission.
- Added a "Why Choose Us" section and a "How Custom Orders Work" panel to give the home and
  enquiry pages more visual and content depth.
- Added a tablet breakpoint at 992px and a mobile breakpoint at 600px.
- Replaced the default stacked mobile navigation with a CSS-only drop-down menu button, so the
  header stays compact on small screens.
- Added responsive testing screenshots and rewrote this README.

### Part 1 – _(add your original Part 1 date)_

- Created the website proposal and the sitemap.
- Built the HTML structure for all five pages.
- Added the café's content, navigation, enquiry form and contact details.
- Set up the GitHub repository, README and initial changelog.

---

## 7. Media Used

| File | Description | Source |
|------|-------------|--------|
| `images/logo.png`, `images/logo-full.png`, `images/favicon.png` | Bean & Bake Café badge logo | _(confirm the source of this file, e.g. designed in Canva / AI-generated for the proposal)_ |
| `images/icon-*.svg` | Original vector icons illustrating each product, feature and contact detail | Created for this project in the site's colour palette |

---
# Bean & Bake Café - Part 3 Submission

## Project Overview
The Bean & Bake Café is a web based website for an artisan bakery & café. This includes our baked goods, bespoke orders, local coffees and customer inquiries. This project was developed for our Web Development (WEDE5020) course.

## Changelog - Part 3 and Feedback

### Part 2 - Feedback
Improved the CSS design and layout of the website. This has been implemented using the following files: index.html, about.html, products.html, contact.html & enquiry.html.
Improved HTML by using HTML5 semantic tags and improved the image containers.

### Part 3
Improved the contact and inquiry forms. Using JavaScript we have added validation to ensure data is provided correctly. This includes field validation, email validation and error alerts.
Improved the Products page by adding a search/filter function using JavaScript. This allows customers to search baked goods quickly.
Improved the technical SEO by adding description titles, meta descriptions, meta keywords and alt text to images. We have also added a robots.txt and sitemap.xml file. All pages were improved.
The code is now version controlled using Git and deployed onto Netlify.



## 8. References

The Independent Institute of Education. 2026. *Web Development (Introduction) WEDE5020 Module Manual*. Johannesburg: The IIE.

Mozilla Developer Network. 2026. *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 18 September 2026].

Mozilla Developer Network. 2026. *Using media queries*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 18 September 2026].

CSS-Tricks. 2026. *A Complete Guide to Flexbox*. [Online]. Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [Accessed 18 September 2026].

CSS-Tricks. 2026. *A Complete Guide to CSS Grid*. [Online]. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ [Accessed 18 September 2026].

W3Schools. 2026. *CSS Responsive Web Design*. [Online]. Available at: https://www.w3schools.com/css/css_rwd_intro.asp [Accessed 18 September 2026].

Google Fonts. 2026. *Poppins*. [Online]. Available at: https://fonts.google.com/specimen/Poppins [Accessed 18 September 2026].

Mozilla Developer Network. 2026. *ARIA: Accessible Rich Internet Applications*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA [Accessed 18 September 2026].

 MDN Web Docs. (2026). JavaScript Guide. [online] Available at: https://developer.mozilla.org/ [Accessed 2026 Oct].
WEDE5020 Study Guide. (2026). The Independent Institute of Education (PTE) Ltd.
