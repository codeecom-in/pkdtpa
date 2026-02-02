# PTPA - Pandikkad Town Pravasi Association Website

Welcome to the official website of the Pandikkad Town Pravasi Association (PTPA) - a community organization connecting expatriates and residents of Pandikkad town from around the world.

## 🌍 About PTPA

The Pandikkad Town Pravasi Association is a vibrant, inclusive community that brings together:
- **238 Total Members** from around the globe
- **188 Expatriate Members** working and settled abroad
- **50 Resident Members** in Pandikkad and nearby areas
- **Founded in 2019** to connect and support our diaspora community

## 📋 Features

### Home Page
- Hero section with community information
- Image carousel showcasing Pandikkad and airport scenes
- Statistics about our community
- Quick links to other sections

### About Us
- Comprehensive information about PTPA
- Our mission and values
- Community statistics and demographics
- Benefits of membership

### Committee
- Meet the 17-member leadership team
- Positions and responsibilities:
  - President
  - Vice President
  - Secretary
  - Treasurer
  - Joint Secretary
  - Events Coordinator
  - Membership Officer
  - Cultural Secretary
  - Finance Committee Members
  - Public Relations Officer
  - Gallery Manager
  - Social Media Manager
  - Welfare Officer
  - Newsletter Editor
  - Sports Coordinator
  - Youth Representative
  - Senior Advisor

### Members Directory
- Searchable member database
- Filter by location
- View member details including:
  - Name and photo
  - Current profession
  - Location (Country/City)
- Responsive grid layout

### Events
- Upcoming event listings with dates and details
- Past event highlights
- Event categories:
  - Celebrations and Reunions
  - Professional Networking Events
  - Educational Programs
  - Social Gatherings
  - Community Service Initiatives
  - Cultural Programs

### Gallery
- Photo collection from community events
- Organized by categories:
  - Events & Celebrations
  - Family Gatherings
  - Cultural Programs
  - Youth Programs
  - Community Service
  - Pandikkad Heritage
- Image hover overlay with details

### Navigation
- Responsive navbar with hamburger menu for mobile
- Sticky navigation for easy access
- Mobile-first responsive design

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **CSS3** - Responsive styling
- **JavaScript** - Interactive functionality

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1920px and above)
- Tablets (768px - 1024px)
- Mobile phones (320px - 767px)

All pages include:
- Flexible grid layouts
- Mobile hamburger menu
- Touch-friendly buttons
- Readable typography
- Optimized images

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000` (or port 3001 if 3000 is in use).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📂 Project Structure

```
frontend/
├── public/
│   ├── images/          # Image assets
│   ├── index.html       # Main HTML file
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js    # Navigation component
│   │   ├── Navbar.css
│   │   ├── Carousel.js  # Image carousel component
│   │   └── Carousel.css
│   ├── pages/
│   │   ├── Home.js      # Home page
│   │   ├── Home.css
│   │   ├── AboutUs.js
│   │   ├── AboutUs.css
│   │   ├── Committee.js
│   │   ├── Committee.css
│   │   ├── Members.js
│   │   ├── Members.css
│   │   ├── Events.js
│   │   ├── Events.css
│   │   ├── Gallery.js
│   │   └── Gallery.css
│   ├── data/
│   │   └── membersData.js  # Sample data for committee, members, events
│   ├── App.js           # Main app component with routing
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Scheme
- Primary: Gradient (Purple #667eea to #764ba2)
- Secondary: White and Light Gray (#f8f9fa)
- Text: Dark Gray (#333, #555, #666)

### Typography
- Modern, readable system fonts
- Responsive font sizes
- Good contrast ratios for accessibility

### Interactions
- Smooth hover effects
- Animated transitions
- Responsive buttons
- Interactive image overlays

## 🔧 Customization

### Adding Committee Members
Edit `src/data/membersData.js` and add to the `committeeMembers` array:
```javascript
{
  id: 18,
  name: "New Member",
  position: "Position",
  image: "image-url",
  bio: "Bio information"
}
```

### Adding Events
Edit `src/data/membersData.js` and add to the `eventsData` array:
```javascript
{
  id: 7,
  title: "Event Title",
  date: "Date",
  location: "Location",
  description: "Description"
}
```

### Adding Members
Edit `src/data/membersData.js` and add to the `sampleMembers` array:
```javascript
{
  id: 9,
  name: "Member Name",
  photo: "photo-url",
  location: "City, Country",
  profession: "Profession"
}
```

### Updating Gallery Images
Edit `src/pages/Gallery.js` and modify the `galleryImages` array with your image URLs.

## 📧 Contact & Contribution

For contributions, feature requests, or to share feedback:
- Contact our social media manager on WhatsApp
- Email: [contact-email]

## 📄 License

This website is created for the Pandikkad Town Pravasi Association.

## 🙏 Acknowledgments

- Thanks to all PTPA members for their continued support
- Special thanks to our committee members for their dedication
- Designed and developed with ❤️ for our community

---

**Last Updated:** February 2, 2026
**Website Version:** 1.0

For more information, visit our WhatsApp group or contact our team.
