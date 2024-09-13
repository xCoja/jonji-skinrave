function countdown() {
    // Set the start time to yesterday at 4:00 PM CET, converted to UTC
    var startTimeUTC = Date.UTC(2024, 7, 31, 15, 0, 0); // Adjusted to UTC: 2024-08-17 14:00:00 UTC

    // Calculate the end time: 14 days after the start time
    var countDownDate = startTimeUTC + (14 * 24 * 60 * 60 * 1000); // 14 days in milliseconds

    var x = setInterval(function() {
        // Get the current time in UTC
        var now = new Date().getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown display
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, stop the timer
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);
}

countdown();





function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles-container');
    const bubbleCount = 100;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 3 + 3;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 15}s`;
        bubble.style.background = `rgb(245, 191, 76, ${Math.random() * 0.5 + 0.2})`;

        bubblesContainer.appendChild(bubble);
    }
}
// Show Winners Popup
// Show Winners Popup
const showWinnersButton = document.querySelector('.show-winners');
const popupOverlayWinners = document.getElementById('popup-overlay-winners');
const popupCloseWinners = document.getElementById('popup-close-winners');
const paginationButtons = document.querySelectorAll('.pagination-button');
const pages = document.querySelectorAll('.winners-leaderboard.page');

showWinnersButton.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayWinners.style.display = 'flex';
});

popupCloseWinners.addEventListener('click', (event) => {
    event.stopPropagation();
    popupOverlayWinners.style.display = 'none';
});

popupOverlayWinners.addEventListener('click', (event) => {
    if (event.target === popupOverlayWinners) {
        popupOverlayWinners.style.display = 'none';
    }
});

// Pagination functionality
paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const page = button.getAttribute('data-page');

        // Hide all pages and show the selected page
        pages.forEach(p => {
            if (p.getAttribute('data-page') === page) {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        });

        // Update active state on pagination buttons
        paginationButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});



const YOUTUBE_RSS_FEED = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCxElbn4HsMP9hYoM_dYjX2g'; 
const RSS2JSON_API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

async function fetchYouTubeVideos() {
    const response = await fetch(`${RSS2JSON_API_URL}${encodeURIComponent(YOUTUBE_RSS_FEED)}`);
    const data = await response.json();
    displayYouTubeVideos(data.items.slice(0, 5));
}

function displayYouTubeVideos(videos) {
    const youtubeVideosContainer = document.getElementById('youtube-videos');
    youtubeVideosContainer.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'youtube-video-card';
        videoCard.innerHTML = `
            <a href="${video.link}" target="_blank">
                <img src="${video.thumbnail}" alt="${video.title}" class="youtube-video-thumbnail">
                <div class="youtube-video-title">${video.title}</div>
            </a>
        `;
        youtubeVideosContainer.appendChild(videoCard);
    });
}


window.onload = function() {
    countdown();
    fetchYouTubeVideos();
    createBubbles();

    // Participate Popup
    const participateButton = document.querySelector('.how-to-participate');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupClose = document.getElementById('popup-close');

    participateButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlay.style.display = 'flex';
    });

    popupClose.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    // Show Winners Popup
    const showWinnersButton = document.querySelector('.show-winners');
    const popupOverlayWinners = document.getElementById('popup-overlay-winners');
    const popupCloseWinners = document.getElementById('popup-close-winners');

    showWinnersButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayWinners.style.display = 'flex';
    });

    popupCloseWinners.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayWinners.style.display = 'none';
    });

    popupOverlayWinners.addEventListener('click', (event) => {
        if (event.target === popupOverlayWinners) {
            popupOverlayWinners.style.display = 'none';
        }
    });



    
    document.getElementById('nav1').addEventListener('click', function() {
        var set1 = document.getElementById('set1');
        var set2 = document.getElementById('set2');
        var title = document.querySelector('.winners-title');
        
        set1.style.display = 'block';
        set2.style.display = 'none';
        title.innerHTML = '<span style="color: orange;">Leaderboard</span> - previous winners <span style="color: orange;"> 2024-08-31</span>';
        
        document.getElementById('nav1').classList.add('active');
        document.getElementById('nav2').classList.remove('active');
    });
    
    document.getElementById('nav2').addEventListener('click', function() {
        var set1 = document.getElementById('set1');
        var set2 = document.getElementById('set2');
        var title = document.querySelector('.winners-title');
        
        set1.style.display = 'none';
        set2.style.display = 'block';
        title.innerHTML = '<span style="color: orange;">Leaderboard</span> - previous winners <span style="color: orange;"> 2024-08-17</span>';
        
        document.getElementById('nav2').classList.add('active');
        document.getElementById('nav1').classList.remove('active');
    });
    
    



















    
    // How to Claim Prize Popup
    const howToClaimButton = document.querySelector('.how-to-claim-prize');
    const popupOverlayClaim = document.getElementById('popup-overlay-claim');
    const popupCloseClaim = document.getElementById('popup-close-claim');

    howToClaimButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayClaim.style.display = 'flex';
    });

    popupCloseClaim.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayClaim.style.display = 'none';
    });

    popupOverlayClaim.addEventListener('click', (event) => {
        if (event.target === popupOverlayClaim) {
            popupOverlayClaim.style.display = 'none';
        }
    });

    // Contact Popup
    const contactButton = document.getElementById('contact-button');
    const popupOverlayContact = document.getElementById('popup-overlay-contact');
    const popupCloseContact = document.getElementById('popup-close-contact');

    contactButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayContact.style.display = 'flex';
    });

    popupCloseContact.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayContact.style.display = 'none';
    });

    popupOverlayContact.addEventListener('click', (event) => {
        if (event.target === popupOverlayContact) {
            popupOverlayContact.style.display = 'none';
        }
    });

    // Disclaimer Popup
    const disclaimerButton = document.getElementById('disclaimer-button');
    const popupOverlayDisclaimer = document.getElementById('popup-overlay-disclaimer');
    const popupCloseDisclaimer = document.getElementById('popup-close-disclaimer');

    disclaimerButton.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayDisclaimer.style.display = 'flex';
    });

    popupCloseDisclaimer.addEventListener('click', (event) => {
        event.stopPropagation();
        popupOverlayDisclaimer.style.display = 'none';
    });

    popupOverlayDisclaimer.addEventListener('click', (event) => {
        if (event.target === popupOverlayDisclaimer) {
            popupOverlayDisclaimer.style.display = 'none';
        }
    });
};




