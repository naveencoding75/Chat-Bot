(function() {
    const chatbotDiv = document.createElement('div');
    chatbotDiv.id = 'digital-learning-chatbot';
    document.body.appendChild(chatbotDiv);

    const iframe = document.createElement('iframe');
    iframe.src = 'https://naveencoding75.github.io/Chat-Bot/index.html'; // Replace with your hosted index.html URL (e.g., https://your-site.com/index.html or ./index.html for local testing)
    iframe.style.width = '700px';
    iframe.style.maxWidth = '95%';
    iframe.style.height = '800px';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '50%';
    iframe.style.left = '50%';
    iframe.style.transform = 'translate(-50%, -50%)';
    iframe.style.zIndex = '1000';
    iframe.style.display = 'block'; // Visible by default for testing
    chatbotDiv.appendChild(iframe);

    const startButton = document.createElement('button');
    startButton.className = 'start-learning-btn';
    startButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-4a2 2 0 012-2h10a2 2 0 012 2v4h-4M12 4v6" />
        </svg>
    `;
    startButton.style.position = 'fixed';
    startButton.style.bottom = '30px';
    startButton.style.right = '30px';
    startButton.style.width = '60px';
    startButton.style.height = '60px';
    startButton.style.background = '#14b8a6';
    startButton.style.color = '#fff';
    startButton.style.border = 'none';
    startButton.style.borderRadius = '50%';
    startButton.style.cursor = 'pointer';
    startButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    startButton.style.display = 'flex';
    startButton.style.alignItems = 'center';
    startButton.style.justifyContent = 'center';
    startButton.style.zIndex = '1001';
    startButton.onclick = function() {
        iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
    };
    document.body.appendChild(startButton);
})();