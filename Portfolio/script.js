// Menu mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Formulário de contato
const form = document.getElementById('form-contato');
const status = document.getElementById('status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    status.style.color = 'red';
    status.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  if (!validateEmail(email)) {
    status.style.color = 'red';
    status.textContent = 'Por favor, insira um email válido.';
    return;
  }

  status.style.color = 'green';
  status.textContent = 'Mensagem enviada com sucesso! (simulado)';

  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
