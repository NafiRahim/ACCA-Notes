# ACCA Notes by Nafi Rahim

A modern, single-page-per-paper learning platform for ACCA exam preparation.

**Live Site:** https://notes.nafirashidrahim.me

## Overview

This repository contains comprehensive study notes for ACCA (Association of Chartered Certified Accountants) examinations. Each ACCA paper has its own dedicated HTML page with clean, modern design and responsive layout.

## Features

- ✨ **Modern Design** - Built with Tailwind CSS for a clean, professional look
- 🌓 **Dark/Light Mode** - Automatic theme detection with manual toggle
- 📱 **Mobile-First** - Fully responsive design optimized for all devices
- 🔗 **Easy Navigation** - Smooth scrolling with floating "Go to Index" button
- 📚 **Well-Organized** - Each topic in its own section with clear structure
- ⚡ **Lightweight** - No build process required, pure HTML/CSS/JS

## Structure

```
/
├── index.html              # Home page listing all papers
├── fr.html                 # F7 - Financial Reporting notes
├── assets/
│   ├── main.js            # JavaScript for interactivity
│   └── qrcodes/           # QR codes for additional resources (optional)
├── CNAME                   # Custom domain configuration
├── README.md              # This file
└── Financial Reporting Notes/  # Original content (preserved)
```

## Available Papers

### ✅ Completed
- **F7 - Financial Reporting** (`fr.html`)
  - IAS 2 - Inventories
  - IAS 10 - Events After Reporting Date
  - IAS 16 - Property, Plant and Equipment
  - IAS 20 - Government Grants
  - IAS 23 - Borrowing Costs
  - IAS 33 - Earnings Per Share
  - IAS 36 - Impairment of Assets
  - IAS 37 - Provisions, Contingent Assets and Liabilities
  - IAS 38 - Intangible Assets
  - IAS 40 - Investment Property
  - IAS 41 - Agriculture
  - Business Combination

### 🚧 Coming Soon
- F5 - Performance Management
- F8 - Audit & Assurance
- And more...

## How to Add a New Paper

Adding a new ACCA paper is straightforward. Follow these steps:

### 1. Create the HTML File

Create a new HTML file for your paper (e.g., `pm.html` for Performance Management):

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Your paper description">
    <meta name="author" content="Nafi Rahim">
    <title>Your Paper Title - ACCA Notes</title>
    
    <!-- Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
        }
    </script>
    
    <!-- Copy the style section from fr.html for watermarks -->
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Copy the theme toggle button from fr.html -->
    <!-- Copy the floating button from fr.html -->
    
    <main class="relative z-10 max-w-3xl mx-auto px-4 py-16">
        <!-- Your content here -->
    </main>
    
    <script src="assets/main.js"></script>
</body>
</html>
```

### 2. Update index.html

Add a new card for your paper in the "Papers Grid" section:

```html
<a href="your-paper.html" class="group block p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div class="flex items-start justify-between mb-3">
        <span class="inline-block px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-200 dark:bg-blue-900 rounded-full">F5</span>
        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Your Paper Title</h3>
    <p class="text-gray-600 dark:text-gray-400 text-sm">Brief description of the paper content.</p>
</a>
```

### 3. Content Structure

Organize your content into sections:

```html
<section id="topic-name" class="mb-12">
    <h2 class="text-3xl font-bold mb-4">Topic Title</h2>
    
    <h3 class="text-xl font-semibold mt-6 mb-3">Subtitle</h3>
    <p class="mb-4">Your content here...</p>
    
    <hr class="border-gray-300 dark:border-gray-700 my-6">
    
    <!-- More content -->
    
    <div class="mt-8 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
            Thanks for reading — this is Nafi_Rahim 💡 | 
            <a href="https://nafirashidrahim.me" class="text-blue-600 dark:text-blue-400 hover:underline">
                https://nafirashidrahim.me
            </a>
        </p>
    </div>
</section>
```

### 4. Add Top Index

Create a navigation index at the top of your paper:

```html
<nav id="top-index" class="mb-12 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Topics Index</h2>
    <ul class="grid gap-2 md:grid-cols-2">
        <li><a href="#topic1" class="text-blue-600 dark:text-blue-400 hover:underline">Topic 1</a></li>
        <li><a href="#topic2" class="text-blue-600 dark:text-blue-400 hover:underline">Topic 2</a></li>
        <!-- Add more topics -->
    </ul>
</nav>
```

## Design Guidelines

### Colors
- Primary: Blue (#3b82f6)
- Background Light: White
- Background Dark: Gray-900
- Text Light: Gray-900
- Text Dark: Gray-100

### Typography
- Headers: Bold, responsive sizes
- Body: Regular weight, comfortable line height
- Code/Examples: Monospace with background

### Spacing
- Sections: 3rem (mb-12) between major sections
- Subsections: 1.5rem (mb-6) between subsections
- Paragraphs: 1rem (mb-4) between paragraphs

### Components
- **Horizontal Rules**: Use for topic separation
- **Tables**: Responsive with dark mode support
- **Lists**: Bulleted or numbered as appropriate
- **Code Blocks**: Gray background for formulas and examples

## Technologies Used

- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **JavaScript** - Vanilla JS for interactivity
- **HTML5** - Semantic markup
- **GitHub Pages** - Hosting

## Development

No build process is required. Simply:

1. Clone the repository
2. Make your changes
3. Test locally by opening HTML files in a browser
4. Push to GitHub - GitHub Pages will automatically deploy

### Local Testing

Open any HTML file directly in your browser:
```bash
open index.html
# or
open fr.html
```

For a better development experience with live reload, you can use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# Then visit http://localhost:8000
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

If you'd like to contribute to these notes:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

Please maintain the existing code style and structure.

## SEO & Metadata

Each page includes:
- Title tags
- Meta descriptions
- Author attribution
- Keywords
- Open Graph tags (can be added)

## License

© 2024 Nafi Rahim. All rights reserved.

## Contact

- Website: [https://nafirashidrahim.me](https://nafirashidrahim.me)
- Notes Site: [https://notes.nafirashidrahim.me](https://notes.nafirashidrahim.me)

## Acknowledgments

These notes are compiled from various ACCA study materials and are intended for educational purposes only. Always refer to official ACCA resources for the most up-to-date and authoritative information.

---

**Good luck with your ACCA exams! 📚✨**
