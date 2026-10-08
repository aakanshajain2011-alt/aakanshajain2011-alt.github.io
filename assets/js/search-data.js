// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-full-cv-with-abstracts",
              title: "Full CV (with abstracts)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/assets/pdf/Jain_CV.pdf";
              },
            },{id: "dropdown-short-cv-no-abstracts",
              title: "Short CV (no abstracts)",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/assets/pdf/Jain_CV_short.pdf";
              },
            },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-our-agricultural-policy-review-article-on-iowa-state-alumni-migration-with-g-crespi-was-covered-by-axios-des-moines-news",
          title: 'Our Agricultural Policy Review article on Iowa State alumni migration (with G. Crespi)...',
          description: "",
          section: "News",},{id: "news-presented-my-job-market-paper-at-the-aaea-annual-meeting-in-kansas-city-our-team-with-a-basha-and-h-lee-won-first-place-in-the-usda-ams-and-aaea-local-food-economics-data-visualization-challenge-github",
          title: 'Presented my job market paper at the AAEA Annual Meeting in Kansas City....',
          description: "",
          section: "News",},{id: "news-upcoming-invited-to-speak-at-the-usda-agricultural-marketing-service-webinar-introducing-fame-2-0-on-october-21-as-part-of-our-first-place-data-visualization-challenge-team",
          title: 'Upcoming: invited to speak at the USDA Agricultural Marketing Service webinar introducing FAME...',
          description: "",
          section: "News",},{id: "news-upcoming-my-job-market-paper-was-selected-for-the-aaea-south-asia-section-graduate-student-symposium-virtual-october-23-i-will-present-the-paper-and-serve-as-a-discussant",
          title: 'Upcoming: my job market paper was selected for the AAEA South Asia Section...',
          description: "",
          section: "News",},{id: "news-upcoming-i-will-present-my-job-market-paper-and-serve-as-a-discussant-at-the-southern-economic-association-annual-meeting-in-houston-this-november",
          title: 'Upcoming: I will present my job market paper and serve as a discussant...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
