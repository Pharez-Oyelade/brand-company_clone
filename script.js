// document.addEventListener('DOMContentLoaded', () => {
//     const customCursor = document.getElementById('customCursor');
//     const heroSection = document.querySelector('.hero-section');
//     const heroVideo = document.querySelector('.hero-video');


//     // custom cursor follow
//     document.addEventListener('mousemove', (e) => {
//         customCursor.style.top = `${e.clientY}px`;
//         customCursor.style.left = `${e.clientX}px`;
//     });


//     //show or hide custom cursor

//     heroSection.addEventListener('mouseover', () => {
//         customCursor.style.display = 'flex';
//     });

//     heroSection.addEventListener('mouseout', () => {
//         customCursor.style.display = 'none';
//     });
// })


document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('customCursor');
    const heroVideo = document.querySelector('.hero-video');
    const dragCursor = document.getElementById('dragCursor');
    const dragSection = document.querySelector('.featured-engagement-element-wrapper');
    
    const triggerSection = document.getElementById('trigger-section');

    // custom cursor follow
    document.addEventListener('mousemove', (e) => {
        const cursorOffsetX = customCursor.offsetWidth / 2; // Adjust for cursor's center
        const cursorOffsetY = customCursor.offsetHeight / 2; // Adjust for cursor's center

        customCursor.style.top = `${e.clientY - cursorOffsetY}px`;
        customCursor.style.left = `${e.clientX - cursorOffsetX}px`;

        dragCursor.style.top = `${e.clientY - cursorOffsetY}px`;
        dragCursor.style.left = `${e.clientX - cursorOffsetX}px`;
    });

    // Show or hide custom cursor for heroVideo
    heroVideo.addEventListener('mouseenter', () => {
        customCursor.style.display = 'flex';
    });

    heroVideo.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
    });

    // Show or hide custom cursor for dragSection
    dragSection.addEventListener('mouseenter', () => {
        dragCursor.style.display = 'flex';
    });

    dragSection.addEventListener('mouseleave', () => {
        dragCursor.style.display = 'none';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.style.backgroundColor = '#252422';
                document.body.style.color = '#f9cdcd';
            } else {
                document.body.style.backgroundColor = 'white'
                document.body.style.color = '#000';
            }
        });
    }, { threshold: [0.5] });

    observer.observe(triggerSection);

    
});