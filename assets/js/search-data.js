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
  },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "No publications yet.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "projects-calculator",
          title: 'Calculator',
          description: "Browser calculator with basic arithmetic operations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Calculator/";
            },},{id: "projects-caml-capital",
          title: 'Caml Capital',
          description: "Terminal recreation of Monopoly done in OCaml",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Caml_Capital/";
            },},{id: "projects-embedded-jump",
          title: 'Embedded Jump',
          description: "Pygame recreation of Doodle Jump controlled with FRDM-KL46Z microcontroller",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Embedded_Jump/";
            },},{id: "projects-etch-a-sketch",
          title: 'Etch-A-Sketch',
          description: "Web-based Etch-A-Sketch recreation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Etch_A_Sketch/";
            },},{id: "projects-exercise-engine",
          title: 'Exercise Engine',
          description: "Information retrieval system for exercises",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Exercise_Engine/";
            },},{id: "projects-gymbuddy",
          title: 'GymBuddy',
          description: "Fitness companion mobile app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/GymBuddy/";
            },},{id: "projects-to-do-manager",
          title: 'To-Do Manager',
          description: "A website for managing your to-do list",
          section: "Projects",handler: () => {
              window.location.href = "/projects/To-Do_Manager/";
            },},{
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
