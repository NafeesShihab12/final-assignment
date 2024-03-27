// Automated response from the other side
function automatedResponse() {
    const automatedMessage = "This is an automated response.";
    setTimeout(() => {
        appendMessage('Saifuddin', automatedMessage, false);
        scrollToBottom();
    }, 1000);
}

// Function to append message to chat area
function appendMessage(sender, message, isCurrentUser) {
    const chatArea = document.getElementById('chatArea');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');

    if (!isCurrentUser) {
        messageContainer.innerHTML = `
            <div class="sender">${sender}</div>
            <div class="content">${message}</div>
        `;
    } else {
        messageContainer.innerHTML = `
            <div class="sender">${sender}</div>
            <div class="content">${message}</div>
            <div class="status"></div>
        `;
    }

    chatArea.appendChild(messageContainer);

    // Update message status
    if (isCurrentUser) {
        const statusIcon = messageContainer.querySelector('.status');
        statusIcon.innerHTML = '✓';
        statusIcon.style.color = '#808080'; // Gray
        // Simulate delay for delivered status
        setTimeout(() => {
            statusIcon.innerHTML = '✓✓';
            statusIcon.style.color = 'black';
            // Simulate delay for read status
            setTimeout(() => {
                statusIcon.innerHTML = '✓✓';
                statusIcon.style.color = 'green';
            }, 2000);
        }, 1000);
    }
}

// Show typing animation
function showTypingAnimation() {
    const typingIndicator = document.querySelector('.typing-indicator');
    typingIndicator.innerHTML = '<div class="typing-animation"></div> Saifuddin is typing...';
}

// Hide typing animation
function hideTypingAnimation() {
    const typingIndicator = document.querySelector('.typing-indicator');
    typingIndicator.innerHTML = ''; // Clear typing indicator
}

// Send message function
function sendMessage() {
    const inputField = document.getElementById('messageInput');
    const messageContent = inputField.value;

    if (messageContent.trim() !== '') {
        appendMessage('Tomal Ahmed', messageContent, true);
        scrollToBottom();
        inputField.value = '';

        // Simulating response from the other side
        automatedResponse();
    }
}

// Scroll to bottom of the chat area
function scrollToBottom() {
    const chatArea = document.getElementById('chatArea');
    chatArea.scrollTop = chatArea.scrollHeight;
}
