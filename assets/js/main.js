const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const options = {
    root: null,
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const id = entry.target.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('on');

                if(link.getAttribute('href') === `#${id}`){
                    link.classList.add('on');
                }
            });
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});