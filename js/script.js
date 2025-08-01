document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
    });
    
    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile após clicar
                if (window.innerWidth <= 768) {
                    navbar.style.display = 'none';
                }
            }
        });
    });
    
    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animação ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .skill-item, .project-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar elementos para animação
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-item, .project-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
});