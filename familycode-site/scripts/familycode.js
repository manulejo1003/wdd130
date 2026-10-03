const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    nav.classList.toggle('open');

    menu.setAttribute(
        'aria-expanded',
        menu.classList.contains('open')
    );
});

nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
        menu.classList.remove('open');
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
    })
);

document.querySelector('#ano').textContent = new Date().getFullYear();


const numeroWhatsApp = '5513999999999';
// TROQUE pelo número da FamilyCode, somente dígitos com DDI e DDD.

document.querySelector('#form-orcamento').addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const empresa = document.querySelector('#empresa').value.trim();
    const servico = document.querySelector('#servico').value;
    const mensagem = document.querySelector('#mensagem').value.trim();
    const telefone = document.querySelector('#telefone').value.trim();

    const texto = `Olá, FamilyCode! Gostaria de solicitar um orçamento.\n\n*Nome:* ${nome}\n*Empresa/negócio:* ${empresa || 'Não informado'}\n*Serviço:* ${servico}\n*Meu WhatsApp:* ${telefone}\n\n*Sobre o projeto:*\n${mensagem}`;

    window.open(
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`,
        '_blank',
        'noopener,noreferrer'
    );
});