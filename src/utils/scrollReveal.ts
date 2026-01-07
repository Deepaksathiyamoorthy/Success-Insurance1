import ScrollReveal from 'scrollreveal';

const scrollRevealConfig: scrollReveal.ScrollRevealObjectOptions = {
    distance: '50px',
    duration: 600, // Faster animation (was 1000ms)
    easing: 'ease-out',
    reset: true, // Animations repeat when scrolling
    viewFactor: 0.2,
    mobile: true,
    opacity: 0, // Start with elements invisible
    origin: 'bottom', // Default direction
};

export const sr = ScrollReveal(scrollRevealConfig);

export const revealSettings = (delay: number = 0) => ({
    ...scrollRevealConfig,
    delay,
});
