/**
 * Main Application Logic
 * 
 * This file contains the interactive logic for the portfolio.
 * It uses an IIFE to encapsulate scope.
 */

(function() {
    'use strict';

    // DOM Elements
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('a[href^="#"]');

    /**
     * Initialize the application
     */
    const init = () => {
        console.log('Portfolio App Initialized');
        setupSmoothScroll();
        setupScrollObserver();
    };

    /**
     * Setup smooth scrolling for anchor links
     */
    const setupSmoothScroll = () => {
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    /**
     * Setup intersection observer for scroll animations
     * Adds a 'visible' class to elements when they enter the viewport
     */
    const setupScrollObserver = () => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Stop observing once visible
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    };

    // Run initialization
    document.addEventListener('DOMContentLoaded', init);

})();
