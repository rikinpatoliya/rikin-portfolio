// ============================================================
// Portfolio Data Model
// To add a new project, add a new object to the array below.
// To edit a project, update its object.
// To remove a project, delete its object.
// No changes needed anywhere else in the codebase.
// ============================================================

const portfolioProjects = [
  // ---- Row 1 ----
  {
    projectName: "Healthism Plus",
    projectCategory: "Health Care",
    mainImage: "assets/img/portfolio/healthism/main.jpeg",
    description: [
      "HealthismPlus is launched to enhance people's health and overall well-being. The brand offers multiple solutions to make healthcare accessible and easy. Multiple healthcare-centric services are bundled up under the brand name HealthismPlus. The journey has already started with a privileged healthcare card. The card's purpose is to lower the everyday healthcare expedition of the user.",
      "In effect, the user saves medical expenditures not covered by insurance policies. The other services include - Doctor Appointment Booking, Pathology Lab Booking, Medical Record Maintenance, Medicine Delivery etc."
    ],
    links: {
      googlePlay: {
        image: "assets/img/portfolio/g-play.png",
        link: "https://play.google.com/store/apps/details?id=com.healthismplus.customer"
      },
      appStore: {
        image: "assets/img/portfolio/app-store.png",
        link: "https://apps.apple.com/in/app/healthismplus/id6444691038"
      }
    },
    screenShortList: [
      "assets/img/portfolio/healthism/0.png",
      "assets/img/portfolio/healthism/1.png",
      "assets/img/portfolio/healthism/2.png",
      "assets/img/portfolio/healthism/3.png",
      "assets/img/portfolio/healthism/4.png",
      "assets/img/portfolio/healthism/5.png",
      "assets/img/portfolio/healthism/6.png"
    ]
  },
  {
    projectName: "Roongta Cinema",
    projectCategory: "Entertainment",
    mainImage: "assets/img/portfolio/rcinema/main.png",
    description: [
      "Elevate your cinema experience with effortless movie ticket booking, whether you're in the theatre or enjoying a cozy night at home.",
      "Explore exciting offers exclusively available to our app users."
    ],
    links: {
      googlePlay: {
        image: "assets/img/portfolio/g-play.png",
        link: "https://play.google.com/store/apps/details?id=com.roongta.cinema"
      },
      appStore: {
        image: "assets/img/portfolio/app-store.png",
        link: "https://apps.apple.com/in/app/roongta-cinema/id6476975214"
      }
    },
    screenShortList: [
      "assets/img/portfolio/rcinema/rcinema1.jpg",
      "assets/img/portfolio/rcinema/rcinema2.jpg",
      "assets/img/portfolio/rcinema/rcinema3.jpg",
      "assets/img/portfolio/rcinema/rcinema4.jpg",
      "assets/img/portfolio/rcinema/rcinema5.jpg",
      "assets/img/portfolio/rcinema/rcinema6.jpg"
    ]
  },
  {
    projectName: "Avadh Utopia",
    projectCategory: "Entertainment",
    mainImage: "assets/img/portfolio/avadh/main.png",
    description: [
      "Elevate your cinema experience with effortless movie ticket booking, whether you're in the theatre or enjoying a cozy night at home.",
      "Explore exciting offers exclusively available to our app users."
    ],
    links: {
      googlePlay: {
        image: "assets/img/portfolio/g-play.png",
        link: "https://play.google.com/store/apps/details?id=com.booking.avadhutopia"
      },
      appStore: {
        image: "assets/img/portfolio/app-store.png",
        link: "https://apps.apple.com/in/app/avadh-utopia/id1439066267"
      }
    },
    screenShortList: [
      "assets/img/portfolio/avadh/1.png",
      "assets/img/portfolio/avadh/2.png",
      "assets/img/portfolio/avadh/3.png",
      "assets/img/portfolio/avadh/4.png",
      "assets/img/portfolio/avadh/5.png"
    ]
  },
  // ---- Row 2 ----
  {
    projectName: "Roongta HRMS",
    projectCategory: "Human Resource",
    mainImage: "assets/img/portfolio/hrms/main.jpeg",
    description: [
      "As one of the leading firms in the industry, Roongta Developers always maintains its ongoing pace of technology. Our HRMS mobile apps have met with success by easing HR processes and burdens in recent months since its launch!",
      "Key Features: View company announcements • Location Based Attendance with selfie • View payslip from any year/month • Manage leave balance, apply/cancel/approve/reject leave • Manage Attendance regularization • Approve/Reject workflows."
    ],
    links: {
      googlePlay: {
        image: "assets/img/portfolio/g-play.png",
        link: "https://play.google.com/store/apps/details?id=com.roongtadeveloper.hrms_app"
      },
      appStore: {
        image: "assets/img/portfolio/app-store.png",
        link: "https://apps.apple.com/in/app/hrms-roongta/id1606160805"
      }
    },
    screenShortList: [
      "assets/img/portfolio/hrms/1.png",
      "assets/img/portfolio/hrms/2.png",
      "assets/img/portfolio/hrms/3.png",
      "assets/img/portfolio/hrms/4.png",
      "assets/img/portfolio/hrms/5.png"
    ]
  },
  {
    projectName: "Funnel CRM",
    projectCategory: "Productivity",
    mainImage: "assets/img/portfolio/funnelcrm/main.png",
    description: [
      "Funnel CRM is a powerful customer relationship management app designed for sales teams. It simplifies lead management, follow-ups, and deal tracking all in one place.",
      "Manage your sales pipeline efficiently with real-time updates, activity tracking, and team collaboration features built for modern businesses."
    ],
    links: {
      googlePlay: {
        image: "assets/img/portfolio/g-play.png",
        link: "https://play.google.com/store/apps/details?id=com.funnel.crm"
      },
      appStore: {
        image: "assets/img/portfolio/app-store.png",
        link: "https://apps.apple.com/in/app/funnel-crm/id6450893773"
      }
    },
    screenShortList: [
      "assets/img/portfolio/funnelcrm/1.png",
      "assets/img/portfolio/funnelcrm/2.png",
      "assets/img/portfolio/funnelcrm/3.png",
      "assets/img/portfolio/funnelcrm/4.png",
      "assets/img/portfolio/funnelcrm/5.png"
    ]
  },
  {
    projectName: "Healthism Plus (Provider)",
    projectCategory: "Health Care",
    mainImage: "assets/img/portfolio/healthism/main.jpeg",
    description: [
      "HealthismPlus Provider app is designed for healthcare professionals and service providers. It enables doctors, labs, and pharmacies to manage appointments, orders, and patient interactions through a single platform.",
      "The app streamlines provider workflows, allowing real-time updates on bookings, patient records, and delivery management, ensuring seamless coordination between healthcare providers and patients."
    ],
    links: {
      googlePlay: {
        image: "assets/img/portfolio/g-play.png",
        link: "https://play.google.com/store/apps/details?id=com.healthismplus.provider"
      },
      appStore: {
        image: "assets/img/portfolio/app-store.png",
        link: "https://apps.apple.com/in/app/healthismplus-provider/id6444691039"
      }
    },
    screenShortList: [
      "assets/img/portfolio/healthism-provider/1.jpeg",
      "assets/img/portfolio/healthism-provider/2.jpeg",
      "assets/img/portfolio/healthism-provider/3.jpeg"
    ]
  }
];

