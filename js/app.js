
const chatInput = document.querySelector('.chat-input textarea');
const sendChatbotBtn = document.querySelector('.chat-input span');
const chatBox = document.querySelector('.chatbox');

let userMessage;

const creteChatList = (message, className) => {

    const chatList = document.createElement('li');
    chatList.classList.add('chat', className);
    let chatContent = className === 'outgoin' ? `<p>${message}</p>` : ` <p>Hola 👋 <br>en que puedo ayudarete hoy.?</p>`
    chatList.innerHTML = chatContent;

    return chatList;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatBox.appendChild(creteChatList(userMessage, 'outgoin'));
    setTimeout(() => {
        chatBox.appendChild(creteChatList('Thinkin...', 'incoming'));
    }, 600);

};

sendChatbotBtn.addEventListener('click', handleChat);