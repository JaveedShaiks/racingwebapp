import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation: {
      "title": "ABC Racing",
      "message": "upcoming race in March book now",
      "heading": "Image and Video Highlights"
    }
  },
  es: {
    translation: {
      "title": "ABC Racing",
      "message": "Próxima carrera en marzo, reserva ahora",
      "heading": "Destacados de Imágenes y Videos"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
