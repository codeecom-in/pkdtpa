# PTPA Website - Customization Guide

This guide helps you personalize the PTPA website with your own content, images, and branding.

## 🎨 Customizing Branding

### Change the Logo Text

Edit `src/components/Navbar.js`:
```javascript
<span className="logo-text">PTPA</span>  // Change this to your preferred name
```

### Change Colors

Edit the CSS color values in any page's CSS file:

**Primary Color:** `#667eea` (Purple)
**Secondary Color:** `#764ba2` (Darker Purple)

To change globally, update these colors in:
- `src/components/Navbar.css`
- `src/pages/Home.css`
- All other page CSS files

Replace all instances of:
- `#667eea` → Your primary color
- `#764ba2` → Your secondary color

**Example:** To use blue and teal:
```css
background: linear-gradient(135deg, #0066cc 0%, #00ccaa 100%);
```

## 👥 Managing Committee Members

### Adding New Committee Member

1. Open `src/data/membersData.js`
2. Add to the `committeeMembers` array:

```javascript
{
  id: 18,
  name: "John Michael",
  position: "New Position",
  image: "https://images.unsplash.com/photo-url",
  bio: "Brief description of the member"
}
```

### Removing a Committee Member

Find the member in `committeeMembers` array and delete the object.

### Updating a Member's Photo

Find the member and update the `image` URL:

