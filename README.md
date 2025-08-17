# Brand Guidelines Portfolio

A modern, interactive portfolio showcase for your brand guidelines with smooth sliding navigation and multiple interaction methods.

## ✨ Features

- **Sticky Sliding Navigation**: Smooth transitions between slides with proper positioning
- **Multiple Interaction Methods**:
  - Mouse wheel scrolling
  - Mouse drag (click and drag up/down)
  - Touch gestures (swipe up/down on mobile)
  - Keyboard navigation (arrow keys, Home, End)
  - Navigation dots (click to jump to specific slide)
  - Previous/Next buttons
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient background with glassmorphism effects
- **Smooth Animations**: CSS transitions and transforms for professional feel
- **Accessibility**: Keyboard navigation and proper alt text for images

## 🚀 How to Deploy on GitHub

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository:
   - `index.html`
   - `brand_guidelines_Page_1.png` through `brand_guidelines_Page_7.png`
   - `README.md`
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
4. **Your portfolio will be live** at: `https://yourusername.github.io/repository-name`

### Option 2: Direct File Hosting

1. **Upload to any web hosting service** (Netlify, Vercel, etc.)
2. **Ensure all PNG files are in the same directory** as `index.html`
3. **Access via your hosting URL**

## 🎮 How to Use

### Navigation Methods

- **Mouse Wheel**: Scroll up/down to navigate between slides
- **Mouse Drag**: Click and drag up/down on the slides
- **Touch**: Swipe up/down on mobile devices
- **Keyboard**: 
  - Arrow keys (← → ↑ ↓)
  - Home key (go to first slide)
  - End key (go to last slide)
- **Navigation Dots**: Click the dots on the right to jump to specific slides
- **Buttons**: Use Previous/Next buttons at the bottom

### Customization

The portfolio is easily customizable:

- **Colors**: Modify the CSS variables in the `<style>` section
- **Images**: Replace the PNG files with your own images
- **Text**: Update the title and instructions
- **Layout**: Adjust spacing, sizes, and positioning in CSS

## 📱 Responsive Design

The portfolio automatically adapts to different screen sizes:
- **Desktop**: Full navigation with all controls visible
- **Tablet**: Optimized spacing and touch interactions
- **Mobile**: Touch-friendly controls and responsive layout

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Modern CSS**: Uses CSS Grid, Flexbox, and modern properties
- **Performance**: Optimized animations and smooth scrolling
- **Cross-browser**: Compatible with all modern browsers
- **Touch-friendly**: Proper touch event handling for mobile devices

## 📁 File Structure

```
your-portfolio/
├── index.html              # Main HTML file
├── README.md              # This documentation
├── brand_guidelines_Page_1.png
├── brand_guidelines_Page_2.png
├── brand_guidelines_Page_3.png
├── brand_guidelines_Page_4.png
├── brand_guidelines_Page_5.png
├── brand_guidelines_Page_6.png
└── brand_guidelines_Page_7.png
```

## 🎨 Customization Tips

### Changing Colors
Look for these CSS properties in the `<style>` section:
- Background gradient: `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Button colors: `background: rgba(255, 255, 255, 0.2)`
- Text colors: `color: white`

### Adding More Slides
1. Add new `<div class="slide">` elements in the HTML
2. Add corresponding navigation dots
3. Update the `totalSlides` variable in JavaScript
4. Ensure your image files are named correctly

### Modifying Animations
- Transition timing: `transition: all 0.3s ease`
- Transform effects: `transform: scale(1.02)`
- Animation curves: `cubic-bezier(0.4, 0.0, 0.2, 1)`

## 🌟 Perfect for Portfolios

This slideshow is ideal for:
- Brand guidelines presentations
- Design portfolios
- Client presentations
- Portfolio websites
- Interactive resumes
- Project showcases

## 📞 Support

If you need help customizing or deploying your portfolio:
1. Check the HTML comments for guidance
2. Modify CSS properties to match your brand
3. Test on different devices and browsers
4. Ensure all image files are properly named and sized

---

**Enjoy showcasing your brand guidelines with this beautiful, interactive portfolio!** 🎉
