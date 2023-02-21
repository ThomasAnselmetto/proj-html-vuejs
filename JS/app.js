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
        },
        {
          name: "Instagram",
          logo: "fa-brands fa-instagram",
          CEO: "Kevin Systrom",
        },
        {
          name: "Facebook",
          logo: "fa-brands fa-facebook",
          CEO: "Mark Zuckerberg",
        },
        {
          name: "Twitter",
          logo: "fa-brands fa-twitter",
          CEO: "Elon Musk",
        },
      ],
    };
  },
  // computed:{

  // }
  // methods:{

  // },
});
app.mount("#app");
