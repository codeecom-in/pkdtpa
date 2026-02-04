import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Animate sections
        const sections = gsap.utils.toArray('section:not(.hero)'); // Exclude hero if it has its own animation
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        // Animate cards (staggered)
        const cardContainers = gsap.utils.toArray('.grid-container, .stats-container, .links-container, .members-grid, .committee-grid, .gallery-grid, .events-list, .types-grid');

        cardContainers.forEach((container) => {
            const cards = container.querySelectorAll('.card, .stat-card, .link-card, .member-card, .event-card, .gallery-item, .type-card, .highlight-card');
            if (cards.length > 0) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: container,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        });

        // Animate headers in content pages
        const headers = gsap.utils.toArray('h1, h2:not(.hero-content h2)');
        headers.forEach((header) => {
            gsap.fromTo(
                header,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

    }, { scope: containerRef });

    return containerRef;
};
