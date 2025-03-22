const addContact = document.querySelector('#contact');
const footerSection = document.querySelector('#footer');
const emailSection = document.querySelector('#email');
const whatsappSection = document.querySelector('#whatsapp') ;
const twiterSection = document.querySelector('#twiter');
const githubSection = document.querySelector('#github');
const landingPage = document.querySelector('#landing');
const residaPage = document.querySelector('#resida');
const authPage = document.querySelector('#auth');

addContact.addEventListener('click', () => {
    footerSection.scrollIntoView({ behavior: 'smooth'});
});

emailSection.addEventListener('click', () => {
    const emailAddress = 'otirosemary58@gmail.com';
    const subject = encodeURIComponent('Inquiry about your services');
    const body = encodeURIComponent('Hi there, \n\nI would like to know more about your services.');
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
});

whatsappSection.addEventListener('click', () => {
    const whatsappNumber = '2348134562098';
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappURL, '_blank');
});

twiterSection.addEventListener('click', () => {
    const twiterURL = 'https://twitter.com/@Rosemaryamarac3';
    window.open(twiterURL, '_blank');
});

githubSection.addEventListener('click', () => {
    const githubURL = 'https://github.com/Rosemary-Oti';
    window.open(githubURL, '_blank');
});

landingPage.addEventListener('click', () => {
    const landingURL = 'https://home-page-nu-rouge.vercel.app';
    window.open(landingURL, '_blank');
})
residaPage.addEventListener('click', () => {
    const residaURL = 'https://resida-nine.vercel.app/';
    window.open(residaURL, '_blank');
})
authPage.addEventListener('click', () => {
    const authURL = 'https://auth-app-haho.vercel.app/';
    window.open(authURL, '_blank');
})