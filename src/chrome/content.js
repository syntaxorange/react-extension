const messagesFromReactAppListener = (message, sender, sendResponse) => {
  console.log('[content.js]. Message received', {
    message,
    sender,
  })

  if (
    sender.id === chrome.runtime.id &&
    message.from === 'React' &&
    message.message === 'Hello from React') {
    sendResponse('Hello from content.js');
  }

  if (
    sender.id === chrome.runtime.id &&
    message.from === 'React' &&
    message.message === "delete logo") {

    const logo = document.querySelector('.lnXdpd');
    logo.parentElement.removeChild(logo)
  }

  // sendResponse
}

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);