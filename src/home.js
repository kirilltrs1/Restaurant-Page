import './style.css';


export default function loadHome() {
  const container = document.createElement('div');
  container.classList.add('tab-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to The Golden Spoon';

  const img = document.createElement('img');
  img.src = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800';
  img.alt = 'Restaurant interior';
  img.style.width = '400px';
  img.style.borderRadius = '15px';
  img.style.cursor = 'pointer';

  img.addEventListener('click', () => {
  const overlay = document.createElement('div');
  overlay.classList.add('fullscreen-overlay');

  const fullImg = document.createElement('img');
  fullImg.src = img.src;

  overlay.appendChild(fullImg);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
});

  const description = document.createElement('p');
  description.textContent = 'Finest dishes, prepared with passion and elegance.';

  container.append(headline, img, description);
  return container;
}
