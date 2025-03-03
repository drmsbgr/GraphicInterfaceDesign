// Rastgele renk oluşturacak fonksiyon
function getRandomColor() {
  let button = document.getElementById("colorButton");
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  button.style.backgroundColor = color;
}
