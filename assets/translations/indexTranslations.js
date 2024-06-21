const translations = {
    en: {
        toastdate: `Just now`,
        toastautoplay: `The policy of all browsers prohibits auto-playback of content (including music) if you have not interacted with the site before. Right now I don't have the resources and time to fix it. I will do it ASAP, thanks for your understanding!`,
        btnmore: `<i class="fa fa-plus-circle" aria-hidden="true" style="font-size: 14px;color: white;" id="circlebutton"></i> More about me`,
        moreinfo: `I've been interested in web development since 15 years, but never attempted to create websites until I almost 16 because I never knew where to start. By the end of my education, I hope to secure a rewarding job in web development, as it is a lifelong passion of mine.`,
        madeby: `Made with Bootstrap and <span style="color: rgb(255, 101, 101);">&hearts;</span> by me`,
    },
    ru: {
        toastdate: `Только что`,
        toastautoplay: `Политика браузеров запрещает автоматическое воспроизведение контента (включая музыку), если вы не взаимодействовали с сайтом до этого. Сейчас у меня нет ресурсов и времени для того, чтобы исправить это, но я сделаю это как только это представится возможным. Спасибо за ваше понимание!`,
        btnmore: `<i class="fa fa-plus-circle" aria-hidden="true" style="font-size: 14px;color: white;" id="circlebutton"></i> Больше обо мне`,
        moreinfo: `Я интересуюсь веб-разработкой с 15 лет, но никогда не пытался создавать веб-сайты, пока мне не исполнилось 16, потому что я не знал, с чего начать. По окончании обучения я надеюсь получить достойную работу в сфере веб-разработки, поскольку это моя страсть на протяжении всей жизни.`,
        madeby: `Сделано на Bootstrap и с <span style="color: rgb(255, 101, 101);">&hearts;</span> мною`,
    },
    fr: {
        toastdate: `Tout à l'heure`,
        toastautoplay: `La politique de navigateur interdit la lecture automatique du contenu (y compris la musique) si vous n'avez pas interagi avec le site auparavant. Je n'ai ni les ressources ni le temps pour résoudre ce problème, mais je le ferai dès que possible. Merci pour votre compréhension!`,
        btnmore: `<i class="fa fa-plus-circle" aria-hidden="true" style="font-size: 14px;color: white;" id="circlebutton"></i> Plus sur moi`,
        moreinfo: `Je m'intéresse au développement Web depuis l'âge de 15 ans, mais je n'ai jamais essayé de créer des sites Web jusqu'à l'âge de 16 ans parce que je ne savais pas par où commencer. À la fin de ma formation, j'espère obtenir un emploi décent dans le développement Web, car c'est ma passion pour la vie.`,
        madeby: `Fait sur Bootstrap et avec <span style ="color: rgb(255, 101, 101);">&hearts;</span> par moi`,
    },
    it: {
        toastdate: `Proprio ora`,
        toastautoplay: `La politica di tutti i browser vieta la riproduzione automatica dei contenuti (compresa la musica) se non hai interagito con il sito prima. In questo momento non ho le risorse e il tempo per risolverlo. Lo farò al più presto, grazie per la vostra comprensione!`,
        btnmore: `<i class="fa fa-plus-circle" aria-hidden="true" style="font-size: 14px;color: white;" id="circlebutton"></i> Di più su di me`,
        moreinfo: `Mi sono interessato allo sviluppo web dall'età di 15 anni, ma non ho mai provato a creare siti web fino all'età di 16 anni perché non sapevo da dove iniziare. Alla fine della mia formazione, spero di ottenere un lavoro decente nello sviluppo web, perché questa è la mia passione per la vita.`,
        madeby: `Realizzato con Bootstrap  e <span style ="color: rgb(255, 101, 101);">&hearts;</span> da me`,
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