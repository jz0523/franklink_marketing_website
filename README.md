# Franklink Marketing Website

A modern, animated marketing website for Franklink - an AI Career Agent in iMessage that helps college students with career events and follow-ups.

## Features

- **Animated iMessage Demo**: Messages slide in with smooth animations on page load/refresh
- **Interactive Phone Flip**: Hover over the phone to see "3 Days After" text, followed by a 3D flip animation showing the follow-up demo
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-based animations for stats and content sections
- **Modern UI**: Clean, professional design with gradient effects and smooth transitions

## Project Structure

```
franklink_marketing_website/
├── index.html                 # Main HTML file
├── styles.css                 # All styling and animations
├── script.js                  # JavaScript for interactions
├── Franklink Banner 2.png    # Franklink logo
├── Franklink webpage main.png # Design reference
├── iMessage Demo 1.png       # First demo reference
├── iMessage Demo 2.png       # Second demo reference
├── placeholder-images.html   # Generate placeholder images
└── README.md                 # This file
```

## Setup Instructions

1. **Open the Website**
   - Simply open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)

2. **Image Setup**
   - The website uses your existing PNG files for the Franklink logo
   - For missing images (speaker photo, company logos), either:
     - Add your own images with the filenames referenced in the HTML
     - Or open `placeholder-images.html` to generate and save placeholder images

3. **Customization**
   - Edit `index.html` to update content, event details, or messaging
   - Modify `styles.css` to adjust colors, spacing, or animations
   - Update `script.js` to change animation timing or add new interactions

## Key Animations

### 1. Message Slide-In Animation
- Messages and event cards slide in sequentially when the page loads
- Timing can be adjusted via `animation-delay` in the HTML

### 2. Phone Flip Interaction
- Hover over the phone for 1.5 seconds to trigger the flip
- Shows "3 Days After" indicator during hover
- Smooth 3D rotation to reveal the follow-up conversation

### 3. Scroll Animations
- Stats, CTA button, and quote sections animate in as you scroll
- Parallax effect on the phone for depth

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development Notes

- The website is built with vanilla HTML, CSS, and JavaScript (no frameworks required)
- All animations use CSS3 and JavaScript for maximum performance
- The design is optimized for fast loading and smooth interactions

## Future Enhancements

Consider adding:
- Integration with actual iMessage/SMS links
- Backend API for dynamic event loading
- User analytics tracking
- A/B testing for different messaging
- More interactive demos or case studies
- Video backgrounds or testimonials

## Contact

For questions or support with the Franklink marketing website, please reach out to your development team.

---

Built with ❤️ for Franklink - Your AI Career Companion