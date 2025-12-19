# Applova Digital Menu 🍽️

A comprehensive digital menu and restaurant management system designed for Indian restaurants. This web application provides both customer-facing menu ordering and restaurant owner management interfaces.

## Features ✨

### For Restaurant Owners 👨‍🍳
- **Dashboard** - Real-time statistics and analytics
- **Menu Builder** - Create and manage menu categories and items
- **Order Management** - Drag-and-drop order status tracking
- **Customer Menu View** - Preview how customers see your menu
- **Real-time Notifications** - Toast notifications for order updates

### For Customers 👥
- **Interactive Digital Menu** - Browse by categories (Appetizers, Main Course, Breads, Desserts, Drinks)
- **Shopping Cart** - Add, remove, and adjust quantities
- **Order Summary** - View totals with tax and service charges
- **Checkout System** - Simple order placement
- **Responsive Design** - Works on mobile, tablet, and desktop

## Tech Stack 🛠️

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS variables and animations
- **JavaScript (Vanilla)** - No external dependencies
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins and Playfair Display fonts
- **Glassmorphism UI** - Modern glass effect design
- **Drag & Drop API** - Interactive order management

## Key Features in Detail 🔍

### Authentication System
- Business signup with phone number support
- Login with remember me functionality
- Password reset modal

### Dashboard
- Live statistics (Orders, Revenue, Customers, Menu Items)
- Animated cards with hover effects
- Real-time order tracking

### Menu Management
- Categorized menu items (Appetizers, Mains, Breads, Desserts, Drinks)
- Item badges (Vegetarian, Chef Special, Popular, etc.)
- CRUD operations for menu items

### Order Management
- Three-stage workflow (New → Preparing → Ready)
- Drag-and-drop order movement
- Order details modal
- Real-time status updates

### Customer Interface
- Filter menu by categories
- Quantity controls for each item
- Floating cart button with badge
- Cart summary with tax calculations

### UI/UX Features
- Glassmorphism design elements
- Smooth animations and transitions
- Toast notification system
- Responsive design for all devices
- Dark mode support
- Custom scrollbars

## Installation & Setup 🚀

### Option 1: Local File System
1. Download the three files:
   - `index.html`
   - `style.css`
   - `script.js`

2. Place all files in the same directory

3. Open `index.html` in any modern web browser

### Option 2: Web Server
1. Upload all three files to your web server

2. Ensure files are in the same directory

3. Access via your domain: `https://yourdomain.com/index.html`

## File Structure 📁

```
applova-menu/
├── index.html          # Main HTML file
├── style.css          # All CSS styles and animations
├── script.js          # All JavaScript functionality
└── README.md          # This documentation
```

## Usage Guide 📖

### Restaurant Owner Flow
1. **Sign Up** - Create a business account
2. **Dashboard** - View real-time statistics
3. **Menu Builder** - Add/edit menu items
4. **Orders** - Manage incoming orders
5. **View Menu** - Preview customer experience

### Customer Flow
1. **Browse Menu** - View items by category
2. **Add to Cart** - Select items with quantity controls
3. **Review Cart** - Check items and totals
4. **Checkout** - Place order (simulated)

## Data Structure 📊

The application uses an in-memory state object with:

```javascript
state = {
  currentUser: {},           // Logged in user
  categories: [],            // Menu categories
  menuItems: [],            // All menu items
  cart: [],                 // Current cart items
  orders: [],              // Restaurant orders
  currentSection: '',      // Active dashboard section
  darkMode: false         // UI theme
}
```

## Default Menu Items 🍛

The application comes pre-loaded with popular Indian dishes:

### Appetizers
- Paneer Tikka (₹299)
- Manchuraian (₹349)

### Main Course
- Butter Paneer (₹449)
- Paneer Butter Masala (₹399)
- Biryani Paneer (₹379)
- Dal Makhani (₹329)

### Breads
- Garlic Naan (₹89)
- Butter Naan (₹79)

### Desserts
- Gulab Jamun (₹149)
- Rasmalai (₹169)

### Drinks
- Mango Lassi (₹129)
- Masala Chai (₹59)

## Browser Compatibility 🌐

- Chrome 60+ ✅
- Firefox 55+ ✅
- Safari 11+ ✅
- Edge 79+ ✅
- Opera 50+ ✅

## Responsive Breakpoints 📱

- **Desktop**: 1200px+
- **Tablet**: 992px - 1199px
- **Mobile Large**: 768px - 991px
- **Mobile Small**: 576px - 767px
- **Mobile X-Small**: < 575px

## Performance Features ⚡

- No external JavaScript dependencies
- Optimized CSS with custom properties
- Lazy loading for images
- Efficient DOM manipulation
- Minimized reflows and repaints

## Security Features 🔒

- Form validation on client-side
- Input sanitization
- Protected routes (simulated)
- No sensitive data storage in localStorage

## Customization 🎨

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary: #2E8B57;      /* Main green color */
  --secondary: #FF6B35;    /* Accent orange */
  --accent: #6C63FF;       /* Purple accent */
  /* ... more variables */
}
```

### Adding Menu Items
Edit the `initializeData()` function in `script.js`:
```javascript
state.menuItems.push({
  id: 13,
  name: 'New Dish',
  price: 199,
  category: 'mains',
  description: 'Description here',
  badge: 'New'
});
```

### Changing Restaurant Info
Update in `index.html`:
```html
<h1 class="restaurant-name">Your Restaurant Name</h1>
<p class="restaurant-tagline">Your tagline here</p>
```

## Future Enhancements 🚧

Potential features to add:

1. **Backend Integration**
   - Node.js/Express API
   - MongoDB/PostgreSQL database
   - User authentication with JWT

2. **Advanced Features**
   - QR code menu access
   - Table reservation system
   - Online payment integration
   - Customer reviews and ratings
   - Inventory management

3. **Mobile App**
   - React Native mobile application
   - Push notifications
   - Offline functionality

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License 📄

This project is open source and available under the MIT License.

## Support 🆘

For issues or questions:
1. Check the existing issues
2. Create a new issue with details
3. Include browser and OS information

## Acknowledgments 🙏

- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Design inspired by modern restaurant applications
- Images from [Unsplash](https://unsplash.com)

## Live Demo 🌐

To see the application in action, simply open `index.html` in your browser and use these test credentials:

**Login:**
- Email: any email
- Password: any password

**Test Features:**
- Add items to cart
- Change order statuses
- Try mobile responsiveness
- Test dark mode

---

Built with ❤️ for Indian restaurants worldwide. Enjoy your digital transformation! 🎉
