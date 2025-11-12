export default function loadContact() {
  const container = document.createElement('div');
  container.classList.add('tab-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = '+1 (555) 123-4567';

  const address = document.createElement('p');
  address.textContent = '123 Main Street, Food City, Italy';

  const email = document.createElement('p');
  email.textContent = 'info@goldenspoon.com';

  container.append(headline, phone, address, email);
  return container;
}
