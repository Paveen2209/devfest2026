const STORAGE_KEY = "northline_apps_v2";
const ACTIVE_KEY = "northline_active_v2";

const STAGES = [
  {
    id: 1,
    title: "Application received",
    short: "Received",
    doing: "Your materials are in our system. We confirm the role, check required files, and assign a recruiter.",
    turnaround: "24–48 hours",
    milestones: ["Application logged with a tracking ID", "Basic criteria and documents checked", "Recruiter assigned"]
  },
  {
    id: 2,
    title: "Resume & portfolio screen",
    short: "Screening",
    doing: "Your recruiter reviews experience, work samples, and fit against the role. If it looks promising, they invite you to a short conversation.",
    turnaround: "2–3 business days",
    milestones: ["Resume and portfolio reviewed", "Compared with role requirements", "Screening call invitation"]
  },
  {
    id: 3,
    title: "Hiring team review",
    short: "Team review",
    doing: "The hiring manager and team leads look at seniority, craft, and how you might work with the group.",
    turnaround: "2–4 business days",
    milestones: ["Hiring manager review", "Role alignment check", "Go / no-go for interviews"]
  },
  {
    id: 4,
    title: "Interviews & assessment",
    short: "Interviews",
    doing: "You meet the team. This may include a conversation, a pairing session, or a short take-home — always with a clear brief and deadline.",
    turnaround: "3–5 business days",
    milestones: ["Skills conversation or exercise", "Team interview", "Feedback collected"]
  },
  {
    id: 5,
    title: "Decision & offer",
    short: "Decision",
    doing: "The hiring group debriefs, references may be checked, and if we move forward you receive a written offer.",
    turnaround: "2–3 business days",
    milestones: ["Hiring debrief", "Offer approved", "Offer letter shared"]
  }
];

const JOBS = [
  {
    id: "FE-01",
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Remote · Americas / Europe",
    type: "Full-time",
    tags: ["TypeScript", "Design systems", "Accessibility"],
    summary: "Own the candidate-facing product surfaces — status, scheduling, and the moments people actually wait for."
  },
  {
    id: "PD-02",
    title: "Product Designer, Hiring",
    team: "Design",
    location: "San Francisco · Hybrid",
    type: "Full-time",
    tags: ["UX", "Research", "Systems"],
    summary: "Design clarity into a process that is usually opaque. Make next steps obvious without adding noise."
  },
  {
    id: "FS-03",
    title: "Fullstack Software Engineer",
    team: "Platform",
    location: "New York · Remote-friendly",
    type: "Full-time",
    tags: ["APIs", "Node", "React"],
    summary: "Build the application record that candidates and recruiters can both trust."
  },
  {
    id: "ML-04",
    title: "Machine Learning Specialist",
    team: "Applied AI",
    location: "Remote",
    type: "Full-time",
    tags: ["Ranking", "NLP", "Eval"],
    summary: "Help match people to roles without turning hiring into a black box."
  },
  {
    id: "PM-05",
    title: "Technical Product Manager",
    team: "Product",
    location: "Austin · Hybrid",
    type: "Full-time",
    tags: ["Hiring ops", "Roadmaps", "Discovery"],
    summary: "Own the candidate journey from apply to offer, with SLAs the team actually keeps."
  },
  {
    id: "TA-06",
    title: "Talent Partner",
    team: "People",
    location: "Remote",
    type: "Full-time",
    tags: ["Sourcing", "Communication", "Ops"],
    summary: "Be the human on the other side of the tracker — fast replies, honest stages, no radio silence."
  }
];

