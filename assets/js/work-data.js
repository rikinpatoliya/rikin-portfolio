// ============================================================
// Work Experience Data Model & Global Settings
// Modify these constants to update your years of experience
// and live apps count everywhere across the website.
// ============================================================
const YEARS_OF_EXPERIENCE = "8+";
const LIVE_APPS_COUNT = "15+";

const workExperience = [
  {
    company: "Techvizor",
    role: "Senior Mobile Developer",
    dateRange: "April 2021 - Present",
    isActive: true,
    tags: ["Flutter", "Dart", "Clean Architecture", "Firebase", "Stripe"],
    achievements: [
      "Led a team of 2 mobile developers, driving code reviews, task planning, technical guidance, and mentoring to ensure consistent delivery quality.",
      "Participated in technical interviews, effort estimation, sprint planning, and project delivery discussions with cross-functional stakeholders.",
      "Architected and delivered 15+ Flutter and Android applications across news, CRM, HRMS, healthcare, booking, and enterprise automation domains.",
      " Designed scalable mobile architectures using Flutter, MVVM, Clean Architecture, Firebase, REST APIs, Supabase, Directus, and BLE integrations.",
      "Improved application stability through crash analysis, memory optimization, and Firebase Crashlytics monitoring, significantly reducing production issues.",
      "Managed end-to-end Play Store releases, production support, and feature deployments; contributed to Rumble: Stream & Watch Videos (5M+ downloads)."

    ]
  },
  {
    company: "Movie Card Sales Pvt Ltd",
    role: "Flutter & Mobile Specialist",
    dateRange: "Nov 2018 - March 2021",
    isActive: false,
    tags: ["Flutter", "Android", "REST APIs", "Git"],
    achievements: [
      "Developed and maintained Android applications for Carnival Cinema, supporting movie ticket booking, promotional campaigns, and customer engagement workflows.",
      "Built real-time movie ticket booking features including seat selection, booking synchronization, coupon management, and transaction processing.",
      "Integrated multiple payment solutions including Credit/Debit Cards, Wallets, Razorpay, and PhonePe to enable secure and seamless payment experiences.",
      "Developed features using Java and Kotlin while integrating REST APIs and optimizing application performance for a smooth user experience.",
      "Collaborated with product, backend, and QA teams to deliver production-ready releases, troubleshoot issues, and maintain application stability."
    ]
  },
  {
    company: "Smart India Care (P) Ltd",
    role: "Android Developer",
    dateRange: "Oct 2016 - March 2018",
    isActive: false,
    tags: ["Java", "Android SDK", "Native Modules", "E-Commerce"],
    achievements: [
      "Developed and maintained Android applications using Java, including e-commerce and service-based platforms.",
      "Built user-facing features, integrated REST APIs, and implemented dynamic UI components to support business requirements.",
      "Integrated Firebase services including Analytics, Crashlytics, and Push Notifications to improve user engagement and application monitoring.",
      "Performed debugging, issue resolution, and performance improvements to enhance application stability and user experience."
    ]
  },
  {
    company: "FastTicket.in - Sujav Business (P) Ltd",
    role: "Junior Android Developer",
    dateRange: "Jun 2015 - Sept 2016",
    isActive: false,
    tags: ["Android UI", "Java", "SDK Integration", "Debugging"],
    achievements: [
      "Developed Android applications for event and travel ticket booking using Java and Android SDK.",
      "Implemented real-time ticket booking workflows, seat selection, and booking management features.",
      "Integrated payment methods including Credit Cards, Debit Cards, and Net Banking to support secure online transactions.",
      "Worked with REST APIs, debugging, testing, and application maintenance to ensure reliable user experiences."
    ]
  }
];

// ============================================================
// renderWorkTimeline()
// Injects all experience items into .timeline-container
// Called from index.html after all pages have loaded via AJAX
// ============================================================
function renderWorkTimeline() {
  const container = document.querySelector(".timeline-container");
  if (!container) return;

  // Clear previous dynamic items but keep the timeline line
  container.innerHTML = '<div class="timeline-line"></div>';

  let html = "";
  workExperience.forEach(function (item, index) {
    // Alternating left/right: even items align right, odd items align left
    const alignmentClass = index % 2 === 0 ? "timeline-item-right" : "timeline-item-left";
    const activeClass = item.isActive ? "active" : "";

    const tagsHtml = item.tags.map(function (tag) {
      return `<span class="tech-tag">${tag}</span>`;
    }).join("");

    const achievementsHtml = item.achievements.map(function (ach) {
      return `<li>
        <span class="timeline-check-circle">
          <svg class="w-[10px] h-[10px]" fill="none" stroke="currentColor" stroke-width="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <span>${ach}</span>
      </li>`;
    }).join("");

    const dateColorClass = item.isActive ? "text-blue-600" : "text-gray-400";

    html += `
      <div class="timeline-item ${alignmentClass} ${activeClass}">
        <div class="timeline-badge"></div>
        <div class="timeline-meta-wrapper">
          <span class="text-[12px] font-bold ${dateColorClass} uppercase tracking-wider mb-2">${item.dateRange}</span>
          <h4 class="text-lg font-bold text-[#130F49]">${item.role}</h4>
          <span class="text-sm text-gray-500 mt-1 font-medium">${item.company}</span>
        </div>
        <div class="timeline-card-wrapper">
          <div class="timeline-card">
            <div class="flex flex-wrap gap-[8px] mb-4">
              ${tagsHtml}
            </div>
            <ul class="timeline-bullet-list">
              ${achievementsHtml}
            </ul>
          </div>
        </div>
      </div>
    `;
  });

  container.insertAdjacentHTML("beforeend", html);
}

// ============================================================
// updateGlobalStats()
// Scans the DOM and dynamically sets years of experience 
// and live apps count variables from the top constants.
// ============================================================
function updateGlobalStats() {
  var yearsExpElements = document.querySelectorAll(".global-years-exp");
  yearsExpElements.forEach(function (el) {
    el.textContent = YEARS_OF_EXPERIENCE;
  });

  var yearsPlain = YEARS_OF_EXPERIENCE.replace("+", "");
  var yearsPlainElements = document.querySelectorAll(".global-years-exp-plain");
  yearsPlainElements.forEach(function (el) {
    el.textContent = yearsPlain;
  });

  var liveAppsElements = document.querySelectorAll(".global-live-apps");
  liveAppsElements.forEach(function (el) {
    el.textContent = LIVE_APPS_COUNT;
  });
}
