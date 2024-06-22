const translations = {
    en: {
        title: `About this site`,
        loading: `Loading...`,
    },
    ru: {
        title: `Об этом сайте`,
        loading: `Загрузка...`,
    },
    fr: {
        title: `À propos de ce site`,
        loading: `Chargement...`,
    },
    it: {
        title: `Informazioni su questo sito`,
        loading: `Caricamento...`,
    },
}

function getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0];
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const userLang = getBrowserLanguage();
    setLanguage(userLang);
});