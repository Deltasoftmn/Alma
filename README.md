# Alma Chem Trade LLC - Company Website

A modern, responsive website for Alma Chem Trade LLC, a Mongolian chemical trading and consulting company. Built with React frontend and Node.js backend.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Mongolian Language**: Complete content in Mongolian language
- **Company Information**: Comprehensive company details, services, and contact information
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Contact Forms**: Working contact and job application forms

## Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Modern icon library
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management

## Project Structure

```
alma-chem-trade-website/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend
│   └── index.js           # Express server
├── package.json           # Root package.json
└── README.md              # This file
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alma-chem-trade-website
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   ```

## Running the Application

### Development Mode
```bash
# Run both frontend and backend concurrently
npm run dev
```

### Individual Services
```bash
# Backend only
npm run server

# Frontend only
npm run client
```

### Production Build
```bash
# Build the frontend
npm run build

# Start production server
npm start
```

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/home` - Home page data
- `GET /api/about` - About page data
- `GET /api/services` - Services data
- `GET /api/products` - Products data
- `GET /api/clients` - Clients data
- `GET /api/news` - News data
- `GET /api/jobs` - Jobs data
- `GET /api/contact` - Contact information

## Pages

1. **Home** (`/`) - Company introduction and overview
2. **About** (`/about`) - Company history, mission, and vision
3. **Services** (`/services`) - Detailed service offerings
4. **Products** (`/products`) - Product catalog and categories
5. **Clients** (`/clients`) - Client information and testimonials
6. **News** (`/news`) - Company news and publications
7. **Jobs** (`/jobs`) - Job opportunities and application form
8. **Contact** (`/contact`) - Contact information and form

## Company Information

**Alma Chem Trade LLC** is a Mongolian chemical trading company that:

- Imports chemical substances for mining, processing, and industrial sectors
- Provides consulting services for safe chemical handling and storage
- Offers laboratory research and testing services
- Specializes in cyanide leaching solutions for gold extraction
- Serves mining companies, processing plants, and partner organizations

### Contact Information
- **Address**: Mongolia, Ulaanbaatar 14220, Sukhbaatar District, 1st khoroo, Elchin Saidyn Street, Sky Plaza Business Center, 9th floor
- **Phone**: +976 88042323
- **Email**: Info@khimiconsulting.mn

## Customization

### Adding New Content
1. Update the data in `server/index.js`
2. Modify the corresponding React component
3. Add new API endpoints if needed

### Styling
- Use Styled Components for component-specific styles
- Global styles are in `client/src/index.css`
- Color scheme and design tokens can be updated in individual components

### Adding New Pages
1. Create a new component in `client/src/pages/`
2. Add the route in `client/src/App.js`
3. Add navigation link in `client/src/components/Navbar.js`

## Deployment

### Frontend (React)
- Build the production version: `npm run build`
- Deploy the `client/build` folder to your hosting service
- Configure your hosting to serve the React app

### Backend (Node.js)
- Set `NODE_ENV=production`
- Deploy to a Node.js hosting service (Heroku, Vercel, etc.)
- Update the API base URL in the frontend if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: Info@khimiconsulting.mn
- Phone: +976 88042323

---

**Alma Chem Trade LLC** - Your trusted partner in chemical trading and consulting services.
