// @ts-nocheck
import logo from "./extensions/InsigniaLogo.png";

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Insignia Store",
      "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      "Auth.form.welcome.title": "Welcom to Insignia Store",
      "Auth.form.welcome.subtitle": "Login to your account",
      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  tutorials: false,
  notifications: { releases: false },
  locales: [],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
