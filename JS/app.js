const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      links: [
        {
          logo: "./IMG/MasterStudy-1.svg",
        },
        {
          text: "Courses",
        },
        {
          text: "Course Formats",
        },
        {
          text: "Add Course",
        },
        {
          text: "Pages",
        },
        {
          text: "Demos",
        },
        {},
      ],
      items: [
        {
          text: "Blog",
        },
        {
          text: "Home",
        },
        {
          text: "Shortcodes",
        },

        {
          text: "Courses",
        },
        {
          text: "Membership",
        },

        {
          text: "Typography",
        },
      ],

      socials: [
        {
          name: "Linkedin",
          logo: "fa-brands fa-linkedin",
          CEO: "Ryan Roslansky",
          href: "https://it.linkedin.com/",
        },
        {
          name: "Instagram",
          logo: "fa-brands fa-instagram",
          CEO: "Kevin Systrom",
          href: "https://www.instagram.com/",
        },
        {
          name: "Facebook",
          logo: "fa-brands fa-facebook",
          CEO: "Mark Zuckerberg",
          href: "https://it-it.facebook.com/",
        },
        {
          name: "Twitter",
          logo: "fa-brands fa-twitter",
          CEO: "Elon Musk",
          href: "https://twitter.com/?lang=it",
        },
      ],
      emails: [],
      activeLink: 0,
    };
  },

  methods: {
    sendEmail() {
      alert("messaggio inviato");
    },
  },
});
app.mount("#app");