const SLOTS = [
  { day: "Mon", num: "17", date: "Monday, Nov 17", times: ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"] },
  { day: "Tue", num: "18", date: "Tuesday, Nov 18", times: ["9:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"] },
  { day: "Wed", num: "19", date: "Wednesday, Nov 19", times: ["10:30 AM", "2:30 PM", "4:00 PM"] },
  { day: "Thu", num: "20", date: "Thursday, Nov 20", times: ["11:00 AM", "1:30 PM", "3:00 PM", "4:30 PM"] }
];

const INITIAL = [
  {
    id: "APP-8421",
    name: "Maya Lin",
    initials: "ML",
    email: "maya.lin@example.com",
    role: "Senior Frontend Engineer",
    jobId: "FE-01",
    department: "Engineering",
    location: "Remote",
    appliedDate: "Nov 10, 2026",
    currentStage: 1,
    actionRequired: "none",
    slaDate: "Wednesday, Nov 18 by 5:00 PM",
    recruiter: recruiterSarah(),
    hero: {
      title: "We have your application. Nothing is needed from you.",
      description: "Sarah Chen is reviewing your resume and portfolio against the frontend role. Sit tight — we will write when the next stage starts."
    },
    documents: [
      { name: "Maya_Lin_Resume_2026.pdf", type: "Resume", status: "Verified", date: "Nov 10" },
      { name: "github.com/mayalin-dev", type: "Portfolio", status: "Verified", date: "Nov 10" }
    ],
    timeline: [
      { time: "Nov 12, 11:30 AM", title: "Recruiter assigned", desc: "Sarah Chen is your talent partner." },
      { time: "Nov 10, 9:16 AM", title: "Application verified", desc: "Documents and basic criteria checked." },
      { time: "Nov 10, 9:15 AM", title: "Application received", desc: "Submitted for Senior Frontend Engineer." }
    ]
  },
  {
    id: "APP-7104",
    name: "David Kim",
    initials: "DK",
    email: "david.kim@example.com",
    role: "Product Designer, Hiring",
    jobId: "PD-02",
    department: "Design",
    location: "San Francisco",
    appliedDate: "Nov 6, 2026",
    currentStage: 2,
    actionRequired: "schedule_interview",
    slaDate: "Please book before Friday, Nov 20",
    recruiter: recruiterSarah(),
    hero: {
      title: "Please pick a 25-minute screening slot.",
      description: "The design team liked your case studies. Choose a video call with Sarah Chen so we can talk about the role and what you want next."
    },
    documents: [
      { name: "DavidKim_Resume.pdf", type: "Resume", status: "Verified", date: "Nov 6" },
      { name: "Figma case studies", type: "Portfolio", status: "Verified", date: "Nov 6" }
    ],
    timeline: [
      { time: "Nov 11, 9:30 AM", title: "Interview invitation", desc: "Please book a 25-minute screen." },
      { time: "Nov 9, 4:15 PM", title: "Portfolio approved", desc: "Design lead completed the screen." },
      { time: "Nov 6, 2:40 PM", title: "Application received", desc: "Submitted for Product Designer." }
    ]
  },
  {
    id: "APP-9320",
    name: "Elena Rostova",
    initials: "ER",
    email: "elena.rostova@example.com",
    role: "Fullstack Software Engineer",
    jobId: "FS-03",
    department: "Platform",
    location: "New York",
    appliedDate: "Nov 1, 2026",
    currentStage: 4,
    actionRequired: "submit_assignment",
    slaDate: "Due Monday, Nov 23 at 11:59 PM",
    recruiter: recruiterMarcus(),
    hero: {
      title: "Submit the architecture challenge.",
      description: "You passed the hiring-manager conversation. Share a repo or zip for the 90-minute event-processor exercise."
    },
    assignment: { title: "Distributed event processor", hours: "1.5–2 hours" },
    documents: [
      { name: "Elena_Rostova_CV.pdf", type: "Resume", status: "Verified", date: "Nov 1" },
      { name: "Challenge_Brief.pdf", type: "Assignment", status: "Sent", date: "Nov 11" }
    ],
    timeline: [
      { time: "Nov 11, 4:00 PM", title: "Take-home sent", desc: "Challenge brief emailed." },
      { time: "Nov 9, 2:00 PM", title: "Hiring manager interview", desc: "Conversation with Engineering Lead." },
      { time: "Nov 4, 10:00 AM", title: "Recruiter screen complete", desc: "Positive note from Marcus Vance." },
      { time: "Nov 1, 9:00 AM", title: "Application received", desc: "Submitted for Fullstack Software Engineer." }
    ]
  },
  {
    id: "APP-6052",
    name: "Jordan Smith",
    initials: "JS",
    email: "jordan.smith@example.com",
    role: "Technical Product Manager",
    jobId: "PM-05",
    department: "Product",
    location: "Austin",
    appliedDate: "Oct 24, 2026",
    currentStage: 5,
    actionRequired: "review_offer",
    slaDate: "Response requested by Nov 25",
    recruiter: recruiterSarah(),
    hero: {
      title: "An offer is ready for you.",
      description: "The team was impressed by your product thinking. Review compensation, equity, and start date, then accept if you would like to join."
    },
    offer: {
      baseSalary: "$165,000 / year",
      equity: "0.15% options, 4-year vest",
      benefits: "Medical, 401(k) 4% match, unlimited PTO, $3,000 learning stipend",
      startDate: "January 11, 2027",
      accepted: false
    },
    documents: [
      { name: "Jordan_Smith_Resume.pdf", type: "Resume", status: "Verified", date: "Oct 24" },
      { name: "Offer_Letter.pdf", type: "Offer", status: "Ready", date: "Nov 13" }
    ],
    timeline: [
      { time: "Nov 13, 3:30 PM", title: "Offer extended", desc: "Package approved by VP of Product." },
      { time: "Nov 10, 11:00 AM", title: "Final debrief", desc: "Hiring committee recommended hire." },
      { time: "Nov 5, 1:00 PM", title: "Strategy presentation", desc: "Session with PMs and engineering." },
      { time: "Oct 24, 11:30 AM", title: "Application received", desc: "Submitted for Technical Product Manager." }
    ]
  }
];

function recruiterSarah() {
  return {
    name: "Sarah Chen",
    role: "Lead talent partner",
    email: "sarah.chen@northline.demo",
    phone: "+1 (415) 890-3241",
    sla: "Replies within 1 business day"
  };
}

function recruiterMarcus() {
  return {
    name: "Marcus Vance",
    role: "Senior technical recruiter",
    email: "marcus.vance@northline.demo",
    phone: "+1 (212) 555-0199",
    sla: "Replies within 1 business day"
  };
}

let applications = [];
let activeId = "APP-8421";
let route = { view: "home", id: null, query: {} };
let roleFilter = "All";
let selectedDate = 0;
let selectedTime = SLOTS[0].times[1];
let lookupQuery = "";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    applications = raw ? JSON.parse(raw) : structuredClone(INITIAL);
    if (!raw) saveState();
  } catch {
    applications = structuredClone(INITIAL);
  }
  const saved = localStorage.getItem(ACTIVE_KEY);
  activeId = applications.some((a) => a.id === saved) ? saved : applications[0]?.id;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  if (activeId) localStorage.setItem(ACTIVE_KEY, activeId);
}

