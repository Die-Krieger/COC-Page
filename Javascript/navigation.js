/**
 * Navigation script for Die Krieger Website
 * Uses cookies to check if a user has already visited the site
 */

// Cookie functions
// function setCookie(name, value, days) {
//     let expires = '';
//     if (days) {
//         const date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
// }

// function getCookie(name) {
//     const nameEQ = name + "=";
//     const ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }

// function eraseCookie(name) {
//     document.cookie = name + '=; Max-Age=-99999999; path=/';
// }

// // Function to check and update navigation
// function checkNavigationStyle() {
//     // Get all active navigation links
//     const navLinks = document.querySelectorAll('nav ul li a');
    
//     // Get current path
//     const currentPath = window.location.pathname;
    
//     // Find active link based on current path
//     navLinks.forEach(link => {
//         const href = link.getAttribute('href');
//         const isActive = currentPath.endsWith(href) || 
//                          (currentPath.endsWith('/') && href === 'index.html');
        
//         // First remove all active classes
//         link.classList.remove('active');
        
//         // Add active class only to current link
//         if (isActive) {
//             link.classList.add('active');
            
//             // Check if user has already visited the site
//             const hasVisited = getCookie('visitedDieKrieger');
//             if (hasVisited) {
//                 // If yes, add class that hides the marker
//                 link.classList.add('no-marker');
//             }
//         }
//     });
    
//     // If user is new, set cookie for 30 days
//     if (!getCookie('visitedDieKrieger')) {
//         setCookie('visitedDieKrieger', 'true', 30);
//     }
// }

// // Add function to DOMContentLoaded event
// document.addEventListener('DOMContentLoaded', () => {
//     checkNavigationStyle();
    
//     // Add debug button to reset cookies (for testing only)
//     if (window.location.search.includes('debug=true')) {
//         const resetButton = document.createElement('button');
//         resetButton.textContent = 'Reset cookie';
//         resetButton.style.position = 'fixed';
//         resetButton.style.bottom = '10px';
//         resetButton.style.right = '10px';
//         resetButton.style.zIndex = '9999';
//         resetButton.style.padding = '5px 10px';
//         resetButton.style.backgroundColor = '#333';
//         resetButton.style.color = '#fff';
//         resetButton.style.border = 'none';
//         resetButton.style.borderRadius = '5px';
//         resetButton.style.cursor = 'pointer';
        
//         resetButton.addEventListener('click', () => {
//             eraseCookie('visitedDieKrieger');
//             window.location.reload();
//         });
        
//         document.body.appendChild(resetButton);
//     }
// });