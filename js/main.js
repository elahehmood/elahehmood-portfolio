const projects = [
  {
    title: "Price Optimization & Customer Clustering with Genetic Algorithms",
    desc: "Applied genetic algorithms for customer segmentation and price optimization, proposing a clustering-based framework to adapt pricing strategies for heterogeneous customer groups.",
    img: "assets/project1.png",
    repo: "https://github.com/elahehmood/Price-Optimization-Customer-Clustering-with-Genetic-Algorithms",
    readme: "https://github.com/elahehmood/Price-Optimization-Customer-Clustering-with-Genetic-Algorithms#readme",
    tech: "Genetic Algorithms, Python, Data Mining"
  },
  {
    title: "Graph Clustering & Data Mining Analysis",
    desc: "Analyzed and compared graph clustering methods to detect communities in large-scale networked data.",
    img: "assets/proj2.svg",
    repo: "https://github.com/elahehmood/Graph-Clustering-Data-Mining-Analysis",
    readme: "https://github.com/elahehmood/Graph-Clustering-Data-Mining-Analysis#readme",
    tech: "Graph Theory, Community Detection"
  },
  {
    title: "WUSTL EHMS IoMT Security Analysis",
    desc: "Performed a security assessment of the WUSTL EHMS dataset focusing on Internet of Medical Things (IoMT) devices, identifying vulnerabilities and proposing resilience recommendations.",
    img: "assets/proj3.svg",
    repo: "https://github.com/elahehmood/WUSTL-EHMS-IoMT-Security-Analysis",
    readme: "https://github.com/elahehmood/WUSTL-EHMS-IoMT-Security-Analysis#readme",
    tech: "Cybersecurity, Risk Assessment"
  },
  {
    title: "Advanced Data Mining Models for Customer Behavior Analytics",
    desc: "Designed and evaluated advanced data mining models to predict and analyze customer behavior, with emphasis on segmentation and retention strategies.",
    img: "assets/proj4.svg",
    repo: "https://github.com/elahehmood/Advanced-Data-Mining-Models-for-Customer-Behavior-Analytics",
    readme: "https://github.com/elahehmood/Advanced-Data-Mining-Models-for-Customer-Behavior-Analytics#readme",
    tech: "Supervised/Unsupervised Learning"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => nav.classList.toggle('show'));

  // populate projects
  const grid = document.getElementById('projects-grid');
  const template = document.getElementById('project-card-template');
  projects.forEach(p => {
    const node = template.content.cloneNode(true);
    const img = node.querySelector('.project-img');
    img.src = p.img;
    img.alt = p.title;
    node.querySelector('.project-title').textContent = p.title;
    node.querySelector('.project-desc').textContent = p.desc;
    node.querySelector('.project-meta').textContent = p.tech;
    node.querySelector('.repo-link').href = p.repo;
    node.querySelector('.readme-link').href = p.readme;
    grid.appendChild(node);
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        if(nav.classList.contains('show')) nav.classList.remove('show');
      }
    });
  });

  // contact form simple validation (no backend)
  const form = document.getElementById('contact-form');
  const sendBtn = document.getElementById('send-btn');
  const status = document.getElementById('send-status');
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      status.textContent = 'Please fill in all fields.';
      return;
    }
    // Show a fake success message (since no backend)
    status.textContent = 'Your message is ready (this is a local demo; to send messages you need a backend).';
    form.reset();
  });
});