function getApp() {
  return applications.find((a) => a.id === activeId) || applications[0];
}

function setApp(id, silent) {
  const found = applications.find((a) => a.id === id);
  if (!found) return false;
  activeId = id;
  saveState();
  if (!silent) toast(`Now viewing ${found.name} · ${found.id}`);
  return true;
}

function parseHash() {
  const hash = (location.hash || "#/home").replace(/^#/, "");
  const [path, qs] = hash.split("?");
  const parts = path.split("/").filter(Boolean);
  const query = Object.fromEntries(new URLSearchParams(qs || ""));
  const view = parts[0] || "home";
  const id = parts[1] || null;
  return { view, id, query };
}

function go(path) {
  location.hash = path.startsWith("#") ? path : `#${path}`;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function nowLabel() {
  return new Date().toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function toast(message) {
  const box = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  box.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 250);
  }, 3800);
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("open");
  if (id === "recruiter-modal") fillRecruiterModal();
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove("open");
}

function fillRecruiterModal() {
  const app = getApp();
  if (!app) return;
  document.getElementById("recruiter-active-info").innerHTML =
    `<strong>${escapeHtml(app.name)}</strong> · ${escapeHtml(app.id)} · ${escapeHtml(app.role)}`;
  document.getElementById("sim-stage").value = String(app.currentStage);
  document.getElementById("sim-action-type").value = app.actionRequired;
  document.getElementById("sim-sla").value = app.slaDate;
  document.getElementById("sim-recruiter-note").value = "";
}

function render() {
  route = parseHash();
  document.querySelectorAll(".primary-nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === route.view);
  });
  document.getElementById("primary-nav").classList.remove("open");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");

  if (route.view === "track" && route.id) {
    if (setApp(route.id, true)) activeId = route.id;
  }

  const root = document.getElementById("app");
  const views = {
    home: renderHome,
    roles: renderRoles,
    apply: renderApply,
    track: renderTrack,
    process: renderProcess
  };
  (views[route.view] || renderHome)(root);
  document.title = {
    home: "Northline — Know where your application stands",
    roles: "Open roles — Northline",
    apply: "Apply — Northline",
    track: "Track application — Northline",
    process: "How hiring works — Northline"
  }[route.view] || "Northline";
}

function renderHome(root) {
  root.innerHTML = `
    <section class="view hero">
      <div>
        <p class="eyebrow">Careers · Candidate clarity</p>
        <h1 class="display">Never wonder where your application went.</h1>
        <p class="lede">Apply once, then see the stage, the person reviewing you, and the next step — including when you can wait and when you need to act.</p>
        <div class="hero-actions">
          <a class="btn btn-solid" href="#/track">Track my application</a>
          <a class="btn btn-ghost" href="#/roles">Browse open roles</a>
        </div>
      </div>
      <aside class="hero-card" aria-label="Example application status">
        <p class="eyebrow">Live example</p>
        <p style="font-weight:700;margin-bottom:12px;">Maya Lin · APP-8421</p>
        <div class="mini-pipeline">
          <div class="mini-step done"><span class="dot"></span><span>Received</span><small>Done</small></div>
          <div class="mini-step now"><span class="dot"></span><span>Resume screen</span><small>In progress</small></div>
          <div class="mini-step"><span class="dot"></span><span>Team review</span><small>Next</small></div>
          <div class="mini-step"><span class="dot"></span><span>Interviews</span><small>Later</small></div>
        </div>
        <p class="meta" style="margin-top:14px;">Next update: Wednesday by 5:00 PM · You don’t need to do anything.</p>
      </aside>
    </section>
    <section class="stats">
      <div class="stat"><strong>48 hrs</strong><span>Maximum silence after you apply. You always get a receipt and a window.</span></div>
      <div class="stat"><strong>1 next step</strong><span>Either we are working, or you have a single clear action with a deadline.</span></div>
      <div class="stat"><strong>Named human</strong><span>Every application has a recruiter you can message from the tracker.</span></div>
    </section>
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Open now</p>
          <h2 class="display">Roles you can apply to today</h2>
        </div>
        <a class="btn btn-ghost" href="#/roles">See all roles</a>
      </div>
      <div class="cards-3">
        ${JOBS.slice(0, 3).map(jobCard).join("")}
      </div>
    </section>
  `;
}

