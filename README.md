# CandidatePulse 🎯
### Transparent Candidate Application Status & Next-Step Portal

> **The Problem**: A person applies for a job and hears nothing for several days. They enter an information "black hole" — not knowing whether their application was received, what stage it is at, or whether they need to do anything.

**CandidatePulse** solves this problem by giving candidates 100% transparency into their application journey, answering their two biggest questions immediately:
1. **"Was my application received and what stage is it in?"**
2. **"Do I need to do anything right now?"**

---

## 🚀 Quick Start (Zero Setup Required)

This is a pure frontend application with complete client-side logic. You do not need Node.js, Python, or any backend server to run it.

### Option 1: Direct File Open
Double click `index.html` in your file explorer, or run in your terminal:
```bash
open index.html
```

### Option 2: Local Web Server (Optional)
If you prefer running via a local web server:
```bash
# Python 3
python3 -m http.server 3000

# Or npx serve
npx serve .
```
Then visit `http://localhost:3000` in your web browser.

---

## 🌟 Key Features

### 1. Instant "Do I Need to Do Anything?" Hero Banner
- **Action Required**: Highlighted Amber attention banner providing exact instructions, deadline/SLA, and an interactive CTA button (e.g. *"Schedule 25-minute video call before Friday, Nov 20"*).
- **No Action Needed**: Calming Emerald reassurance banner confirming the hiring team is actively reviewing, displaying the assigned recruiter and the expected turnaround response date (e.g. *"Within 2 business days by Wednesday, Nov 18"*).

### 2. Visual 5-Stage Application Pipeline (Stepper)
1. **Application Received & Verified**
2. **Resume & Portfolio Screen**
3. **Hiring Team Review**
4. **Interviews & Skills Assessment**
5. **Final Decision & Offer**
- Features active pulsating indicators, checkmarks for completed stages, turnaround times, and behind-the-scenes explanations of what recruiters are doing at each stage.

### 3. Interactive Candidate Action Center
- **Interactive Interview Scheduler**: Pick dates and available time slots (Google Meet video call) with instant confirmation and calendar invite simulation.
- **Assignment Submission**: Submit GitHub repository link or simulated file archive with reviewer notes.
- **Offer Letter & Acceptance**: View base compensation, equity, benefits, download formal PDF, and click to accept the offer.
- **Document Checklist**: Track verified resumes, portfolios, and uploaded reference contacts.

### 4. Recruiter Simulation Control Center (Demo Tool)
- Click **"Recruiter Simulator"** in the top navigation bar to simulate hiring team actions live during presentations:
  - Advance or roll back pipeline stages (1 through 5).
  - Toggle candidate actions (e.g., request interview scheduling, request task submission).
  - Add recruiter notes and update SLA turnaround dates.
  - Watch the candidate portal update in real-time!

### 5. Instant Demo Candidates
Switch between 4 realistic candidate profiles with one click:
- **Maya Lin**: *Stage 1 (Application Received)* – Demonstrates the reassuring "No action needed" state with 48h turnaround SLA.
- **David Kim**: *Stage 2 (Screening)* – Demonstrates the "Action Required" state with interactive calendar booking.
- **Elena Rostova**: *Stage 4 (Assessment)* – Demonstrates take-home code submission.
- **Jordan Smith**: *Stage 5 (Offer)* – Demonstrates offer package review and acceptance.

### 6. Create New Application
- Click **"New Application"** to submit a sample application with custom name, role, and portfolio, immediately generating a unique `APP-xxxx` ID to track live.

---

## 📁 Project Structure

```
devfest/
├── index.html     # Semantic HTML5 layout, modals, and accessible structure
├── styles.css     # Modern, responsive design system with animations
├── app.js         # State machine, localStorage persistence & interactive logic
└── README.md      # Documentation and quickstart instructions
```
