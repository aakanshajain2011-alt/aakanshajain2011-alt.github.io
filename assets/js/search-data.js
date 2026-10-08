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
            },{id: "nav-recent-updates",
          title: "Recent updates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-our-article-on-iowa-state-alumni-migration-was-covered-by-axios-des-moines-news",
          title: 'Our article on Iowa State alumni migration was covered by Axios Des Moines....',
          description: "",
          section: "News",},{id: "news-first-place-in-the-usda-ams-and-aaea-data-visualization-challenge-with-a-basha-and-h-lee-presented-my-job-market-paper-at-the-aaea-annual-meeting-kansas-city-github",
          title: 'First place in the USDA AMS and AAEA Data Visualization Challenge (with A....',
          description: "",
          section: "News",},{id: "news-invited-speaker-at-the-usda-agricultural-marketing-service-webinar-introducing-fame-2-0",
          title: 'Invited speaker at the USDA Agricultural Marketing Service webinar introducing FAME 2.0.',
          description: "",
          section: "News",},{id: "news-presenting-my-job-market-paper-at-the-aaea-south-asia-section-graduate-student-symposium-virtual",
          title: 'Presenting my job market paper at the AAEA South Asia Section Graduate Student...',
          description: "",
          section: "News",},{id: "news-presenting-my-job-market-paper-at-the-southern-economic-association-annual-meeting-in-houston",
          title: 'Presenting my job market paper at the Southern Economic Association Annual Meeting in...',
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
