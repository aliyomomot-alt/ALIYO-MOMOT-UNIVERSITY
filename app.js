// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Program Details Handler
function showProgramDetails(programType) {
    const programInfo = {
        medical: {
            title: 'Medical Programs',
            description: 'Our medical programs are designed to prepare students for careers in healthcare. We offer state-of-the-art facilities, experienced faculty, and hands-on clinical experience.',
            highlights: [
                'Modern medical laboratories',
                'Clinical rotations at partner hospitals',
                'Research opportunities',
                'International accreditation',
                'Competitive residency placement rates'
            ]
        },
        engineering: {
            title: 'Engineering Programs',
            description: 'Our engineering programs combine theoretical knowledge with practical skills. Students gain hands-on experience through projects, internships, and research.',
            highlights: [
                'Industry-standard equipment',
                'Project-based learning',
                'Industry partnerships',
                'Co-op and internship opportunities',
                'Innovation labs and maker spaces'
            ]
        },
        research: {
            title: 'Research Programs',
            description: 'Join our vibrant research community and contribute to groundbreaking discoveries in medicine and engineering.',
            highlights: [
                'Cutting-edge research facilities',
                'Interdisciplinary collaboration',
                'Publication opportunities',
                'Conference presentations',
                'Funding and grants available'
            ]
        }
    };

    const info = programInfo[programType];
    let message = `${info.title}\n\n${info.description}\n\nHighlights:\n${info.highlights.map(h => '• ' + h).join('\n')}`;
    
    alert(message);
}

// Portal Action Handler
function handlePortalAction(action) {
    const actions = {
        grades: 'View Grades - You need to login to access your grades and academic records.',
        schedule: 'Class Schedule - Login to view your current semester schedule and classroom locations.',
        register: 'Course Registration - Login to register for courses for the upcoming semester.',
        library: 'Library Resources - Login to access digital library resources, journals, and databases.',
        payments: 'Payments - Login to view your account balance and make tuition payments.',
        profile: 'My Profile - Login to update your personal information and contact details.'
    };

    showAlert(actions[action] || 'Please login to access this feature.');
}

// Login Modal Functions
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('login-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Login Form Handler
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showAlert('Login functionality will be implemented with backend integration. For demo purposes, this is a frontend-only application.');
    closeLoginModal();
});

// Inquiry Form Handler
document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showAlert('Thank you for your inquiry! We will contact you shortly. (Note: This is a demo - no data is actually sent)');
    this.reset();
});

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showAlert('Thank you for your message! We will get back to you soon. (Note: This is a demo - no data is actually sent)');
    this.reset();
});

// Alert Helper Function
function showAlert(message) {
    alert(message);
}

// Active Navigation Highlight on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll for program cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.program-card, .portal-card, .stat-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Console welcome message
console.log('%c Welcome to ALIYO MOMOT UNIVERSITY ', 'background: #1e3a8a; color: white; font-size: 20px; padding: 10px;');
console.log('%c Excellence in Medical & Engineering Education ', 'color: #3b82f6; font-size: 14px;');
console.log('This is a demonstration application. All forms are frontend-only and do not send data to a backend.');
