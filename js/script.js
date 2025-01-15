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

document.addEventListener('DOMContentLoaded', function() {
    // Diğer DOMContentLoaded işlemleri devam edebilir
    
    // Skills container kontrolünü kaldır
    // const skillsContainer = document.getElementById('skills-container');
    // if (skillsContainer) {
    //     createSkillCards();
    // }
});

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

// Navbar scroll behavior
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo a');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Logo kontrolü
    if (currentScroll > 100) {
        logo.style.opacity = '0';
    } else {
        logo.style.opacity = '1';
    }
    
    // Mobil navbar kontrolü
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }
    lastScroll = currentScroll;
});

// Mobil menü kontrolü
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            if (!isMenuOpen) {
                navLinks.classList.add('show');
                menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                navLinks.classList.remove('show');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            isMenuOpen = !isMenuOpen;
        });

        // Menü öğelerine tıklandığında menüyü kapat
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                isMenuOpen = false;
            });
        });
    }
});

// Ekran boyutu değiştiğinde navbar'ı kontrol et
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('navbar-hidden');
        isScrollingDown = false;
    }
});

// Yeni fonksiyonlar veya özellikler eklemek için
function newFeature() {
    // kod
}

// E-posta gönderme fonksiyonu
async function sendEmail(event) {
    event.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const notification = document.querySelector('.form-notification');
    const form = document.getElementById('contactForm');
    
    submitBtn.classList.add('loading');
    
    try {
        const result = await emailjs.sendForm(
            'service_lneobpr',
            'template_t524drk',
            form,
            'XVYDzcINnL1OdA2h-'
        );
        
        if(result.status === 200) {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
            form.reset();
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
        submitBtn.classList.remove('loading');
    }
}

// Input validation için event listener'lar
document.querySelectorAll('.input-group input, .input-group textarea').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
});
