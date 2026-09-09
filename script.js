document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
  }

  const progress = document.querySelector(".page-progress span");
  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const heroVideo = document.querySelector(".hero-video");
  const replayButton = document.querySelector(".replay-button");

  const english = new Map(Object.entries({
    "云游低空": "Skyplume",
    "背景": "Context", "研究": "Research", "策略": "Strategy", "体验": "Experience", "验证": "Validation", "查看设计": "View design",
    "城市低空公共感知与协商系统": "A public awareness and participation system for urban low-altitude mobility",
    "当无人机进入高密度城市生活，设计如何让一次陌生飞行变得": "As drones enter dense urban life, how might design make an unfamiliar flight",
    "可感知、可解释、可反馈、可协商": "visible, explainable, responsive and negotiable",
    "角色": "Role", "独立研究与体验设计": "Independent research & experience design", "范围": "Scope", "居民端 App + 治理端工作台": "Resident app + governance console", "阶段": "Stage", "概念验证与高保真原型": "Concept validation & high-fidelity prototype", "从问题开始": "Start with the problem",
    "项目命题": "Project thesis", "城市看得见飞行，": "The city can see each flight,", "居民却看不懂它。": "but residents cannot understand it.",
    "现有低空系统解决了“如何安全地飞”，却很少回答航线之下的人：": "Existing low-altitude systems solve how to fly safely, but rarely answer the people beneath the route:",
    "它为什么经过这里、会带来什么影响、出现问题由谁负责。": "Why is it here, what impact will it have, and who is accountable when something goes wrong?",
    "云游低空不是新的空管系统，而是连接居民、运营方与城市治理者的公共交互层。": "Skyplume is not another air-traffic system. It is a public interaction layer connecting residents, operators and city governance.",
    "它将专业运行数据翻译成生活可理解的信息，再让公众反馈回到航线与时段决策。": "It translates operational data into everyday language, then feeds public input back into route and schedule decisions.",
    "变化": "Change", "低空活动进入城市": "Low-altitude activity enters the city", "冲突": "Tension", "生活影响不可理解": "Everyday impact is unclear", "转译": "Translation", "专业数据变成解释": "Operational data becomes explanation", "协商": "Participation", "反馈进入治理闭环": "Feedback enters the governance loop",
    "为什么是深圳": "Why Shenzhen", "低空基础设施已开始成网，": "Low-altitude infrastructure is becoming a network,", "公众体验仍停留在盲区。": "while the public experience remains a blind spot.",
    "深圳同时具备政策密度、产业基础、城市密度与真实应用场景，是观察低空运行与地面生活关系的前置样本。": "Shenzhen combines policy momentum, industry capacity, urban density and real use cases, making it an early testbed for the relationship between flight and life on the ground.",
    "公开数据基线": "Public-data baseline", "深圳低空经济 · 2024": "Shenzhen low-altitude economy · 2024", "来源：深圳市人民政府": "Source: Shenzhen Municipal Government",
    "无人机载货飞行架次": "cargo-drone flights", "已开通无人机航线": "active drone routes", "各类型低空起降设施": "low-altitude take-off and landing sites", "直升机载人飞行架次": "passenger helicopter flights",
    "研究判断": "Research implication", "基础设施和商业运行已经形成规模，公众侧需要同步获得可理解、可预测、可反馈的服务界面。": "Infrastructure and commercial operations have reached scale; the public now needs an interface that makes them understandable, predictable and responsive.", "查看政府公开数据": "View public government data",
    "专业运行层": "Operations layer", "安全运行": "Safe operations", "城市治理层": "Governance layer", "统筹监管": "Coordinated oversight", "公众交互层": "Public interaction layer", "本项目切入": "Project focus",
    "用户研究": "User research", "一次陌生飞行，": "One unfamiliar flight creates", "会制造五个连续断点。": "five consecutive breaks in understanding.",
    "政策与行业资料": "Policy & industry review", "情境观察": "Contextual observation", "居民视角归纳": "Resident-perspective synthesis", "系统能力映射": "System-capability mapping",
    "听见 / 看见": "Hear / see", "陌生噪音或飞行器进入视野，却不知道它是什么。": "An unfamiliar sound or aircraft appears, but its identity is unknown.", "来源不可见": "Source invisible",
    "判断影响": "Assess impact", "无法判断持续时间、是否拍摄、是否接近敏感区域。": "Residents cannot judge duration, filming status or proximity to sensitive areas.", "影响不可知": "Impact unknown",
    "寻找解释": "Seek explanation", "公开信息分散在专业平台，语言与生活场景脱节。": "Public information is fragmented across specialist platforms and disconnected from daily life.", "规则不可懂": "Rules unclear",
    "尝试反馈": "Try to respond", "不知道向社区、运营商还是监管部门表达问题。": "It is unclear whether to contact the community, operator or regulator.", "责任不可找": "Ownership unclear", "等待结果": "Await outcome", "是否受理、如何核验、是否影响后续安排都不透明。": "Acceptance, verification and effects on future operations remain opaque.", "结果不可追": "Outcome untraceable",
    "核心洞察": "Core insight", "居民不一定反对低空飞行。": "Residents are not necessarily opposed to low-altitude flight.", "他们反对的是": "What they resist is disruption that is", "无法预测、无法解释、无法回应": "unpredictable, unexplained and unanswered",
    "居民视角": "Resident perspective", "“我想知道它为什么来，以及什么时候离开。”": "“I want to know why it is here, and when it will leave.”", "需要生活语言，而非航空参数": "Everyday language, not aviation parameters", "需要提前预期，而非事后公告": "Advance expectations, not after-the-fact notices", "需要处理结果，而非提交成功": "Resolved outcomes, not merely successful submission",
    "如何把专业低空运行数据，转译成普通居民能理解、能判断、能参与的信息？": "How might professional low-altitude operations data become information residents can understand, assess and act on?",
    "竞品与机会": "Competitive landscape", "能力都在“如何飞”，": "Most products focus on how to fly,", "缺口留在“如何被理解”。": "leaving a gap in how flight is understood.", "能力维度": "Capability", "公众解释": "Public explanation", "反馈协商": "Feedback & participation", "未覆盖": "None", "基础": "Basic", "较强": "Strong", "核心": "Core",
    "产品策略": "Product strategy", "在专业系统之上，": "Add a public interaction layer", "补一层公共交互。": "above professional systems.", "不替代审批权，不复制空管大屏。只把低空活动转译成事件、影响、原因、责任和反馈状态。": "It does not replace approval or duplicate an air-traffic dashboard. It translates activity into events, impacts, reasons, accountability and feedback status.",
    "治理 / 运营输入": "Governance / operator input", "居民端输出": "Resident-facing output", "公共感知": "Public awareness", "与协商层": "& participation layer", "解释 · 告知 · 协商 · 回溯": "Explain · notify · participate · trace",
    "可感知": "Visible", "附近是否飞、来自哪里、持续多久。": "Know whether a flight is nearby, where it came from and how long it will last.", "可解释": "Explainable", "任务目的、合规状态与影响边界。": "Understand purpose, compliance and impact boundaries.", "可预测": "Predictable", "提前告知时间、频率与变化原因。": "See timing, frequency and reasons for change in advance.", "可协商": "Participatory", "反馈、偏好和社区条件进入决策。": "Bring feedback, preferences and community conditions into decisions.",
    "高保真交互系统": "High-fidelity interaction system", "从选择低空服务，": "From choosing a low-altitude service", "到完成安全确认。": "to completing safety confirmation.", "服务入口": "Services", "首页发现": "Discover", "航线详情": "Route details", "安全确认": "Safety check",
    "低空城市飞行体验 APP · 全流程原型交互设计 · 25 个页面": "Urban low-altitude experience app · end-to-end prototype · 25 screens", "主预约体验线": "Core booking journey", "配套服务支线": "Supporting services", "AR 训练与个人系统": "AR training & profile",
    "治理端体验": "Governance experience", "把居民感知，纳入航线审批与运行复盘。": "Bring resident experience into route approval and operational review.", "管理端不仅看飞行安全，也要看到地面影响、投诉压力与社区可接受条件。": "The governance view must show not only flight safety, but ground impact, complaint pressure and community acceptance.",
    "验证与下一步": "Validation & next steps", "从证据到策略，再到体验与验证，": "From evidence to strategy, experience and validation,", "每一步都形成可追溯的设计闭环。": "every step forms a traceable design loop.",
    "任务 01": "Task 01", "选出合适航线": "Choose a suitable route", "任务 02": "Task 02", "理解服务与安全": "Understand service & safety", "任务 03": "Task 03", "完成预约确认": "Complete the booking",
    "关键迭代方向": "Key iteration", "从展示“飞行数据”，转向解释“它与你的关系”。": "Shift from displaying flight data to explaining what the flight means to you.", "早期表达": "Before", "转译后": "After",
    "公共信任来自": "Public trust comes from", "持续运行的闭环": "a continuously operating loop", "飞行计划": "Flight plan", "服务与告知": "Service & notice", "理解与反馈": "Understanding & feedback", "治理优化": "Governance improvement",
    "项目反思": "Reflection", "真正困难的不是画地图，": "The hard part is not drawing the map,", "而是决定哪些信息应该被看见。": "but deciding which information deserves to be visible.",
    "让每一次飞行，": "Give every flight", "都有原因，也有回应。": "a reason and a response.", "返回项目开头": "Back to the beginning", "云游低空 · UX / Service Design Portfolio": "Skyplume · UX / Service Design Portfolio"
  }));

  Object.entries({
    "2026 起降点目标": "2026 landing-site target", "形成社区、医院、商业区与交通枢纽的多层级网络。": "A multi-level network connecting communities, hospitals, commercial districts and transport hubs.",
    "2026 商业航线目标": "2026 commercial-route target", "物流、医疗、巡检、应急与未来载人场景持续增加。": "Logistics, medical, inspection, emergency and future passenger use cases continue to grow.", "2026 快送人口覆盖目标": "2026 express-delivery coverage target", "效率提升越接近居民日常，解释与协商越不能缺席。": "The closer efficiency gains come to daily life, the more essential explanation and participation become.",
    "通信 · 导航 · 监视 · 空域 · 流量": "Communication · navigation · surveillance · airspace · traffic", "起降点 · 航线 · 运营商 · 风险事件": "Landing sites · routes · operators · risk events", "告知 · 解释 · 反馈 · 偏好 · 回溯": "Notice · explanation · feedback · preferences · traceability", "的干扰。": "disruption.",
    "六类产品覆盖城市治理、专业作业和消费服务，却很少同时处理公众解释、社区偏好与反馈回流。": "Six product categories cover governance, professional operations and consumer services, yet rarely address public explanation, community preferences and feedback together.",
    "态势 / 空域": "Situation / airspace", "航路 / 审批": "Routing / approval", "任务 / 飞控": "Missions / flight control", "订单 / 履约": "Orders / fulfilment", "城市治理底座": "Urban governance foundation", "借用态势与告警，重新组织公众语言。": "Reuse situational awareness and alerts, reorganized in public language.", "SILAS 与星图证明了数字空域能力，但信息仍以管理者为中心。": "SILAS and Xintu demonstrate digital-airspace capability, but their information remains manager-centered.",
    "专业作业闭环": "Professional operations loop", "借用任务追踪，建立责任与结果回溯。": "Reuse mission tracking to establish accountability and outcome traceability.", "DJI 擅长任务、飞控和异常处置，可转译为居民可追踪的事件状态。": "DJI excels at missions, flight control and incident handling; these patterns can become resident-trackable event states.", "真实服务触点": "Real service touchpoints", "借用履约表达，让一次飞行有始有终。": "Reuse fulfilment language so each flight has a clear beginning and end.", "美团让订单进度清晰，却没有解释航线如何影响社区生活。": "Meituan makes order progress clear, but does not explain how routes affect community life.",
    "航线与任务计划": "Routes & mission plans", "审批与运营主体": "Approvals & operators", "气象与禁飞信息": "Weather & no-fly information", "异常告警与处置": "Incident alerts & handling", "附近飞行通知": "Nearby-flight notifications", "目的与影响解释": "Purpose & impact explanation", "隐私与安全边界": "Privacy & safety boundaries", "反馈状态与结果": "Feedback status & outcomes",
    "先按体验目的，而不是航空术语分流。": "Organize entry points by experience goals, not aviation terminology.", "低空观光、AR 航线训练、无人机配送和空域巡检使用四色编码，帮助用户快速建立产品范围。": "Four color-coded categories—sightseeing, AR route training, drone delivery and airspace inspection—help users grasp the service range quickly.", "信息架构": "Information architecture", "四类核心服务并列呈现": "Four core services shown in parallel", "视觉语言": "Visual language", "蓝 · 绿 · 紫 · 红类别编码": "Blue · green · purple · red category coding",
    "用航线卡片完成比较，用社区内容降低陌生感。": "Compare routes through cards and reduce uncertainty through community content.", "价格、时长、风险与体验标签在同一层级呈现，同时保留飞友社区作为真实体验的辅助证据。": "Price, duration, risk and experience tags share one hierarchy, with community stories as supporting evidence.", "核心决策": "Core decision", "快速筛选适合的飞行体验": "Quickly filter suitable flight experiences", "信息密度": "Information density", "三条航线 + 一条社区动态": "Three routes + one community update",
    "把“好不好玩”和“是否安全”放进同一个决策页面。": "Put enjoyment and safety on the same decision page.", "体验证据": "Experience evidence", "时长 · 高度 · 人数 · 航线介绍": "Duration · altitude · group size · route", "信任证据": "Trust evidence", "监控 · 保险 · 运营商 · 气象": "Monitoring · insurance · operator · weather", "高风险服务不靠一枚“同意”按钮草率带过。": "A high-risk service should not be reduced to a single Agree button.", "风险控制": "Risk control", "五项前置确认缺一不可": "All five pre-flight confirmations required", "状态反馈": "Status feedback", "按钮同步显示完成数量": "Button shows confirmation progress", "选择服务": "Choose service", "筛选航线": "Filter routes", "阅读详情": "Review details", "填写预约": "Enter booking",
    "真实运行基础 · 2025": "Real operating baseline · 2025", "治理设计建立在已发生的城市运行之上": "Governance design is grounded in real urban operations", "已建成低空起降点": "completed landing sites", "已开通货运航线": "active cargo routes", "无人机载货运输架次": "cargo-drone trips", "5G-A 及通感基站": "5G-A sensing base stations", "计划审批": "Plan approval", "任务、航线与责任主体": "Mission, route & accountable party", "影响反馈": "Impact feedback", "位置、时段与问题归因": "Location, timing & issue attribution", "运行复盘": "Operational review", "反馈进入下一轮配置": "Feedback informs the next configuration",
    "识别影响热区": "Identify impact hotspots", "将投诉位置、时间、噪音预测与航线叠加。": "Overlay complaint locations, timing and noise forecasts with routes.", "生成审批建议": "Generate approval guidance", "平衡任务优先级、运行效率与社区条件。": "Balance mission priority, operating efficiency and community conditions.", "发布公众解释": "Publish a public explanation", "把专业判断生成面向居民的简洁说明。": "Turn professional judgment into concise resident-facing language.", "回传处理结果": "Return the outcome", "让一次反馈真正改变后续路线或时段。": "Let feedback genuinely change later routes or schedules.",
    "高度 82m · 速度 11m/s": "Altitude 82m · speed 11m/s", "参数准确，但居民难以判断影响": "Accurate parameters, but little help in judging impact", "4 分钟后经过小区东侧": "Passing east of the community in 4 minutes", "低噪音 · 无拍摄任务": "Low noise · no filming mission", "优先回答时间、位置、原因和边界": "Answers timing, location, reason and boundaries first", "运营方提交任务与运行条件": "Operator submits mission and conditions", "把路线、安全与价格转译给用户": "Translate route, safety and price for users", "记录选择、疑问与实际影响": "Record choices, questions and real impact", "调整航线、时段与信息规则": "Adjust routes, schedules and information rules", "更清晰 · 更可预测 · 更可信": "Clearer · more predictable · more trustworthy"
  }).forEach(([key, value]) => english.set(key, value));

  Object.entries({
    "他们反对的是": "What they resist is",
    "云游低空 Skyplume": "Skyplume",
    "《深圳市低空基础设施高质量建设方案（2024—2026年）》": "Shenzhen Low-Altitude Infrastructure High-Quality Development Plan (2024–2026)",
    "来源：深圳市交通运输局公开方案": "Source: Shenzhen Transport Bureau public plan",
    "；项目桌面研究整理。": "; compiled from project desk research.",
    "来源：项目桌面研究、公开投诉场景与居民视角问题归纳。本阶段未虚构访谈样本，真实用户访谈与可用性测试列入后续验证计划。": "Source: project desk research, public complaint scenarios and resident-perspective synthesis. No interview samples were fabricated; real interviews and usability tests are planned for the next validation phase.",
    "来源：SILAS、星图低空云、千寻位置、DJI FlightHub 2、中国电信、": "Source: SILAS, Xingtu Low-Altitude Cloud, Qianxun Location, DJI FlightHub 2, China Telecom, ",
    "深圳已实现飞行计划审批流程闭环；本项目进一步补足公众解释、影响反馈与运行复盘。": "Shenzhen has closed the loop for flight-plan approval; this project adds public explanation, impact feedback and operational review.",
    "来源：深圳政府在线《深圳竞逐“低空经济第一城”》": "Source: Shenzhen Government Online, Shenzhen Competes to Become the Leading Low-Altitude Economy City",
    "每一项界面决策都能回到前期研究假设，并在测试指标中被验证；作品集不只展示结果，也完整呈现问题如何被定义、转译与收敛。": "Every interface decision traces back to an early research hypothesis and forward to a validation metric. The portfolio shows not only outcomes, but how the problem was defined, translated and refined.",
    "用户能否依据时长、价格、风险与体验类型完成首次选择。": "Can users make an initial choice using duration, price, risk and experience type?",
    "用户能否独立填写时段、人数与附加需求，并完成安全确认。": "Can users independently choose a time and group size, add requirements and complete the safety check?",
    "优化结果重新进入下一轮飞行计划": "Improvements feed into the next flight plan",
    "后续需要接入真实航迹、噪音与反馈数据，验证系统是否改善信任。": "Next, real trajectory, noise and feedback data should test whether the system genuinely improves trust.",
    "航线 MED-A-0248": "Route MED-A-0248",
    "？": "?", "；": "; "
  }).forEach(([key, value]) => english.set(key, value));

  Object.entries({
    "77.6 万": "776K", "250 条": "250", "483 个": "483", "2.8 万": "28K", "100 万+": "1M+", "来源：": "Source: ",
    "深圳市交通运输局公开方案": "Shenzhen Transport Bureau public plan", "深圳市政府公开政策文件": "Shenzhen government policy documents",
    "星图 / 天信": "Xingtu / Tianxin", "千寻": "Qianxun", "电信": "China Telecom", "美团": "Meituan", "天信低空通": "Tianxin Low-Altitude Mobility", "美团无人机": "Meituan Drones", "及": "and ", "公开资料。矩阵为设计分析评分，不代表官方评价。": "public materials. The matrix is a design-analysis score, not an official assessment.",
    "身份、健康、风险认知、飞行前状态和意外保险被拆成五项逐条确认，形成明确的知情同意。": "Identity, health, risk awareness, pre-flight status and accident insurance are confirmed separately to create meaningful informed consent.", "时间、目的与影响边界": "Timing, purpose & impact boundaries",
    "观察：完成时间 / 筛选路径": "Observe: completion time / filtering path", "用户能否读懂飞行高度、最大人数、安全保障与服务边界。": "Can users understand altitude, capacity, safety measures and service boundaries?", "观察：信息遗漏 / 理解偏差": "Observe: omissions / misunderstandings", "观察：路径错误 / 中途退出": "Observe: navigation errors / abandonment",
    "每一次服务发布、用户理解与真实反馈，都需要回到下一轮飞行配置，而不是停在一次告知。": "Every service release, user interpretation and real response must inform the next flight configuration instead of ending with a one-way notice.", "公开透明与隐私保护之间，需要明确的数据边界和解释责任。": "Transparency and privacy require explicit data boundaries and accountability for explanation.", "社区偏好不能直接等于禁飞规则，需要与任务公共价值共同评估。": "Community preferences cannot automatically become no-fly rules; they must be weighed against a mission's public value."
  }).forEach(([key, value]) => english.set(key, value));

  const chinese = new Map(Object.entries({
    "01 / Project thesis": "01 / 项目命题",
    "02 / Context": "02 / 背景",
    "03 / Research": "03 / 研究",
    "04 / Opportunity": "04 / 机会",
    "05 / Strategy": "05 / 策略",
    "06 / Experience": "06 / 体验",
    "07 / Governance": "07 / 治理",
    "08 / Validation": "08 / 验证",
    "UX / Service Design · Shenzhen · 2026": "用户体验 / 服务设计 · 深圳 · 2026",
    "UX / SERVICE DESIGN": "用户体验 / 服务设计",
    "How might we": "我们如何能够",
    "YUNYOU LOW ALTITUDE": "云游低空",
    "云游低空 Skyplume": "云游低空",
    "云游低空 · UX / Service Design Portfolio": "云游低空 · 用户体验 / 服务设计作品集",
    "Research · Strategy · Interface · Motion": "研究 · 策略 · 界面 · 动效",
    "APP": "应用",
    "App": "应用",
    "AR": "增强现实",
    "Source:": "来源："
  }));

  const translatableNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim() || node.parentElement?.closest("script, style")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    translatableNodes.push({ node, original: node.nodeValue });
  }

  const languageButtons = [...document.querySelectorAll("[data-lang]")];
  function setLanguage(language) {
    const useEnglish = language === "en";
    const dictionary = useEnglish ? english : chinese;
    const entries = [...dictionary.entries()].sort((a, b) => b[0].length - a[0].length);
    translatableNodes.forEach(({ node, original }) => {
      node.nodeValue = entries
        .sort((a, b) => b[0].length - a[0].length)
        .reduce((value, [source, translated]) => value.replaceAll(source, translated), original);
    });
    document.querySelectorAll("[data-src-en][data-src-zh]").forEach((image) => {
      image.src = useEnglish ? image.dataset.srcEn : image.dataset.srcZh;
      image.alt = useEnglish ? image.dataset.altEn : image.dataset.altZh;
    });
    document.documentElement.lang = useEnglish ? "en" : "zh-CN";
    languageButtons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    localStorage.setItem("skyplume-language", language);
  }

  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  setLanguage(localStorage.getItem("skyplume-language") || "en");

  function updateProgress() {
    const root = document.documentElement;
    const distance = root.scrollHeight - window.innerHeight;
    const value = distance > 0 ? window.scrollY / distance : 0;
    progress.style.width = `${Math.min(100, Math.max(0, value * 100))}%`;
  }

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      const sectionId = visible.target.id;
      navLinks.forEach((link) => {
        const href = link.getAttribute("href").slice(1);
        const directMatch = href === sectionId;
        const experienceMatch = href === "experience" && ["experience", "governance"].includes(sectionId);
        link.classList.toggle("active", directMatch || experienceMatch);
      });
    },
    { threshold: [0.2, 0.45, 0.7], rootMargin: "-18% 0px -55% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));

  replayButton?.addEventListener("click", () => {
    heroVideo.animate(
      [
        { opacity: 0, transform: "scale(.965)", filter: "blur(8px)" },
        { opacity: 1, transform: "scale(1)", filter: "blur(0)" },
      ],
      { duration: 900, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
    replayButton.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(-360deg)" },
      ],
      { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
  });

  const screenButtons = [...document.querySelectorAll("[data-screen]")];
  const phonePanels = [...document.querySelectorAll("[data-panel]")];
  const rationales = [...document.querySelectorAll("[data-rationale]")];

  function showResidentScreen(name) {
    screenButtons.forEach((button) => {
      const active = button.dataset.screen === name;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    phonePanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === name));
    rationales.forEach((panel) => panel.classList.toggle("active", panel.dataset.rationale === name));
  }

  screenButtons.forEach((button) => {
    button.addEventListener("click", () => showResidentScreen(button.dataset.screen));
  });

});
