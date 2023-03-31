const openButton = document.querySelector("#openOverlay");
const body = document.querySelector("body");
const successModal = createModal("The message has been sent, thank you!");

openButton.addEventListener("click", e => {
  body.appendChild(successModal);
});

function createModal(content) {

  const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
  
    overlayElement.addEventListener("click", e => {
      e.preventDefault();
      if (e.target === overlayElement) {
        closeElement.click();
      }
  
      //другой способ//
      // if (!e.target.classList.contains("content")) {
      //   closeElement.click();
      // }
    })
  
    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");
  
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");
  
    contentElement.innerHTML = content;
  
    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "X";
    closeElement.href = "#";
  
    closeElement.addEventListener("click", e => {
      e.preventDefault();
  
      body.removeChild(overlayElement);
  
    });
  
    
  
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    
    return overlayElement;

}