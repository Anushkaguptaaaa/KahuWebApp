export function initJoeyChat() {
  const joeyChat = document.getElementById('joey-chat');
  const joeyClose = document.getElementById('joey-chat-close');
  const joeyForm = document.getElementById('joey-form');
  const joeyInput = document.getElementById('joey-input');
  const joeySend = document.getElementById('joey-send');
  const joeyMessages = document.getElementById('joey-messages');

  if (!joeyChat || !joeyForm) return;

  let isLoading = false;

  function openJoeyChat() {
    joeyChat.classList.remove('joey-chat--hidden');
    joeyChat.setAttribute('aria-hidden', 'false');
    joeyInput.focus();
  }

  function closeJoeyChat() {
    joeyChat.classList.add('joey-chat--hidden');
    joeyChat.setAttribute('aria-hidden', 'true');
  }

  function appendBubble(text, type) {
    const bubble = document.createElement('div');
    bubble.className = 'joey-chat__bubble joey-chat__bubble--' + type;
    bubble.textContent = text;
    joeyMessages.appendChild(bubble);
    joeyMessages.scrollTop = joeyMessages.scrollHeight;
    return bubble;
  }

  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('#joe-open');
    if (!openBtn) return;
    e.preventDefault();
    if (joeyChat.classList.contains('joey-chat--hidden')) {
      openJoeyChat();
    } else {
      closeJoeyChat();
    }
  });

  if (joeyClose) {
    joeyClose.onclick = closeJoeyChat;
  }

  joeyForm.onsubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const text = joeyInput.value.trim();
    if (!text) return;

    appendBubble(text, 'user');
    joeyInput.value = '';
    isLoading = true;
    joeySend.disabled = true;

    const typingBubble = appendBubble('Joe is thinking...', 'typing');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();

      typingBubble.remove();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to get a response');
      }

      appendBubble(data.reply, 'bot');
    } catch (error) {
      typingBubble.remove();
      appendBubble(error.message || 'Something went wrong. Please try again.', 'bot');
    } finally {
      isLoading = false;
      joeySend.disabled = false;
      joeyInput.focus();
    }
  };
}
