export default function loadMenu() {
  const container = document.createElement('div');
  container.classList.add('tab-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const list = document.createElement('ul');
  const items = ['Margherita Pizza', 'Carbonara Pasta', 'Tiramisu', 'Bruschetta'];
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  container.append(headline, list);
  return container;
}