// ============================================================
// renderPortfolioGrid()
// Injects all portfolio project cards into .gallery_zoom
// Called from index.html after all pages have loaded via AJAX
// ============================================================
function renderPortfolioGrid() {
  var ul = document.querySelector(".gallery_zoom");
  if (!ul) return;

  var html = "";
  portfolioProjects.forEach(function (project) {

    // Screenshot carousel items
    var screenshotItems = project.screenShortList.map(function (src) {
      return `<li>
                <div class="list_inner">
                  <div class="my_image">
                    <img src="${src}" alt />
                  </div>
                </div>
              </li>`;
    }).join("");

    // Store badge links
    var storeLinks = "";
    if (project.links && project.links.googlePlay && project.links.googlePlay.link) {
      storeLinks += `<li><a href="${project.links.googlePlay.link}" target="_blank"><img src="${project.links.googlePlay.image}" alt="Google Play" /></a></li>`;
    }
    if (project.links && project.links.appStore && project.links.appStore.link) {
      storeLinks += `<li><a href="${project.links.appStore.link}" target="_blank"><img src="${project.links.appStore.image}" alt="App Store" /></a></li>`;
    }

    // Description paragraphs
    var descHtml = project.description.map(function (p) {
      return `<p>${p}</p>`;
    }).join("");

    var storeLinksHtml = storeLinks
      ? `<div class="detailbox"><ul>${storeLinks}</ul></div>`
      : "";

    var screenshotsHtml = screenshotItems
      ? `<div class="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
              <div class="elisc_tm_portfolio_title w-full float-left flex items-end justify-between">
                <div class="elisc_tm_title w-auto float-left">
                  <span class="w-full float-left font-medium uppercase inline-block mb-[12px]">- Projects</span>
                  <h3 class="text-[40px] font-extrabold">Screen shots</h3>
                </div>
                <div class="buttons">
                  <a class="popup_prev_button" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                      <path d="M4.5 1L1.5 4L4.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                  <a class="popup_next_button" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                      <path d="M0.5 1L3.5 4L0.5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="portfolio_list1 w-full float-left mt-[40px]">
                <ul class="owl-carousel gallery_zoom mb-[65px]">
                  ${screenshotItems}
                </ul>
              </div>
            </div>`
      : "";

    html += `
      <li class="mb-[30px] float-left w-1/3 pl-[30px]">
        <div class="list_inner">
          <div class="image relative rounded-[4px] overflow-hidden mb-[25px]">
            <img class="min-w-full relative opacity-0" src="${project.mainImage}" alt />
            <div class="main absolute inset-0 bg-no-repeat bg-size-contain bg-center" data-img-url="${project.mainImage}"></div>
            <a class="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]" href="#"></a>
          </div>
          <div class="details w-full float-left">
            <span class="category inline-block mb-[7px]"><a href="#">${project.projectCategory}</a></span>
            <h3 class="title"><a class="line_effect portfolio_popup" href="#">${project.projectName}</a></h3>
          </div>
        </div>
        <div class="hidden_content_portfolio">
          <div class="popup_details">
            <div class="main_details">
              <div class="textbox">
                ${descHtml}
              </div>
              ${storeLinksHtml}
            </div>
            ${screenshotsHtml}
          </div>
        </div>
      </li>`;
  });

  ul.innerHTML = html;
}

// ============================================================
// initializePortfolio()
// Called from index.html after renderPortfolioGrid() completes.
// Binds all click event handlers on the dynamically rendered items.
// ============================================================
function initializePortfolio() {
  if (typeof elisc_tm_modalbox_portfolio === "function") {
    elisc_tm_modalbox_portfolio();
  }
  if (typeof elisc_tm_data_images === "function") {
    elisc_tm_data_images();
  }
  if (typeof elisc_tm_popup === "function") {
    elisc_tm_popup();
  }
}

