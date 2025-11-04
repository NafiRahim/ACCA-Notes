// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Dark/Light mode toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
        const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// Floating "Go to Index" button
function initFloatingButton() {
    const floatingBtn = document.getElementById('floating-btn');
    if (!floatingBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            floatingBtn.classList.remove('hidden');
            floatingBtn.classList.add('flex');
        } else {
            floatingBtn.classList.add('hidden');
            floatingBtn.classList.remove('flex');
        }
    });

    floatingBtn.addEventListener('click', () => {
        const topIndex = document.getElementById('top-index');
        if (topIndex) {
            topIndex.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initFloatingButton();
});
