const copy = {
  en: {
    snakeSmtpCaseTitle: "Snake KeyLogger · distinguish SMTP acceptance and rejection",
    snakeSmtpCaseSummary: "Compare two outbound mail submissions at the final SMTP reply.",
    netSupportRecurrenceCaseTitle: "NetSupport RAT · separate a one-off POST from recurring traffic",
    netSupportRecurrenceCaseSummary: "Compare the two HTTP destinations, their responses and connection timelines.",
    raspberryRobinTlsCaseTitle: "Raspberry Robin · scope encrypted traffic after a reported WebDAV download",
    raspberryRobinTlsCaseSummary: "Use visible TLS handshake metadata to track early and later connections.",
    agentTeslaFtpCaseTitle: "AgentTesla · verify uploads across FTP control and data channels",
    agentTeslaFtpCaseSummary: "Match server-advertised passive ports to observed data connections and completion replies.",
    july02PandaCaseTitle: "Emotet and Zeus Panda · distinguish HTTP and TLS on TCP/443",
    july02PandaCaseSummary: "Compare plaintext HTTP with a TLS ClientHello on the same destination port.",
    feb26TrickbotCaseTitle: "Trickbot · investigate a TCP/445 burst before DC egress",
    feb26TrickbotCaseSummary: "Compare the host pair’s baseline, a successful SMB1 share connect, and the DC’s nearby web request.",
    july19TrickbotCaseTitle: "Trickbot · trace file writes to the C$ share",
    july19TrickbotCaseSummary: "Connect two successful SMB1 writes to the administrative disk share and distinguish nearby named-pipe traffic.",
    august17TrickbotCaseTitle: "Emotet and Trickbot · distinguish two DC web requests",
    august17TrickbotCaseSummary: "Use the request path and packet order to isolate which HTTP request matches earlier TCP/445 data.",
    october04TrickbotCaseTitle: "Trickbot · correlate SMB activity with a DC HTTP request",
    october04TrickbotCaseSummary: "Compare an internal TCP/445 data burst with the DC’s subsequent request for the same URL.",
    march04TrickbotCaseTitle: "Trickbot · narrow a busy SMB pair to two file writes",
    march04TrickbotCaseSummary: "Rank two hosts’ TCP/445 sessions, then verify which file writes the DC acknowledged.",
    april30TrickbotCaseTitle: "Trickbot · trace SMB writes and named pipes",
    april30TrickbotCaseSummary: "Follow confirmed file writes to a domain controller and assess the adjacent named-pipe traffic.",
    may24TrickbotCaseTitle: "Trickbot · distinguish SMB transfer from reverse probes",
    may24TrickbotCaseSummary: "Use the Active Directory capture to tell workstation-to-DC writes apart from later TCP probes in the opposite direction.",
    june29TrickbotCaseTitle: "Trickbot · separate SMB transfer from HTTP egress",
    june29TrickbotCaseSummary: "Trace a domain-controller write session, then scope the workstation’s separate HTTP POST.",
    august07TrickbotCaseTitle: "Trickbot · isolate the SMB file-write session",
    august07TrickbotCaseSummary: "Separate the first TCP/445 attempt from the session with successful file writes.",
    wannacryCaseTitle: "WannaCry · tracing SMB fan-out",
    wannacryCaseSummary: "Follow the change from one TCP/445 originator to several lab workstations.",
    weekTrickbotCaseTitle: "One week of Trickbot · the SMB pivot",
    weekTrickbotCaseSummary: "Find the workstation-to-DC transfer within a week of network activity.",
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
    snakeSmtpCaseTitle: "Snake KeyLogger · SMTP 메시지 수락과 거부 구분",
    snakeSmtpCaseSummary: "외부 메일 제출 두 건을 최종 SMTP 응답으로 구분합니다.",
    netSupportRecurrenceCaseTitle: "NetSupport RAT · 단발 POST와 반복 트래픽 구분",
    netSupportRecurrenceCaseSummary: "두 HTTP 목적지의 응답과 연결 타임라인을 대조합니다.",
    raspberryRobinTlsCaseTitle: "Raspberry Robin · WebDAV 다운로드 보고와 TLS 타임라인",
    raspberryRobinTlsCaseSummary: "TLS 핸드셰이크에서 보이는 메타데이터로 초기와 후속 연결을 추적합니다.",
    agentTeslaFtpCaseTitle: "AgentTesla · FTP 제어·데이터 채널로 업로드 확인",
    agentTeslaFtpCaseSummary: "서버가 알린 수동 모드 포트를 실제 데이터 연결 및 완료 응답과 대조합니다.",
    july02PandaCaseTitle: "Emotet과 Zeus Panda · TCP/443에서 HTTP와 TLS 구분",
    july02PandaCaseSummary: "같은 목적지 포트에서 평문 HTTP와 TLS ClientHello를 대조합니다.",
    feb26TrickbotCaseTitle: "Trickbot · DC 외부 요청 직전의 TCP/445 급증 조사",
    feb26TrickbotCaseSummary: "두 호스트의 평소 연결, SMB1 공유 연결 성공, 인접한 DC 웹 요청을 비교합니다.",
    july19TrickbotCaseTitle: "Trickbot · C$ 관리 공유의 파일 쓰기 추적",
    july19TrickbotCaseSummary: "SMB1 파일 쓰기 성공 응답을 C$ 관리 공유와 연결하고 인접한 명명된 파이프 활동을 구분합니다.",
    august17TrickbotCaseTitle: "Emotet과 Trickbot · DC의 HTTP 요청 두 건 구분",
    august17TrickbotCaseSummary: "요청 경로와 패킷 순서로 앞선 TCP/445 데이터와 일치하는 HTTP 요청을 찾습니다.",
    october04TrickbotCaseTitle: "Trickbot · SMB 트래픽과 DC의 HTTP 요청 대조",
    october04TrickbotCaseSummary: "내부 TCP/445 데이터 전송 직후 DC가 같은 URL로 요청을 보냈는지 확인합니다.",
    march04TrickbotCaseTitle: "Trickbot · 여러 SMB 연결에서 성공한 파일 쓰기 찾기",
    march04TrickbotCaseSummary: "두 호스트의 TCP/445 연결을 비교하고 DC가 수락한 파일 쓰기를 확인합니다.",
    april30TrickbotCaseTitle: "Trickbot · SMB 파일 쓰기와 명명된 파이프",
    april30TrickbotCaseSummary: "도메인 컨트롤러로 전송된 파일 쓰기와 전후의 명명된 파이프 통신을 추적합니다.",
    may24TrickbotCaseTitle: "Trickbot · SMB 파일 전송과 역방향 탐색 구분",
    may24TrickbotCaseSummary: "Active Directory 캡처에서 워크스테이션의 DC 파일 쓰기와 이후 역방향 TCP 연결 시도를 구분합니다.",
    june29TrickbotCaseTitle: "Trickbot · 내부 SMB 전송과 외부 HTTP 통신",
    june29TrickbotCaseSummary: "DC 파일 쓰기와 워크스테이션의 외부 HTTP POST를 각각 추적합니다.",
    august07TrickbotCaseTitle: "Trickbot · SMB 파일 쓰기 세션 찾기",
    august07TrickbotCaseSummary: "최초 TCP/445 연결 시도와 파일 쓰기가 성공한 세션을 구분합니다.",
    wannacryCaseTitle: "WannaCry · SMB 연결 확산 추적",
    wannacryCaseSummary: "한 호스트에서 시작한 TCP/445 연결이 여러 실습 호스트로 이어지는 흐름을 봅니다.",
    weekTrickbotCaseTitle: "일주일간의 Trickbot · SMB 전송 추적",
    weekTrickbotCaseSummary: "일주일 치 트래픽에서 워크스테이션과 도메인 컨트롤러 간 파일 전송 근거를 찾습니다.",
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
