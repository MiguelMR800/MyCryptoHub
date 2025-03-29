
const translations = {
    fi: {
        title: "Tervetuloa Kryptosivulleni!",
        description: "Tämä sivu tarjoaa tietoa kryptovaluutoista, lompakoista ja pörsseistä."
    },
    en: {
        title: "Welcome to My Crypto Page!",
        description: "This page provides information about cryptocurrencies, wallets, and exchanges."
    },
    es: {
        title: "¡Bienvenido a mi página de criptomonedas!",
        description: "Esta página ofrece información sobre criptomonedas, billeteras y exchanges."
    },
    ru: {
        title: "Добро пожаловать на мою крипто-страницу!",
        description: "Эта страница содержит информацию о криптовалютах, кошельках и биржах."
    },
    et: {
        title: "Tere tulemast minu krüptolehele!",
        description: "See leht pakub teavet krüptovaluutade, rahakottide ja börside kohta."
    },
    pt: {
        title: "Bem-vindo à minha página de criptomoedas!",
        description: "Esta página fornece informações sobre criptomoedas, carteiras e exchanges."
    },
    zh: {
        title: "欢迎来到我的加密货币页面！",
        description: "本页面提供关于加密货币、钱包和交易所的信息。"
    }
};

document.getElementById("language-selector").addEventListener("change", function () {
    let lang = this.value;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
});
