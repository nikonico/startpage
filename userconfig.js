let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Geneva, Switzerland',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      n: ["https://search.nixos.org/packages?channel=unstable&from=0&size=50&sort=relevance&type=packages&query=", "Nix"],
      k: ["https://kagi.com/search?q=", "Kagi"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: true,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [{
        name: "News",
        links: [
          {
            name: "NYT",
            url: "https://www.nytimes.com/",
            icon: "brand-nytimes",
            icon_color: "#190606",
            key:"n"
          },
          {
            name: "Le Temps",
            url: "https://www.letemps.ch/",
            icon: "news",
            icon_color: "#AD3F5A",
          },
          {
            name: "The Atlentic",
            url: "https://www.theatlantic.com/",
            icon: "news",
            icon_color: "#c94448",
          },
          {
            name: "The Guardian",
            url: "https://www.theguardian.com/",
            icon: "brand-guardian",
            icon_color: "#2885bd",
          },
        ],
      }, 
      {
        name: "Video",
        links: [
          {
            name: "Youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#c94448",
          },
          {
            name: "Netflix",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-netflix",
            icon_color: "#e8373d",
          },
          {
            name: "Jellyfin",
            url: "http://plopi:8096/web/index.html",
            icon: "device-tv",
            icon_color: "#2699DE",
          },
        ],
      },
      {
        name: "Weeb",
        links: [
          {
            name: "Anime",
            url: "https://www.animepahe.com",
            icon: "brand-funimation",
            icon_color: "#a9b665",
          },
          {
            name: "Manhwa",
            url: "https://asuratoon.com/",
            icon: "karate",
            icon_color: "#e78a4e",
          },
          {
            name: "Manga",
            url: "https://manga-zip.info/",
            icon: "torii",
            icon_color: "#ea6962",
          },
        ],
      }, 
    ],
    },
    {
      name: "Study",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "Uni",
          links: [
            {
              name: "SOAS",
              url: "https://ble.soas.ac.uk/login/index.php",
              icon: "gender-genderfluid",
              icon_color: "#ea6962",
            },
            {
              name: "HEP",
              url: "https://elearning.hepl.ch/login/index.php",
              icon: "skull",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "Libgen",
              url: "https://libgen.is/",
              icon: "pdf",
              icon_color: "#d3869b",
            },
            {
              name: "Sci-Hub",
              url: "https://sci-hub.st/",
              icon: "school",
              icon_color: "#a9b665",
            },
            {
              name: "ChatGPT",
              url: "https://chatgpt.com",
              icon: "message-chatbot",
              icon_color: "#ea6962",
            },
          ],
        },
      ],
    },
    {
      name: "server",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "Utils",
          links: [
            {
              name: "Nextcloud",
              url: "http://plopi:8800",
              icon: "brand-nextcloud",
              icon_color: "#7daea3",
            },
            {
              name: "Stirling",
              url: "http://plopi:8089/",
              icon: "pdf",
              icon_color: "#e78a4e",
            },
            {
              name: "vscode",
              url: "http://plopi:8888",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "Media",
          links: [
            {
              name: "Radarr",
              url: "http://plopi:7878",
              icon: "radar-2",
              icon_color: "#89b482",
            },
            {
              name: "Sonarr",
              url: "http://plopi:8989",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "Torrent - film",
              url: "http://plopi:9092",
              icon: "cloud-computing",
              icon_color: "#ea6962",
            },
            {
              name: "Torrent - series",
              url: "http://plopi:9091",
              icon: "cloud-computing",
              icon_color: "#ea6962",
            },
            {
              name: "Jackett",
              url: "http://plopi:9117/UI/Dashboard",
              icon: "jacket",
              icon_color: "#ea6962",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-12.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
var search;
window.addEventListener('load', (event) => {
  // Votre code ici
  search = document.querySelector('tabs-list').shadowRoot.querySelector('search-bar').shadowRoot.querySelector("#search");
  search.classList.add("active");
  //setTimeout(() => search.querySelector("input").focus(), 100);
});
// document.addEventListener('DOMContentLoaded', function() {
//   window.onkeydown = function(e) {
//     console.log(e.key);
//     const key = e.key.toLowerCase();
//     const link = document.querySelector('tabs-list').shadowRoot.querySelector(`a[data-key="${key}"]`);
//     if (link && document.querySelector('tabs-list').shadowRoot.querySelector('search-bar').shadowRoot.activeElement.tagName.toLowerCase() !== "input") {
//       window.location.href = link.href;
//     }
//   };
// });
