# SVGFinder

## Live Demo
👉 **[View Live Demo](https://svg-finder.vercel.app/)**

--- 

## Overview
SVGFinder is a React-based developer tool that lets you **search, preview, customize, and export** SVG icons from the Iconify API. It also includes a **Favorites** system so you can save icons you use often.

--- 

## ✨ Features
- 🔍 **Icon Search:** Search thousands of icons by keywords like `star`, `home`, `weather`, etc.
- 🖼️ **Live Preview:** Click **View** on any icon to open a modal with a large preview.
- 🎨 **Color & Size Customization**  
  - Change icon color using a native color picker.  
  - Adjust icon size with a range slider.  
  - The SVG code updates instantly with your chosen color and size.

- 📋 **One‑Click Copy:** Copy the full `<svg>...</svg>` markup to your clipboard with a single button.

- ❤️ **Favorites (LocalStorage)**  
  - Mark icons as favorites using the heart button on each card.  
  - Favorites are stored in `localStorage`, so they **persist** across page reloads.  
  - Switch between **Search** and **My Favourites** tabs.

- 🧭 **Responsive UI:** Custom layout and modal styling for both desktop and mobile screens.

--- 

## 🛠️ Tech Stack
- **React** (Vite)
- **Axios** for API calls
- **Iconify API** for SVG icons  
- **Lucide-react** for the heart icon
- **CSS** for styling 

--- 

## Project Structure

```
SVGFinder/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── IconGrid.jsx
│   │   ├── IconCard.jsx
│   │   ├── ExportModal.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── vite.svg
│   └── Error.jpg
├── index.html
├── package.json
├── vite.config.js
└── .gitignore

```
--- 

## 🔍 Features in detailed
### 1. Smart Icon Search
- Shows:
  - A friendly prompt before first search.
  - A dedicated “No icon found..!” state with an illustration if the query returns no results.

### 2. Icon Preview & Export Modal
- Clicking **View** opens a centered modal with:
  - A large live preview of the selected icon.
  - The rendered SVG respecting the selected color and size.
- The raw `<svg>...</svg>` code is displayed in a scrollable code block.
- **Copy Code** button copies the full SVG markup to the clipboard.

### 3. Color & Size Customization
- Native color input lets you pick any color; the app converts it to a HEX string and passes it to the Iconify API.
- Size slider ranges from **16px to 256px**, updating:
  - The preview icon.
  - The width/height attributes in the exported SVG code.
- Changes are reflected immediately without closing the modal.

### 4. Favorites with Persistence
- Each icon card has a heart button:
  - Filled red if the icon is already in favorites.
  - Outlined if not.
- Favorites are stored in `localStorage` under `svg_favourites`, so:
  - They persist after page reloads.
  - They are available across sessions on the same browser.
- A **My Favourites** tab shows only the saved icons, with the count displayed in the button label.

### 5. Responsive & Accessible UI
- Layout adapts from multi-column grid on desktop to single/2-column grid on smaller screens.
- Modal and controls are sized for touch on mobile.
- Uses clear contrast and simple typography for readability in dark mode.

--- 

## Deployment
The app is deployed on **Vercel**.

1. Push code to GitHub main branch
2. Vercel automatically detects changes
3. App rebuilds and deploys within seconds

--- 

## 🚧 Future Enhancements
These are ideas planned or suitable for a future version:

1. **Copy as React Component**
   - Option to export icons as React JSX (e.g. `<svg {...props}>`) instead of plain SVG only.
   - Toggle between “SVG” and “React” tabs in the modal.

2. **Multiple Icon Sets / Filters**
   - Filters for categories like “Outline”, “Filled”, “Brands”, etc.
   - Ability to select specific icon sets (e.g. Material, Tabler, Lucide) when searching.

3. **Download as SVG / PNG**
   - Buttons to:
     - Download the raw `.svg` file.
     - Optionally render and download a `.png` snapshot of the icon at the chosen size.

4. **Custom Collections**
   - Let users group favorites into named collections (e.g. “Dashboard Icons”, “Auth Screens”).
   - Store collections in `localStorage` (or a backend later).

5. **Theme Toggle**
   - Add a light/dark mode switch using CSS variables.
   - Persist the selected theme using `localStorage`.

6. **Hosted API Error Handling**
   - More detailed error messages when the Iconify API is unreachable or rate-limited.
   - Retry option or fallback suggestions.

--- 

## Acknowledgments
* Icons provided by **Iconify**.
* Heart icon from **lucide-react**.

--- 

## Author
**Teja Janga**
* GitHub: [@Teja-Janga](https://github.com/Teja-Janga)

--- 

## 📄 License
This project is for learning and portfolio purposes.
You are free to fork and experiment with it. For any serious reuse, please credit the original author.

**Made by Teja Janga**