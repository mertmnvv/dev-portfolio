const skillsData = {
    "skills": [
        {
            "name": "HTML",
            "icon": "fab fa-html5",
            "description": "HTML, web sayfalarının iskeletini oluşturmak için kullanılan bir işaretleme dilidir.",
            "color": "#ff5733"
        },
        {
            "name": "CSS",
            "icon": "fab fa-css3-alt",
            "description": "CSS, web sayfalarının tasarımı ve düzenini belirlemek için kullanılır.",
            "color": "#2980b9"
        },
        {
            "name": "JavaScript",
            "icon": "fab fa-js-square",
            "description": "JavaScript, web sayfalarına interaktivite ve dinamik özellikler kazandırmak için kullanılan bir programlama dilidir.",
            "color": "#f4c430"
        },
        {
            "name": "Python",
            "icon": "fab fa-python",
            "description": "Python, veri analitiği, yapay zeka ve genel amaçlı programlama için yaygın olarak kullanılan bir programlama dilidir.",
            "color": "#4B8BBE"
        },
        {
            "name": "C#",
            "icon": "fas fa-code",
            "description": "C#, oyun geliştirme, masaüstü ve web uygulamaları için kullanılan güçlü bir programlama dilidir.",
            "color": "#68217A"
        },
        {
            "name": "Arduino",
            "icon": "fas fa-microchip",
            "description": "Arduino ile elektronik projeler geliştirme ve gömülü sistemler programlama konusunda deneyim sahibiyim.",
            "color": "#00979D"
        }
        // Diğer yetenekler buraya eklenebilir
    ]
};

function createSkillCards() {
    const skillsContainer = document.getElementById('skills-container');
    
    skillsData.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        skillCard.innerHTML = `
            <i class="${skill.icon}" style="color: ${skill.color}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        
        skillsContainer.appendChild(skillCard);
    });

    // Slider kontrolleri
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = skillsContainer.querySelector('.skill-card').offsetWidth + 20; // 20 is gap

    prevBtn.addEventListener('click', () => {
        skillsContainer.scrollLeft -= cardWidth;
    });

    nextBtn.addEventListener('click', () => {
        skillsContainer.scrollLeft += cardWidth;
    });
}

document.addEventListener('DOMContentLoaded', createSkillCards);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// About & Goals Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.querySelector('.about-slider-container');
    const prevAboutBtn = document.querySelector('.prev-about-btn');
    const nextAboutBtn = document.querySelector('.next-about-btn');
    
    if (aboutContainer && prevAboutBtn && nextAboutBtn) {
        const slideWidth = aboutContainer.clientWidth;
        
        prevAboutBtn.addEventListener('click', () => {
            aboutContainer.scrollLeft -= slideWidth;
        });
        
        nextAboutBtn.addEventListener('click', () => {
            aboutContainer.scrollLeft += slideWidth;
        });
    }
});

// Experience Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const expContainer = document.querySelector('.experience-container');
    const prevExpBtn = document.querySelector('.prev-exp-btn');
    const nextExpBtn = document.querySelector('.next-exp-btn');
    
    if (expContainer && prevExpBtn && nextExpBtn) {
        const timeline = expContainer.querySelector('.timeline');
        const timelineItems = timeline.querySelectorAll('.timeline-item');
        const itemWidth = timelineItems[0].offsetWidth + 40; // 40 is gap
        
        let currentPosition = 0;
        const maxScroll = (timelineItems.length - 1) * itemWidth;
        
        prevExpBtn.addEventListener('click', () => {
            currentPosition = Math.max(currentPosition - itemWidth, 0);
            timeline.style.transform = `translateX(-${currentPosition}px)`;
        });
        
        nextExpBtn.addEventListener('click', () => {
            currentPosition = Math.min(currentPosition + itemWidth, maxScroll);
            timeline.style.transform = `translateX(-${currentPosition}px)`;
        });
    }
});

// Navbar scroll behavior - sadece mobilde çalışacak
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Logo kontrolü
    if (currentScroll > 100) {
        logo.classList.add('logo-visible');
    } else {
        logo.classList.remove('logo-visible');
    }
    
    // Navbar kontrolü - sadece mobil ekranlarda
    if (window.innerWidth <= 768) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Aşağı scroll
            navbar.classList.add('navbar-hidden');
        } else {
            // Yukarı scroll
            navbar.classList.remove('navbar-hidden');
        }
    }
    
    lastScroll = currentScroll;
});

// Ekran boyutu değiştiğinde navbar'ı kontrol et
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('navbar-hidden');
    }
}); 