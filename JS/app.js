const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      links: [
        {
          logo: "./IMG/MasterStudy-1.svg",
          address: "https://vuejs.org/guide/quick-start.html",
        },
        {
          text: "Courses",
          address: "https://vuejs.org/guide/quick-start.html",
        },
        {
          text: "Course Formats",
          address: "https://vuejs.org/guide/quick-start.html",
        },
        {
          text: "Add Course",
          address: "https://vuejs.org/guide/quick-start.html",
        },
        {
          text: "Pages",
          address: "https://vuejs.org/guide/quick-start.html",
        },
        {
          text: "Demos",
          address: "https://vuejs.org/guide/quick-start.html",
        },
      ],
      items: [
        {
          text: "Blog",
          address:
            "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
        },
        {
          text: "Home",
          address:
            "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
        },
        {
          text: "Shortcodes",
          address:
            "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
        },

        {
          text: "Courses",
          address:
            "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
        },
        {
          text: "Membership",
          address:
            "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
        },

        {
          text: "Typography",
          address:
            "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
        },
      ],
      socials: [
        {
          name: "Linkedin",
          logo: "fa-brands fa-linkedin",
          CEO: "Ryan Roslansky",
          address: "https://it.linkedin.com/",
        },
        {
          name: "Instagram",
          logo: "fa-brands fa-instagram",
          CEO: "Kevin Systrom",
          address: "https://www.instagram.com/",
        },
        {
          name: "Facebook",
          logo: "fa-brands fa-facebook",
          CEO: "Mark Zuckerberg",
          address: "https://it-it.facebook.com/",
        },
        {
          name: "Twitter",
          logo: "fa-brands fa-twitter",
          CEO: "Elon Musk",
          address: "https://twitter.com/?lang=it",
        },
      ],
      icons: [
        {
          name: "desktop",
          classe: "fa-solid fa-desktop",
          funzione: "imposta la visualizzazione desktop",
        },
        {
          name: "sun",
          classe: "fa-regular fa-sun",
          funzione: "attiva o disattiva la mod. giorno/notte",
        },
        {
          name: "wrench",
          classe: "fa-solid fa-wrench",
          funzione: "apre il menu dei tools",
        },
        {
          name: "cart",
          classe: "fa-solid fa-cart-shopping",
          funzione: "rimanda alla sezione acquista",
        },
        {
          name: "phone",
          classe: "fa-solid fa-mobile-screen-button",
          funzione: "imposta la visualizzazione mobile",
        },
      ],
      titles: [
        {
          name: "ABOUT",
          address: "https://mathoverflow.net/",
        },
        {
          name: "CONTACT",
          address: "https://mathoverflow.net/",
          mail: "Info@masterstudy.com",
        },
        {
          name: "PAGES",
          address: "https://mathoverflow.net/",
        },
        {
          name: "BLOG",
          address: "https://mathoverflow.net/",
        },
      ],
      blogs: [
        {
          img: "../IMG/photo-1517520287167-4bbf64a00d66-129x129.jpeg",
          title: 'Our main target is to "Developing Yourself as a Leader"',
          date: "-August 9, 2018",
          address: "https://it.linkedin.com/",
        },
        {
          img: "../IMG/photo-1490376840453-5f616fbebe5b-122x120.jpeg",
          title: "Those Other College Expenses You Aren't Thinking About",
          date: "-June 3, 2015",
          address: "https://it.linkedin.com/",
        },
      ],

      emails: [],

      newEmails: "",
      activeLink: 0,
    };
  },

  methods: {
    sendEmail() {
      newEmails: this.newEmails;
      this.emails.push(this.newEmails);
      this.newEmails = "";
    },
  },
});
app.mount("#app");
