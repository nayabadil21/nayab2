function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting Attari Electronics!");
  this.reset();
});