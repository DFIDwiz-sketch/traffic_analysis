const copy = {
  en: {
    brand: "Traffic Analysis",
    heroFirst: "Traffic",
    heroSecond: "Analysis",
    eyebrow: "PCAP / NETWORK TRAFFIC",
    sections: "Sections",
    overview: "Overview",
    pcap: "PCAP",
    analysis: "Traffic Analysis",
    resources: "Resources",
    skip: "Skip to content",
    language: "Language",
    darkTheme: "Dark theme",
    guideTitle: "Recognizing Encodings and Decoding with CyberChef",
    guideSummary: "Identify unfamiliar encodings in traffic captures and choose the right CyberChef operation for each layer.",
    guideDate: "24 November 2026",
    guideContents: "On this page",
    backToAnalysis: "Back to Traffic Analysis",
  },
  ko: {
    brand: "트래픽 분석",
    heroFirst: "트래픽",
    heroSecond: "분석",
    eyebrow: "PCAP / 네트워크 트래픽",
    sections: "메뉴",
    overview: "개요",
    pcap: "PCAP",
    analysis: "트래픽 분석",
    resources: "자료실",
    skip: "본문으로 건너뛰기",
    language: "언어",
    darkTheme: "다크 테마",
    guideTitle: "인코딩 알아보기와 CyberChef 해독 가이드",
    guideSummary: "트래픽 캡처에서 낯선 인코딩을 구분하고, 각 겹에 맞는 CyberChef 작업을 고르는 방법을 알아봅니다.",
    guideDate: "2026년 11월 24일",
    guideContents: "목차",
    backToAnalysis: "트래픽 분석으로 돌아가기",
  },
};

const storageKey = "traffic-analysis-language";
const buttons = document.querySelectorAll("[data-language]");
const links = Array.from(document.querySelectorAll("[data-section]"));
const panels = new Map(links.map(({ dataset: { section } }) => [
  section, document.getElementById(`panel-${section}`),
]));

function preferredLanguage() {
  try {
    return localStorage.getItem(storageKey) === "ko" ? "ko" : "en";
  } catch {
    return "en";
  }
}

function showLanguage(language) {
  const strings = copy[language];
  document.documentElement.lang = language;
  const titleKey = document.body.dataset.title;
  document.title = titleKey ? `${strings[titleKey]} · ${strings.brand}` : strings.brand;

  for (const element of document.querySelectorAll("[data-copy]")) {
    element.textContent = strings[element.dataset.copy];
  }
  for (const element of document.querySelectorAll("[data-label]")) {
    const label = strings[element.dataset.label];
    element.setAttribute("aria-label", label);
    if (element.hasAttribute("title")) element.title = label;
  }
  for (const button of buttons) {
    button.setAttribute("aria-pressed", button.dataset.language === language);
  }
  for (const element of document.querySelectorAll("[data-guide-language]")) {
    element.hidden = element.lang !== language;
  }
}

function showSection(focusHeading = false) {
  const hash = location.hash.slice(1);
  if (hash === "main") return;

  const active = panels.has(hash) ? hash : "overview";
  for (const link of links) {
    const current = link.dataset.section === active;
    if (current) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
    panels.get(link.dataset.section).hidden = !current;
  }

  if (focusHeading) {
    panels.get(active).querySelector("h2").focus({ preventScroll: true });
  }
}

for (const button of buttons) {
  button.addEventListener("click", () => {
    const language = button.dataset.language;
    showLanguage(language);
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // The language switch still works when storage is disabled.
    }
  });
}

showLanguage(preferredLanguage());
if (panels.size) {
  window.addEventListener("hashchange", () => showSection(true));
  showSection();
}
