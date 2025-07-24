let clickCount = 0;
let lastClickTime = 0;
document.body.addEventListener('click', () => {
  const now = Date.now();
  if (now - lastClickTime > 1500) clickCount = 0;
  lastClickTime = now;
  clickCount++;
  if (clickCount >= 20) {
    window.location.href = "add.html";
  }
});
