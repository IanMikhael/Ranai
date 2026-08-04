# ⚡ QUICK TEST - DARK MODE & LOGO FIX

## Start Dev Server
```bash
cd C:\Projects\Ranai
npm run dev
```

Then open browser at: **http://localhost:5174** (or shown port)

---

## ✅ DARK MODE TEST

### Desktop
1. **Find the theme toggle**: Look at top-right of navbar
   - Should see sun/moon icon button
   
2. **Click to toggle**:
   - Click icon → Page switches to light mode
   - Click again → Page switches back to dark mode
   - Should be smooth transition (0.3 seconds)

3. **Check colors**:
   - **Dark Mode**: 
     - Background: Almost black (#050505)
     - Text: White
     - Navbar: Dark semi-transparent
   
   - **Light Mode**:
     - Background: White
     - Text: Dark gray
     - Navbar: Light semi-transparent

4. **Refresh page**:
   - Press F5 to refresh
   - Theme should stay the same (localStorage working)

### Mobile
1. Click hamburger menu (top-left)
2. Look for sun/moon icon
3. Click to toggle theme
4. Verify same behavior as desktop

---

## ✅ LOGO TEST

1. **Look at navbar logo** (top-left)
   - Should show Ranaix logo image (SVG)
   - Not just text
   
2. **Logo sizing**: ~32px height
   - Should look professional
   - Proper spacing from text

3. **Logo works in both modes**:
   - Dark mode: Logo visible
   - Light mode: Logo visible

---

## ✅ TEST ALL PAGES

Go to each page and verify dark/light mode works:

1. **Home** (/)
   - Toggle theme
   - Verify colors change
   - Logo displays

2. **Service** (/service)
   - Toggle theme
   - Check tab content colors
   - Verify images visible

3. **Client** (/client)
   - Toggle theme
   - Check story cards
   - Verify text readable

4. **Contact** (/contact)
   - Toggle theme
   - Check form fields
   - Verify all text readable

---

## ❌ TROUBLESHOOTING

### Dark mode toggle not visible
- Refresh page
- Check browser console (F12)
- Look for JavaScript errors

### Colors not changing
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check localStorage in DevTools

### Logo not showing
- Check `/public/ranaix-logo.svg` exists
- Verify image path in Navbar.jsx
- Check browser console for 404 errors

---

## ✅ SUCCESS CHECKLIST

- [ ] Dark mode button visible
- [ ] Theme toggles on click
- [ ] Smooth color transition
- [ ] Light mode colors correct
- [ ] Dark mode colors correct
- [ ] Logo visible in navbar
- [ ] Theme persists on refresh
- [ ] Works on all 4 pages
- [ ] Works on mobile/tablet/desktop
- [ ] No console errors

---

## 🎉 If Everything Passes

Congratulations! Dark mode and logo are fully working. Ready for production! 🚀

## ⚠️ If Something Doesn't Work

Check the files:
- `src/App.jsx` - Background container
- `src/components/Navbar.jsx` - Logo and theme logic
- `src/pages/*.jsx` - Page-level theme support
- `public/ranaix-logo.svg` - Logo file exists

