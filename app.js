const copy = {
  en: {
    brand: "Traffic Analysis",
    eyebrow: "PCAP / NETWORK TRAFFIC",
    heroIntro: "Practical guides for investigating network traffic, from baselining a capture to decoding unfamiliar data.",
    sections: "Sections",
    overview: "Overview",
    fieldGuides: "Field guides",
    recentInvestigations: "Recent investigations",
    investigations: "Investigations",
    allInvestigations: "View all investigations",
    backToInvestigations: "Back to investigations",
    emotetSmbTitle: "Emotet and Trickbot via SMB",
    emotetSmbSummary: "Trace a workstation’s SMB activity to the Oyster domain controller.",
    trickbotSmbTitle: "Trickbot from client to domain controller",
    trickbotSmbSummary: "Find SMB write activity and distinguish it from unrelated outbound traffic.",
    pcap: "PCAP",
    analysis: "Traffic Analysis",
    resources: "Resources",
    emptyResources: "No resources have been added yet.",
    skip: "Skip to content",
    language: "Language",
    darkTheme: "Dark theme",
    guideTitle: "Recognizing Encodings and Decoding with CyberChef",
    guideSummary: "Identify unfamiliar encodings in traffic captures and choose the right CyberChef operation for each layer.",
    guideDate: "24 November 2026",
    guideContents: "On this page",
    backToAnalysis: "Back to Traffic Analysis",
    backToPcap: "Back to PCAP",
    baselineTitle: "PCAP Baselining Guide",
    baselineTools: "Splunk / Zeek / Arkime",
    baselineSummary: "Establish a capture’s timeline, identify internal hosts, and cross-check your findings in Arkime.",
    copyQuery: "Copy query",
    copied: "Copied",
    copyUnavailable: "Select the query to copy it manually.",
  },
  ko: {
    brand: "트래픽 분석",
    eyebrow: "PCAP / 네트워크 트래픽",
    heroIntro: "캡처의 베이스라인을 잡는 단계부터 낯선 데이터를 디코딩하는 방법까지, 네트워크 트래픽 분석을 위한 실습 가이드입니다.",
    sections: "메뉴",
    overview: "개요",
    fieldGuides: "분석 가이드",
    recentInvestigations: "최근 분석 사례",
    investigations: "분석 사례",
    allInvestigations: "전체 분석 사례 보기",
    backToInvestigations: "분석 사례로 돌아가기",
    emotetSmbTitle: "Emotet에서 Trickbot까지, SMB 이동 추적",
    emotetSmbSummary: "워크스테이션에서 Oyster 도메인 컨트롤러로 이어지는 SMB 통신을 추적합니다.",
    trickbotSmbTitle: "Trickbot의 클라이언트에서 도메인 컨트롤러까지",
    trickbotSmbSummary: "SMB 쓰기 동작을 찾고 별개의 외부 통신과 구분합니다.",
    pcap: "PCAP",
    analysis: "트래픽 분석",
    resources: "자료실",
    emptyResources: "아직 등록된 자료가 없습니다.",
    skip: "본문으로 건너뛰기",
    language: "언어",
    darkTheme: "다크 테마",
    guideTitle: "인코딩 알아보기와 CyberChef 해독 가이드",
    guideSummary: "트래픽 캡처에서 낯선 인코딩을 구분하고, 각 겹에 맞는 CyberChef 작업을 고르는 방법을 알아봅니다.",
    guideDate: "2026년 11월 24일",
    guideContents: "목차",
    backToAnalysis: "트래픽 분석으로 돌아가기",
    backToPcap: "PCAP으로 돌아가기",
    baselineTitle: "PCAP 베이스라이닝 가이드",
    baselineTools: "Splunk / Zeek / Arkime",
    baselineSummary: "캡처의 시간 범위를 파악하고 내부 호스트를 식별한 뒤, Arkime에서 분석 결과를 교차 확인합니다.",
    copyQuery: "쿼리 복사",
    copied: "복사됨",
    copyUnavailable: "쿼리를 선택해 직접 복사해 주세요.",
  },
};

const storageKey = "traffic-analysis-language";
const buttons = document.querySelectorAll("[data-language]");
const links = Array.from(document.querySelectorAll("[data-section]"));
const panels = new Map(links.map(({ dataset: { section } }) => [
  section, document.getElementById(`panel-${section}`),
]));

for (const card of document.querySelectorAll("[data-guide]")) {
  document.querySelector(`[data-guide-list="${card.dataset.guide}"]`).append(card.cloneNode(true));
}

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
  for (const status of document.querySelectorAll("[data-copy-status]")) {
    status.textContent = "";
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
for (const button of document.querySelectorAll("[data-copy-query]")) {
  button.addEventListener("click", async () => {
    const block = button.closest(".query-block");
    const status = block.querySelector("[data-copy-status]");
    const query = block.querySelector("code").textContent;
    const strings = copy[document.documentElement.lang];
    try {
      await navigator.clipboard.writeText(query);
      status.textContent = strings.copied;
    } catch {
      status.textContent = strings.copyUnavailable;
    }
  });
}
if (panels.size) {
  window.addEventListener("hashchange", () => showSection(true));
  showSection();
}