**Using Unsplash (Free Images):**
- Visit [unsplash.com](https://unsplash.com)
- Search for a photo
- Get the image URL and use it

**Using Local Images:**
1. Add image to `public/images/` folder
2. Use path: `/images/filename.jpg`

## 📁 Managing Members Directory

### Adding Members

Edit `src/data/membersData.js` and add to `sampleMembers` array:

```javascript
{
  id: 100,
  name: "Rahul Nair",
  photo: "https://images.unsplash.com/photo-url",
  location: "Singapore",
  profession: "Software Engineer"
}
```

### Updating Member Information

Find the member in the `sampleMembers` array and update their details.

### Adding More Members

Continue adding objects to the array with unique IDs. The Members page will automatically display all members and allow filtering by location.

## 📅 Managing Events

### Adding an Event

Edit `src/data/membersData.js` and add to `eventsData`:

```javascript
{
  id: 7,
  title: "Diwali Celebration 2024",
  date: "November 1, 2024",
  location: "Community Center, Dubai",
  description: "Join us for our annual Diwali celebration with traditional customs"
}
```

### Updating Event Details

Find the event and update its information.

### Removing Past Events

Delete the event object from `eventsData` array.

### Adding Event Highlights

The "Past Events Highlights" section is in `src/pages/Events.js`. Find the `past-events` section and add highlight cards:

```javascript
<div className="highlight-card">
  <h3>Event Name 2024</h3>
  <p>Brief description of the event and its impact</p>
</div>
```

## 🖼️ Managing Gallery

### Adding Gallery Images

Edit `src/pages/Gallery.js` and add to `galleryImages` array:

```javascript
{
  id: 13,
  src: 'https://images.unsplash.com/photo-url',
  title: 'Event Name',
  category: 'Reunions'
}
```

### Changing Categories

Modify the categories in the gallery display at the bottom of `src/pages/Gallery.js`.

### Categories Available
- Reunions
- Festivals
- Events
- Family
- Memories
- Charity
- Culture
- Youth
- Professional
- Community
- Heritage

You can add your own categories.

## ✏️ Editing Page Content

### Home Page

Edit `src/pages/Home.js`:
- Change carousel images: Update `carouselImages` array
- Update stats: Change values in `.stat-card` sections
- Modify about preview text

### About Us Page

Edit `src/pages/AboutUs.js`:
- Update mission statement
- Modify community statistics
- Edit benefits section
- Change activity descriptions

### Events Page

Edit `src/pages/Events.js`:
- Add/remove events in the Events List
- Update Past Events Highlights
- Modify Event Types

## 🔗 Updating Links

### WhatsApp Group Link

To add a WhatsApp group link button, add this to any page:

```javascript
<a href="https://chat.whatsapp.com/your-group-link" className="whatsapp-link">
  Join WhatsApp Group
</a>
```

### Adding Contact Information

Add to `src/pages/Gallery.js` contact section:
```javascript
<p><strong>WhatsApp:</strong> +1-234-567-8900</p>
<p><strong>Email:</strong> your-email@ptpa.com</p>
<p><strong>Phone:</strong> Your phone number</p>
```

## 📸 Adding Local Images

### Steps:

1. **Save image to:** `public/images/` folder
2. **Use in code:**
   ```javascript
   image: '/images/my-photo.jpg'
   ```

### Supported Formats:
- JPG/JPEG
- PNG
- WebP (smaller file size, recommended)
- GIF

### Image Optimization:
- Keep images under 1MB each
- Use online tools like:
  - [TinyPNG](https://tinypng.com) for compression
  - [Convertio](https://convertio.co) for format conversion

## 🎨 Customizing Styles

### Changing Font Size

All pages use relative sizing. Edit the CSS values:

```css
h1 { font-size: 2.5rem; }  /* Change rem value */
h2 { font-size: 2rem; }
p { font-size: 1.05rem; }
```

### Changing Spacing

Adjust padding and margin values:

```css
padding: 3rem 2rem;    /* Increase or decrease */
gap: 2rem;            /* Space between items */
margin-bottom: 2rem;  /* Space below elements */
```

### Changing Border Radius

Make corners more/less rounded:

```css
border-radius: 12px;   /* Increase for more rounded corners */
border-radius: 4px;    /* Decrease for less rounded corners */
```

## 📱 Testing on Mobile

After making changes:

1. **Desktop Testing:**
   ```bash
   npm start
   ```
   Open http://localhost:3000 and resize browser

2. **Mobile Device Testing:**
   - Use Chrome DevTools → Toggle Device Toolbar
   - Test on real phone:
     ```bash
     npm start
     # Phone on same WiFi: http://your-computer-ip:3000
     ```

3. **Responsive Sizes to Test:**
   - Mobile: 375px (iPhone)
   - Mobile Large: 480px
   - Tablet: 768px
   - Desktop: 1024px+

## 🔍 Finding Things to Change

### Quick Reference:

| What to Change | Where to Edit |
|---|---|
| Navigation links | `src/components/Navbar.js` |
| Home page content | `src/pages/Home.js` |
| About Us content | `src/pages/AboutUs.js` |
| Committee members | `src/data/membersData.js` |
| Members list | `src/data/membersData.js` |
| Events | `src/data/membersData.js` |
| Gallery images | `src/pages/Gallery.js` |
| Colors | Any page's `.css` file |
| Fonts | `src/index.css` or page CSS |
| Layout | Page component (`.js` file) |

## ⚠️ Important Notes

1. **Backup First:** Always keep a backup before making changes
2. **Test Locally:** Use `npm start` to test before deploying
3. **Clear Cache:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R) after changes
4. **Mobile Testing:** Always test on mobile devices
5. **Image Quality:** Use high-quality images for best appearance
6. **Content Review:** Proofread all text for spelling/grammar

## 🆘 Troubleshooting Changes

### Page not updating
- Check if you saved the file
- Hard refresh the browser (Ctrl+Shift+R)
- Restart the development server (`npm start`)

### Images not showing
- Check the image path is correct
- Ensure image file exists in the location
- Try using full URL from external source

### Styling not applied
- Check CSS file is saved
- Verify class name matches in HTML and CSS
- Hard refresh browser

### Carousel not working
- Check image URLs are valid
- Ensure array format is correct
- Verify images are accessible

## 📚 Resources

- [React Documentation](https://react.dev)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Unsplash Free Images](https://unsplash.com)
- [Color Picker](https://htmlcolorcodes.com)

---

**Need Help?** Keep this guide handy and refer back to it when customizing your website!
