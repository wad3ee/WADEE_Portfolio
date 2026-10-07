"use strict";

/* =========================================
   BOUNCE 02 — LANGUAGE SWITCHER
   ========================================= */

const languageButton = document.querySelector("#language-toggle");

const translations = {
    en: {
        eyebrow: "BOUNCE 02",
        title: "Language Switcher",
        description: "Switch this page between English and Arabic.",
        welcome: "Welcome to my portfolio",
        text: "This page demonstrates dynamic language switching using JavaScript and the DOM.",
        button: "العربية"
    },

    ar: {
        eyebrow: "باونس 02",
        title: "مبدّل اللغة",
        description: "بدّل هذه الصفحة بين اللغة الإنجليزية والعربية.",
        welcome: "مرحبًا بك في ملفي الشخصي",
        text: "توضح هذه الصفحة كيفية تبديل اللغة بشكل ديناميكي باستخدام JavaScript وDOM.",
        button: "English"
    }
};


/* =========================================
   LANGUAGE STATE
   ========================================= */

let currentLanguage = "en";


/* =========================================
   CHANGE LANGUAGE
   ========================================= */

function changeLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    if (language === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    document.querySelector("#eyebrow").textContent =
        translations[language].eyebrow;

    document.querySelector("#title").textContent =
        translations[language].title;

    document.querySelector("#description").textContent =
        translations[language].description;

    document.querySelector("#welcome").textContent =
        translations[language].welcome;

    document.querySelector("#text").textContent =
        translations[language].text;

    languageButton.textContent =
        translations[language].button;
}


/* =========================================
   LANGUAGE BUTTON EVENT
   ========================================= */

languageButton.addEventListener("click", function () {

    if (currentLanguage === "en") {
        changeLanguage("ar");
    } else {
        changeLanguage("en");
    }

});
