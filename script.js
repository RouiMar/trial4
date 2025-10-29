// Global JavaScript functionality for CodeScape Learning Platform

// Smooth scrolling for lesson navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to lesson navigation links
    const lessonLinks = document.querySelectorAll('.lesson-nav a');
    
    lessonLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active state to current section in lesson navigation
    const lessonSections = document.querySelectorAll('.lesson-section');
    const lessonNavLinks = document.querySelectorAll('.lesson-nav a');
    
    function setActiveNavLink() {
        let currentSection = '';
        
        lessonSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        lessonNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#${currentSection}') {
                link.classList.add('active');
            }
        });
    }
    
    // Only run on pages with lesson navigation
    if (lessonSections.length > 0) {
        window.addEventListener('scroll', setActiveNavLink);
        setActiveNavLink(); // Set initial active state
    }
    
    // Code syntax highlighting helper (basic implementation)
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        // Simple keyword highlighting for demonstration
        let html = block.innerHTML;
        
        // HTML tags
        html = html.replace(/&lt;(\/?)([a-zA-Z][a-zA-Z0-9]*)/g, '&lt;$1<span class="html-tag">$2</span>');
        
        // HTML attributes
        html = html.replace(/([a-zA-Z-]+)=/g, '<span class="html-attr">$1</span>=');
        
        // CSS properties
        html = html.replace(/([a-zA-Z-]+):/g, '<span class="css-prop">$1</span>:');
        
        block.innerHTML = html;
    });
});

// Add basic syntax highlighting styles
const style = document.createElement('style');
style.textContent = `
.html-tag { color: #569cd6; }
.html-attr { color: #9cdcfe; }
.css-prop { color: #d7ba7d; }
.lesson-nav a.active { background-color: rgba(106, 13, 173, 0.3) !important; font-weight: bold; }
`;
document.head.appendChild(style);

// Utility function for template loading in practice area
const practiceTemplates = {
    'blank': {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Practice Page</title>
</head>
<body>
    
</body>
</html>`,
        css: `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}`
    },
    'html-basics': {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Basics Practice</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
    <h2>About Me</h2>
    <p>Here's some information about me.</p>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>
    <a href="#">This is a link</a>
</body>
</html>`,
        css: `body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    line-height: 1.6;
}`
    },
    'css-basics': {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Basics Practice</title>
</head>
<body>
    <div class="container">
        <header>
            <h1>My Styled Page</h1>
        </header>
        <main>
            <div class="card">
                <h2>Card Title</h2>
                <p>This is a card with some content.</p>
                <button>Click Me</button>
            </div>
            <div class="card">
                <h2>Another Card</h2>
                <p>This is another card with different content.</p>
                <button>Learn More</button>
            </div>
        </main>
    </div>
</body>
</html>`,
        css: `body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background-color: #6a0dad;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 30px;
}

.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

button {
    background-color: #6a0dad;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #5a0ca8;
}`
    }
};

// Export template function for practice area
if (typeof window !== 'undefined') {
    window.practiceTemplates = practiceTemplates;
}