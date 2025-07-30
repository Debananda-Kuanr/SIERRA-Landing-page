function sendReview(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let text = `Hi! My name is ${name}. Here's my review: ${message}`;
    let whatsappNumber = "1234567890"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  }