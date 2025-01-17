const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

// MM butonu tıklama olayı
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Overlay'e tıklandığında menüyü kapat
overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Menü linklerine tıklandığında menüyü kapat
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Sayfa dışına tıklandığında menüyü kapat
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
});

// Metin animasyonu
function setupTextAnimation() {
    const firstText = document.querySelector('.first');
    const secondText = document.querySelector('.second');
    let showingFirst = true;

    // İlk metni göster
    firstText.classList.add('active');

    setInterval(() => {
        if (showingFirst) {
            firstText.classList.remove('active');
            setTimeout(() => {
                secondText.classList.add('active');
            }, 800);
        } else {
            secondText.classList.remove('active');
            setTimeout(() => {
                firstText.classList.add('active');
            }, 800);
        }
        showingFirst = !showingFirst;
    }, 4000);
}

// Scroll indikatörü tıklama
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Sayfa yüklendiğinde animasyonu başlat
window.addEventListener('load', setupTextAnimation);

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.classList.add('loading');
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.classList.add('success');
        
        // Show success message
        const successMessage = document.querySelector('.success-message');
        successMessage.style.display = 'flex';
        
        // Reset form
        this.reset();
        
        // Remove success class after animation
        setTimeout(() => {
            submitBtn.classList.remove('success');
            // Success message will automatically slide out due to CSS animation
        }, 5000);
    }, 1500);
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Hover efekti
const hoverElements = document.querySelectorAll('a, button, input, textarea, .nav-toggle');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Tıklama efekti
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Smooth Scroll ve Fade-in Animasyonları
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

// Smooth scroll için
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Önce mevcut section'ı fade-out yap
        sections.forEach(section => {
            if (section.classList.contains('fade-in-section')) {
                section.style.opacity = '0';
                section.style.transform = 'translateY(50px)';
            }
        });

        // Delay ile scroll ve fade-in
        setTimeout(() => {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Scroll tamamlandıktan sonra yeni section'ı göster
            setTimeout(() => {
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
                
                // İçerik elementlerini kademeli göster
                const elements = targetSection.querySelectorAll('.animate-element');
                elements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('fade-in-element');
                    }, 100 * (index + 1));
                });
            }, 400);
        }, 150);
    });
});

// Intersection Observer ile fade-in animasyonu
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Section görünümden çıktığında
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(50px)';
            
            // İçerik elementlerini sıfırla
            const elements = entry.target.querySelectorAll('.animate-element');
            elements.forEach(element => {
                element.classList.remove('fade-in-element');
            });
            return;
        }

        // Delay ile section'ı göster
        setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // İçerik elementlerini kademeli göster
            const elements = entry.target.querySelectorAll('.animate-element');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('fade-in-element');
                }, 100 * (index + 1));
            });
        }, 150);
    });
}, observerOptions);

// Sayfa yüklendiğinde
sections.forEach(section => {
    section.classList.add('section-hidden');
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    sectionObserver.observe(section);
    
    // Animasyon alacak elementleri işaretle
    const animateElements = section.querySelectorAll(
        'h2, h3, p, .skill-card, .service-card, .timeline-item, ' +
        '.experience-item, .work-item, .social-link, .contact-form, ' +
        '.info-card, .contact-item, .contact-note'
    );
    
    animateElements.forEach(element => {
        element.classList.add('animate-element');
    });
});

// Email gönderme fonksiyonu
function sendEmail(e) {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.classList.add('loading');
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // EmailJS konfigürasyonu - template parametrelerini güncelle
    const templateParams = {
        to_name: "Mert",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
    };

    emailjs.send('service_lneobpr', 'template_t524drk', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            
            // Success message göster
            const successMessage = document.querySelector('.success-message');
            successMessage.style.display = 'flex';
            
            // Formu temizle
            document.getElementById('contactForm').reset();
            
            // Success class'ı kaldır
            setTimeout(() => {
                submitBtn.classList.remove('success');
            }, 5000);
        }, function(error) {
            console.log('FAILED...', error);
            submitBtn.classList.remove('loading');
            alert('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        });
} 