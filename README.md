# ALIYO MOMOT UNIVERSITY

A UNIVERSITY SPECIALIZING IN MEDICAL AND ENGINEERING EDUCATION

## About

ALIYO MOMOT UNIVERSITY is a modern web application showcasing the university's programs, admissions process, student portal, faculty information, and contact details. The application provides an intuitive interface for prospective students, current students, and faculty members.

## Features

- **Homepage**: Welcoming hero section with call-to-action buttons
- **Programs Section**: Detailed information about Medical, Engineering, and Research programs
- **Admissions**: Application process, important dates, and quick inquiry form
- **Student Portal**: Access to grades, schedules, course registration, library resources, payments, and profile management
- **Faculty & Staff**: Statistics and resources for faculty members
- **Contact Section**: Contact information and message form
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Interactive Elements**: Smooth scrolling, modal dialogs, and form validation

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- No external dependencies required

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local web server (Python, Node.js, or any HTTP server)

### Running the Application

#### Option 1: Direct File Opening
1. Clone or download this repository
2. Open `index.html` directly in your web browser

#### Option 2: Using Python HTTP Server (Recommended)
```bash
# Navigate to the project directory
cd ALIYO-MOMOT-UNIVERSITY

# Start a local server with Python 3
python3 -m http.server 8000

# Or with Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to `http://localhost:8000`

#### Option 3: Using Node.js HTTP Server
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory and start server
cd ALIYO-MOMOT-UNIVERSITY
http-server -p 8000
```

Then open your browser and navigate to `http://localhost:8000`

## Project Structure

```
ALIYO-MOMOT-UNIVERSITY/
├── index.html      # Main HTML file with complete page structure
├── styles.css      # Stylesheet with responsive design
├── app.js          # JavaScript for interactivity and animations
└── README.md       # This file
```

## Features Overview

### Navigation
- Sticky header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Active section highlighting

### Interactive Components
- Program details with modal alerts
- Student login modal
- Form submissions with user feedback
- Animated cards on scroll
- Hover effects on interactive elements

### Sections
1. **Hero Section**: Welcome message with CTA buttons
2. **Programs**: Three program categories with detailed information
3. **Admissions**: Step-by-step application process and inquiry form
4. **Student Portal**: Six portal features for student services
5. **Faculty & Staff**: Statistics and resource links
6. **Contact**: Contact information and message form
7. **Footer**: Quick links and social media connections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- This is a demonstration/frontend-only application
- Form submissions do not send data to a backend server
- Login functionality is simulated for demonstration purposes
- All interactive elements provide user feedback through alerts

## Future Enhancements

- Backend integration for form submissions
- Real authentication system
- Database integration for student/faculty data
- Course management system
- Online payment integration
- Document upload functionality

## License

© 2026 ALIYO MOMOT UNIVERSITY. All rights reserved.

## Contact

For more information, visit the Contact section of the website or email: info@aliyomomot.edu
