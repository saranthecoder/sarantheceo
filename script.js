    document.querySelectorAll('header, section').forEach((el, i) => {
      setTimeout(() => { el.style.opacity = 1; }, 120 + i * 120);
    });
    const toggleBtn = document.getElementById('toggle-theme');
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
      toggleBtn.textContent = 'Dark Mode';
    } else { toggleBtn.textContent = 'Light Mode'; }
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      toggleBtn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    // const cursor = document.getElementById('custom-cursor');
    // window.addEventListener('mousemove', e => {
    //   cursor.style.top = e.clientY + 'px';
    //   cursor.style.left = e.clientX + 'px';
    // });
    // document.querySelectorAll('a, button, .btn').forEach(el => {
    //   el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%, -50%) scale(2)'; });
    //   el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%, -50%) scale(1)'; });
    // });
    // Tabbed Skills
    const tabs = document.querySelectorAll('.skill-tab');
    const skills = document.querySelectorAll('.skill-detail-list');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.category;
        skills.forEach(list => {
          if (list.dataset.category === cat) list.classList.add('active');
          else list.classList.remove('active');
        });
      });
    });

  const clickbtn = document.getElementById('menu-toggle');
  const toggleContainer = document.querySelector('.toggle');

  clickbtn.addEventListener('click', () => {
    toggleContainer.classList.toggle('opentoggle');
    clickbtn.textContent = toggleContainer.classList.contains('opentoggle') ? '❌' :'☰' ;
  });


const cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  // Sprinkle effect
  const sprinkle = document.createElement("div");
  sprinkle.classList.add("sprinkle");

  // Randomize sprinkle direction
  const angle = Math.random() * 2 * Math.PI;
  const distance = 20 + Math.random() * 10;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";

  sprinkle.style.left = e.clientX + "px";
  sprinkle.style.top = e.clientY + "px";
  sprinkle.style.setProperty("--x", dx);
  sprinkle.style.setProperty("--y", dy);

  document.body.appendChild(sprinkle);

  setTimeout(() => sprinkle.remove(), 600); // Remove sprinkle after animation
});