function jobCard(job) {
  return `
    <article class="role-card">
      <p class="eyebrow">${escapeHtml(job.team)}</p>
      <h3>${escapeHtml(job.title)}</h3>
      <p class="meta">${escapeHtml(job.location)} · ${escapeHtml(job.type)}</p>
      <p>${escapeHtml(job.summary)}</p>
      <div class="tags">${job.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
      <a class="btn btn-solid" href="#/apply?role=${encodeURIComponent(job.id)}">Apply</a>
    </article>
  `;
}

function renderRoles(root) {
  const teams = ["All", ...new Set(JOBS.map((j) => j.team))];
  const list = JOBS.filter((j) => roleFilter === "All" || j.team === roleFilter);
  root.innerHTML = `
    <section class="view">
      <p class="eyebrow">Careers</p>
      <h1 class="display" style="font-size:3rem;margin-bottom:10px;">Open roles</h1>
      <p class="lede">Every posting uses the same five-stage process. After you apply, you get an ID you can track.</p>
      <div class="filters">
        ${teams.map((t) => `<button class="filter-chip ${t === roleFilter ? "active" : ""}" data-filter="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join("")}
      </div>
      <div class="roles-grid">${list.map(jobCard).join("")}</div>
    </section>
  `;
  root.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      roleFilter = btn.dataset.filter;
      render();
    });
  });
}

function renderProcess(root) {
  root.innerHTML = `
    <section class="view">
      <p class="eyebrow">How it works</p>
      <h1 class="display" style="font-size:3rem;margin-bottom:12px;">A hiring process you can actually follow.</h1>
      <p class="lede">Five stages. Named owners. A promised update window. If we need something from you, it shows up as the next step — not a surprise email three weeks later.</p>
      <div class="process-list">
        ${STAGES.map((s) => `
          <article class="process-item">
            <div class="num">0${s.id}</div>
            <div>
              <h3 class="card-title">${escapeHtml(s.title)}</h3>
              <p>${escapeHtml(s.doing)}</p>
              <p class="meta" style="margin-top:8px;">Typical turnaround: ${escapeHtml(s.turnaround)}</p>
            </div>
          </article>
        `).join("")}
      </div>
      <div style="margin-top:28px;" class="hero-actions">
        <a class="btn btn-solid" href="#/apply">Apply for a role</a>
        <a class="btn btn-ghost" href="#/track">Look up an application</a>
      </div>
    </section>
  `;
}

function renderApply(root) {
  const preselect = route.query.role || JOBS[0].id;
  root.innerHTML = `
    <section class="view apply-layout">
      <div>
        <p class="eyebrow">Apply</p>
        <h1 class="display" style="font-size:2.8rem;margin-bottom:10px;">Tell us who you are. We’ll tell you what happens next.</h1>
        <p class="lede">This demo stores the application in your browser and issues a tracking ID immediately — the same receipt a real backend would send by email.</p>
        <form id="apply-form" class="form-stack panel">
          <label>Full name
            <input id="apply-name" required placeholder="Priya Sharma">
          </label>
          <label>Email
            <input id="apply-email" type="email" required placeholder="priya@example.com">
          </label>
          <label>Role
            <select id="apply-role">
              ${JOBS.map((j) => `<option value="${j.id}" ${j.id === preselect ? "selected" : ""}>${escapeHtml(j.title)}</option>`).join("")}
            </select>
          </label>
          <label>Location preference
            <input id="apply-location" placeholder="Remote, NYC, or hybrid">
          </label>
          <label>Portfolio, LinkedIn, or note
            <input id="apply-note" placeholder="https://github.com/you">
          </label>
          <label>Resume
            <div class="dropzone" id="resume-zone">Click to attach a mock resume (PDF)</div>
          </label>
          <button class="btn btn-solid btn-wide" type="submit">Submit application</button>
        </form>
      </div>
      <aside class="stack">
        <div class="info-card">
          <h3 class="card-title">What you get in the next minute</h3>
          <p>1. A unique ID such as APP-4821.</p>
          <p>2. Stage 1: Application received.</p>
          <p>3. A promised update window, and a recruiter you can message.</p>
        </div>
        <div class="info-card">
          <h3 class="card-title">Demo tip</h3>
          <p>After you apply, use <strong>Recruiter demo</strong> in the header to move the application forward and request an interview, assignment, or offer.</p>
        </div>
      </aside>
    </section>
  `;
  const zone = root.querySelector("#resume-zone");
  zone.addEventListener("click", () => {
    zone.classList.add("ready");
    zone.textContent = "Maya_style_resume.pdf attached";
  });
  root.querySelector("#apply-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("apply-name").value.trim();
    const email = document.getElementById("apply-email").value.trim();
    const job = JOBS.find((j) => j.id === document.getElementById("apply-role").value) || JOBS[0];
    const location = document.getElementById("apply-location").value.trim() || "Flexible";
    const note = document.getElementById("apply-note").value.trim();
    const id = `APP-${Math.floor(1000 + Math.random() * 9000)}`;
    const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "NA";
    const app = {
      id,
      name,
      initials,
      email,
      role: job.title,
      jobId: job.id,
      department: job.team,
      location,
      appliedDate: "Just now",
      currentStage: 1,
      actionRequired: "none",
      slaDate: "Within 48 hours",
      recruiter: recruiterSarah(),
      hero: {
        title: "Application received. You’re all set.",
        description: `Thanks for applying to ${job.title}. We verified the submission. You don’t need to do anything else until we write.`
      },
      documents: [{ name: `${name.replace(/\s+/g, "_")}_resume.pdf`, type: "Resume", status: "Received", date: "Today" }],
      timeline: [{ time: nowLabel(), title: "Application received", desc: note || `Applied for ${job.title}.` }]
    };
    applications.unshift(app);
    activeId = id;
    saveState();
    toast(`Application ${id} submitted`);
    go(`/track/${id}`);
  });
}

function matchesQuery(app, q) {
  const s = q.toLowerCase();
  return [app.id, app.email, app.name, app.role].some((v) => v.toLowerCase().includes(s));
}

function renderTrack(root) {
  const app = getApp();
  const suggestions = lookupQuery
    ? applications.filter((a) => matchesQuery(a, lookupQuery)).slice(0, 5)
    : [];

  root.innerHTML = `
    <section class="view">
      <div class="lookup-hero">
        <p class="eyebrow">Status</p>
        <h1 class="display">See the stage. See the next step.</h1>
        <p class="lede" style="margin:0 auto 18px;">Look up by application ID, name, or email. Demo profiles are one click away.</p>
        <div class="search-box">
          <input id="lookup-input" value="${escapeHtml(lookupQuery)}" placeholder="APP-8421 or maya.lin@example.com" autocomplete="off">
          <button class="btn btn-solid" id="lookup-btn" type="button">Track</button>
          ${suggestions.length ? `<div class="suggestions">${suggestions.map((a) => `
            <button type="button" data-pick="${a.id}"><span>${escapeHtml(a.name)} · ${escapeHtml(a.id)}</span><span class="meta">${escapeHtml(a.role)}</span></button>
          `).join("")}</div>` : ""}
        </div>
        <div class="demo-row">
          ${applications.map((a) => `
            <button class="demo-pill ${a.id === activeId ? "active" : ""}" data-pick="${a.id}">
              ${a.actionRequired !== "none" ? `<span class="warn">●</span>` : ""}${escapeHtml(a.name.split(" ")[0])}
            </button>
          `).join("")}
          <button class="demo-pill" id="reset-demo" type="button">Reset demo</button>
        </div>
      </div>
      ${app ? renderDashboard(app) : `<p class="empty">No application selected.</p>`}
    </section>
  `;

  const input = root.querySelector("#lookup-input");
  input.addEventListener("input", () => {
    lookupQuery = input.value;
    render();
    const again = document.getElementById("lookup-input");
    if (again) {
      again.focus();
      again.setSelectionRange(lookupQuery.length, lookupQuery.length);
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runLookup();
  });
  root.querySelector("#lookup-btn").addEventListener("click", runLookup);
  root.querySelectorAll("[data-pick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lookupQuery = "";
      setApp(btn.dataset.pick);
      go(`/track/${btn.dataset.pick}`);
    });
  });
  root.querySelector("#reset-demo")?.addEventListener("click", () => {
    if (!confirm("Reset demo candidates to the original stories?")) return;
    applications = structuredClone(INITIAL);
    activeId = applications[0].id;
    saveState();
    toast("Demo data reset");
    render();
  });

  bindDashboard(root, app);
}

function runLookup() {
  const q = (document.getElementById("lookup-input")?.value || "").trim();
  if (!q) {
    toast("Enter an application ID or email");
    return;
  }
  const match = applications.find((a) => matchesQuery(a, q));
  if (!match) {
    toast(`Nothing found for “${q}”. Try APP-8421.`);
    return;
  }
  lookupQuery = "";
  setApp(match.id);
  go(`/track/${match.id}`);
}

function statusBadge(app) {
  if (app.offer?.accepted) return `<span class="badge badge-win">Offer accepted</span>`;
  if (app.actionRequired !== "none") return `<span class="badge badge-act">Action needed</span>`;
  if (app.currentStage === 5) return `<span class="badge badge-win">Offer stage</span>`;
  return `<span class="badge badge-wait">In progress</span>`;
}

function renderDashboard(app) {
  const stage = STAGES.find((s) => s.id === app.currentStage) || STAGES[0];
  const needs = app.actionRequired !== "none";
  const pct = ((app.currentStage - 1) / (STAGES.length - 1)) * 100;
  const rec = app.recruiter;
  const recIn = rec.name.split(" ").map((n) => n[0]).join("");

  return `
    <div class="candidate-top panel">
      <div class="identity">
        <div class="avatar">${escapeHtml(app.initials)}</div>
        <div>
          <h1>${escapeHtml(app.name)} ${statusBadge(app)}</h1>
          <p>${escapeHtml(app.role)} · ${escapeHtml(app.department)}</p>
          <div class="row">
            <span>ID <span class="id-chip">${escapeHtml(app.id)}</span></span>
            <span>Applied ${escapeHtml(app.appliedDate)}</span>
            <span>${escapeHtml(app.location)}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-ghost" id="copy-link" type="button">Copy tracking link</button>
    </div>

    <div class="hero-status ${needs ? "act" : "ok"}">
      <div>
        <p class="eyebrow">${needs ? "You have something to do" : "No action needed from you"}</p>
        <h2>${escapeHtml(app.hero?.title || stage.title)}</h2>
        <p>${escapeHtml(app.hero?.description || stage.doing)}</p>
        <div class="sla">${needs ? "Deadline" : "Next update"}: ${escapeHtml(app.slaDate)}</div>
      </div>
      <div>
        ${needs
          ? `<button class="btn btn-amber" id="jump-action" type="button">${actionLabel(app.actionRequired)}</button>`
          : `<button class="btn btn-ghost" id="open-message" type="button">Ask ${escapeHtml(rec.name.split(" ")[0])}</button>`}
      </div>
    </div>

    <div class="stepper">
      <div class="section-head" style="margin-bottom:18px;">
        <div>
          <h2 class="display" style="font-size:1.6rem;">Application progress</h2>
          <p class="meta">Stage ${app.currentStage} of 5 · ${escapeHtml(stage.title)}</p>
        </div>
      </div>
      <div class="steps">
        <div class="progress-line" style="width:${pct}%"></div>
        ${STAGES.map((s) => {
          const cls = s.id < app.currentStage ? "done" : s.id === app.currentStage ? (needs ? "act now" : "now") : "";
          const mark = s.id < app.currentStage ? "✓" : s.id === app.currentStage && needs ? "!" : s.id;
          const label = s.id < app.currentStage ? "Completed" : s.id === app.currentStage ? (needs ? "Your turn" : "Current") : s.turnaround;
          return `<div class="step ${cls}"><div class="circle">${mark}</div><strong>${escapeHtml(s.short)}</strong><span>${escapeHtml(label)}</span></div>`;
        }).join("")}
      </div>
    </div>

    <div class="layout">
      <div class="stack">
        <section class="info-card">
          <h3 class="card-title">What is happening in ${escapeHtml(stage.title)}</h3>
          <div class="callout">${escapeHtml(stage.doing)}</div>
          <div class="milestones">
            ${stage.milestones.map((m, i) => {
              const done = sDone(app, i);
              return `<div class="milestone ${done ? "done" : ""}"><span class="check"></span><span>${escapeHtml(m)}</span></div>`;
            }).join("")}
          </div>
        </section>
        <section class="info-card" id="workspace">${workspace(app)}</section>
        <section class="info-card">
          <h3 class="card-title">Activity</h3>
          <div class="timeline">
            ${(app.timeline || []).map((t) => `
              <div class="t-item">
                <div class="t-title">${escapeHtml(t.title)}</div>
                <div class="t-desc">${escapeHtml(t.desc)}</div>
                <div class="t-time">${escapeHtml(t.time)}</div>
              </div>
            `).join("")}
          </div>
        </section>
      </div>
      <aside class="stack">
        <div class="sidebar-card">
          <h3 class="card-title">Your recruiter</h3>
          <div class="recruiter">
            <div class="rec-av">${escapeHtml(recIn)}</div>
            <div>
              <strong>${escapeHtml(rec.name)}</strong>
              <p class="meta">${escapeHtml(rec.role)}</p>
            </div>
          </div>
          <p class="badge badge-ok">${escapeHtml(rec.sla)}</p>
          <p class="meta" style="margin:10px 0;">${escapeHtml(rec.email)}<br>${escapeHtml(rec.phone)}</p>
          <button class="btn btn-ghost btn-wide" id="open-message-2" type="button">Send a message</button>
        </div>
        <div class="sidebar-card">
          <h3 class="card-title">Documents</h3>
          ${(app.documents || []).map((d) => `
            <div class="doc">
              <div><strong>${escapeHtml(d.name)}</strong><div class="meta">${escapeHtml(d.type)} · ${escapeHtml(d.date)}</div></div>
              <span class="badge badge-ok">${escapeHtml(d.status)}</span>
            </div>
          `).join("")}
        </div>
        <div class="sidebar-card">
          <h3 class="card-title">Alerts</h3>
          <label class="toggle">Email when the stage changes <input id="pref-email" type="checkbox" checked></label>
          <label class="toggle">SMS / WhatsApp <input id="pref-sms" type="checkbox" checked></label>
        </div>
      </aside>
    </div>
  `;
}

function sDone(app, index) {
  if (app.actionRequired === "none") return index < 2 || app.currentStage > 1;
  return index === 0;
}

function actionLabel(type) {
  return {
    schedule_interview: "Book a time",
    submit_assignment: "Submit work",
    upload_docs: "Upload document",
    review_offer: "Review offer"
  }[type] || "Continue";
}

function workspace(app) {
  if (app.actionRequired === "schedule_interview") {
    const day = SLOTS[selectedDate];
    return `
      <h3 class="card-title">Schedule your screen</h3>
      <p class="meta">25 minutes with ${escapeHtml(app.recruiter.name)} · video call</p>
      <p style="margin-top:12px;font-weight:700;">Date</p>
      <div class="dates">
        ${SLOTS.map((s, i) => `
          <button class="date-pill ${i === selectedDate ? "selected" : ""}" data-date="${i}" type="button">
            <div class="day">${s.day}</div><strong>${s.num}</strong>
          </button>
        `).join("")}
      </div>
      <p style="font-weight:700;">Time · ${escapeHtml(day.date)}</p>
      <div class="slots">
        ${day.times.map((t) => `<button class="slot-btn ${t === selectedTime ? "selected" : ""}" data-time="${escapeHtml(t)}" type="button">${escapeHtml(t)}</button>`).join("")}
      </div>
      <p class="meta" style="margin-bottom:12px;">Selected: ${escapeHtml(day.date)} at ${escapeHtml(selectedTime)}</p>
      <button class="btn btn-solid btn-wide" id="confirm-book" type="button">Confirm interview</button>
    `;
  }
  if (app.actionRequired === "submit_assignment") {
    return `
      <h3 class="card-title">Submit the challenge</h3>
      <p class="meta">${escapeHtml(app.assignment?.title || "Take-home")} · ${escapeHtml(app.assignment?.hours || "about 2 hours")}</p>
      <form id="assign-form" class="form-stack" style="margin-top:14px;">
        <label>Repository URL
          <input id="repo-url" type="url" required placeholder="https://github.com/you/challenge">
        </label>
        <div class="dropzone" id="zip-zone">Or click to attach a mock zip</div>
        <label>Notes for reviewers
          <textarea id="assign-notes" rows="3" placeholder="How to run it, tradeoffs, tests."></textarea>
        </label>
        <button class="btn btn-solid" type="submit">Submit challenge</button>
      </form>
    `;
  }
  if (app.actionRequired === "review_offer") {
    const o = app.offer || {};
    return `
      <h3 class="card-title">Offer overview</h3>
      <div class="offer-grid">
        <div><p class="meta">Base</p><strong>${escapeHtml(o.baseSalary || "—")}</strong></div>
        <div><p class="meta">Equity</p><strong>${escapeHtml(o.equity || "—")}</strong></div>
        <div><p class="meta">Start date</p><strong>${escapeHtml(o.startDate || "—")}</strong></div>
        <div><p class="meta">Status</p><strong>${o.accepted ? "Accepted" : "Awaiting your decision"}</strong></div>
      </div>
      <p class="meta">${escapeHtml(o.benefits || "")}</p>
      <div class="hero-actions" style="margin-top:16px;">
        <button class="btn btn-ghost" id="dl-offer" type="button">Download letter</button>
        ${o.accepted ? `<span class="badge badge-win">Welcome to the team</span>` : `<button class="btn btn-teal" id="accept-offer" type="button">Accept offer</button>`}
      </div>
    `;
  }
  if (app.actionRequired === "upload_docs") {
    return `
      <h3 class="card-title">Upload the requested file</h3>
      <div class="dropzone" id="doc-zone">Click to attach a mock PDF</div>
      <button class="btn btn-solid btn-wide" id="submit-doc" type="button" style="margin-top:12px;">Confirm upload</button>
    `;
  }
  return `
    <h3 class="card-title">You’re caught up</h3>
    <p>We’ll email and SMS when the stage changes. If something is unclear, message your recruiter.</p>
  `;
}

function bindDashboard(root, app) {
  if (!app) return;
  root.querySelector("#copy-link")?.addEventListener("click", async () => {
    const url = `${location.origin}${location.pathname}#/track/${app.id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast("Tracking link copied");
    } catch {
      toast(url);
    }
  });
  root.querySelector("#jump-action")?.addEventListener("click", () => {
    document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth" });
  });
  root.querySelector("#open-message")?.addEventListener("click", () => openModal("message-modal"));
  root.querySelector("#open-message-2")?.addEventListener("click", () => openModal("message-modal"));
  root.querySelector("#pref-email")?.addEventListener("change", (e) => toast(`Email alerts ${e.target.checked ? "on" : "off"}`));
  root.querySelector("#pref-sms")?.addEventListener("change", (e) => toast(`SMS alerts ${e.target.checked ? "on" : "off"}`));

  root.querySelectorAll("[data-date]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedDate = Number(btn.dataset.date);
      selectedTime = SLOTS[selectedDate].times[0];
      render();
    });
  });
  root.querySelectorAll("[data-time]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedTime = btn.dataset.time;
      render();
    });
  });
  root.querySelector("#confirm-book")?.addEventListener("click", () => {
    const when = `${SLOTS[selectedDate].date} at ${selectedTime}`;
    app.actionRequired = "none";
    app.hero = {
      title: "Interview booked.",
      description: `You’re confirmed for ${when} with ${app.recruiter.name}. A calendar invite is on its way to ${app.email}.`
    };
    app.slaDate = when;
    app.timeline.unshift({ time: nowLabel(), title: "Interview booked", desc: when });
    saveState();
    toast(`Booked for ${when}`);
    render();
  });

  root.querySelector("#zip-zone")?.addEventListener("click", (e) => {
    e.currentTarget.classList.add("ready");
    e.currentTarget.textContent = "challenge.zip attached";
  });
  root.querySelector("#assign-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const repo = document.getElementById("repo-url").value;
    app.actionRequired = "none";
    app.hero = {
      title: "Challenge received. Engineering is reviewing.",
      description: "You don’t need to do anything else. Feedback is typically within two business days."
    };
    app.slaDate = "Feedback by Wednesday";
    app.documents.push({ name: "Challenge_submission.zip", type: "Code", status: "Received", date: "Today" });
    app.timeline.unshift({ time: nowLabel(), title: "Challenge submitted", desc: repo });
    saveState();
    toast("Challenge submitted");
    render();
  });

  root.querySelector("#dl-offer")?.addEventListener("click", () => toast("Downloading Offer_Letter.pdf (demo)"));
  root.querySelector("#accept-offer")?.addEventListener("click", () => {
    app.offer = app.offer || {};
    app.offer.accepted = true;
    app.actionRequired = "none";
    app.hero = {
      title: "Welcome aboard.",
      description: "Your acceptance is recorded. People ops will send hardware and onboarding details next week."
    };
    app.slaDate = `Start date ${app.offer.startDate || "TBD"}`;
    app.timeline.unshift({ time: nowLabel(), title: "Offer accepted", desc: "Employment agreement signed in the portal." });
    saveState();
    toast("Offer accepted");
    render();
  });

  root.querySelector("#doc-zone")?.addEventListener("click", (e) => {
    e.currentTarget.classList.add("ready");
    e.currentTarget.textContent = "References.pdf attached";
  });
  root.querySelector("#submit-doc")?.addEventListener("click", () => {
    app.actionRequired = "none";
    app.hero = { title: "Document received.", description: "It’s attached to your file. No further action." };
    app.documents.push({ name: "References.pdf", type: "References", status: "Verified", date: "Today" });
    app.timeline.unshift({ time: nowLabel(), title: "Document uploaded", desc: "References.pdf" });
    saveState();
    toast("Document uploaded");
    render();
  });
}

