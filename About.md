Digital Learning Chatbot Documentation
Features

User Interface: A sleek, mobile-friendly chatbot widget with a green header (inspired by WhatsApp), chat bubbles for user and bot messages, and an input box with a send button.
Conversation Flow: Users can type questions or "FAQ" to get a list of common questions. The bot responds with step-by-step guides for WhatsApp, Paytm, and Google Maps queries.
FAQ System: Hardcoded JSON data containing FAQs for WhatsApp, Paytm, and Google Maps, with clear, concise tutorials.
Embedding: The chatbot can be embedded into any website using a script tag that injects an iframe, positioned at the bottom-right corner.
Responsive Design: Works on both desktop and mobile devices with a fixed-size widget (350x500px).

Logic

Frontend: Built with HTML, CSS, and JavaScript. The CSS uses flexbox for layout, and chat bubbles are styled to differentiate user and bot messages. JavaScript handles user input, matches it against FAQ questions, and displays responses.
Backend (Simplified): Uses a hardcoded JSON object (faqData) to store FAQs and answers, eliminating the need for a server. The bot searches for keywords in user input to find matching FAQs.
Input Handling: Users can send messages by clicking the "Send" button or pressing Enter. The chat scrolls automatically to the latest message.
No AI Integration: For simplicity, the bonus AI integration (Dialogflow/ChatGPT) was skipped, but the JSON-based FAQ system is extensible for future API integration.

Deployment

Hosting: Host the index.html file on a web server (e.g., GitHub Pages, Netlify). Update the iframe.src in embed.js with the hosted URL.
Embedding: Add the embed.js script to any website's HTML to embed the chatbot as a floating iframe.<script src="URL_TO_YOUR_EMBED_JS"></script>


Note: Replace URL_TO_YOUR_CHATBOT_HTML in embed.js with the actual hosted URL of index.html.

Limitations

The chatbot only responds to exact or partial matches of FAQ questions. For broader queries, it suggests typing "FAQ".
No AI integration means responses are limited to predefined FAQs.
The screen recording demo is not included as it requires external tools to create. You can test the chatbot by hosting index.html and interacting with it in a browser.

How to Extend

Add More FAQs: Update the faqData JSON object with additional questions and answers.
AI Integration: Replace the JSON lookup with an API call to Dialogflow or ChatGPT for dynamic responses.
Styling: Customize CSS in index.html for different themes or sizes.
Backend: Replace the hardcoded JSON with a Node.js/Express server to fetch FAQs from a database.