function applyRecruiterUpdate() {
  const app = getApp();
  if (!app) return;
  const stage = Number(document.getElementById("sim-stage").value);
  const action = document.getElementById("sim-action-type").value;
  const note = document.getElementById("sim-recruiter-note").value.trim();
  const sla = document.getElementById("sim-sla").value.trim();
  const stageObj = STAGES.find((s) => s.id === stage);
  app.currentStage = stage;
  app.actionRequired = action;
  if (sla) app.slaDate = sla;
  const copy = {
    none: { title: `Stage ${stage}: ${stageObj.title}`, description: note || "Our team is working. You don’t need to do anything right now." },
    schedule_interview: { title: "Please choose an interview time.", description: note || "Pick a 25-minute slot with your recruiter." },
    submit_assignment: { title: "Please submit the take-home.", description: note || "Complete the exercise and share a repo or zip." },
    upload_docs: { title: "Please upload a document.", description: note || "We still need a file to continue." },
    review_offer: { title: "Your offer is ready.", description: note || "Review the package and respond when you’re ready." }
  };
  app.hero = copy[action];
  if (action === "review_offer") {
    app.offer = app.offer || {
      baseSalary: "$165,000 / year",
      equity: "0.15% options",
      benefits: "Medical, 401(k), PTO, learning stipend",
      startDate: "January 11, 2027",
      accepted: false
    };
  }
  if (action === "submit_assignment") {
    app.assignment = app.assignment || { title: "Take-home exercise", hours: "about 2 hours" };
  }
  app.timeline.unshift({
    time: nowLabel(),
    title: `Moved to ${stageObj.title}`,
    desc: note || `Status: ${action === "none" ? "waiting on us" : "waiting on you"}.`
  });
  saveState();
  closeModal("recruiter-modal");
  toast(`Updated ${app.name}`);
  if (route.view !== "track") go(`/track/${app.id}`);
  else render();
}

function bindGlobal() {
  document.getElementById("menu-toggle").addEventListener("click", () => {
    const nav = document.getElementById("primary-nav");
    const open = nav.classList.toggle("open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", String(open));
  });
  document.getElementById("btn-recruiter").addEventListener("click", () => openModal("recruiter-modal"));
  document.getElementById("btn-apply-recruiter").addEventListener("click", applyRecruiterUpdate);
  document.getElementById("message-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const app = getApp();
    const topic = document.getElementById("msg-topic").value;
    const body = document.getElementById("msg-body").value.trim();
    app.timeline.unshift({ time: nowLabel(), title: "Message sent to recruiter", desc: `${topic}: ${body.slice(0, 90)}` });
    saveState();
    closeModal("message-modal");
    document.getElementById("msg-body").value = "";
    toast(`Sent to ${app.recruiter.name}`);
    if (route.view === "track") render();
  });
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });
  document.querySelectorAll(".modal-backdrop").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll(".modal-backdrop.open").forEach((m) => closeModal(m.id));
  });
  window.addEventListener("hashchange", render);
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  bindGlobal();
  if (!location.hash) location.hash = "#/home";
  else render();
});
