# Gmail → Webhook Automation (Google Apps Script)

This project uses **Google Apps Script (GS)** to monitor new unread Gmail messages and automatically send structured email data to an external webhook (e.g. Make / Integromat) for further processing.

It is designed for Ops, CSOps, and automation use cases where email is still a key input signal.

---

## What problem does this solve?

Many operational workflows still start in email:
- Customer replies
- Alerts
- External system notifications
- Manual follow-ups

However, Gmail by itself is not automation-friendly at scale.

This script bridges that gap by turning incoming emails into **structured, real-time events** that can trigger automations in external tools.

---

## How this helps you

By using this script, you can:
- Automatically react to new emails
- Send email data to Make, Zapier, or any webhook-based system
- Reduce manual monitoring of inboxes
- Build reliable email-driven automations

Typical use cases:
- Creating or updating tickets
- Triggering workflows based on email content
- Logging email activity to databases or spreadsheets
- Alerting teams when specific emails arrive

---

## Why Google Apps Script (GS)?

**Google Apps Script** is a JavaScript-based runtime provided by Google.

It is especially powerful because it:
- Runs **inside your Google account**
- Has native access to Gmail, Google Sheets, Drive, and more
- Requires no server, hosting, or infrastructure
- Supports triggers (time-based, event-based)

This makes it ideal for lightweight but reliable automations.

You can access the editor here:  
https://script.google.com/

---

## Where is this implemented?

This script is implemented as a **Google Apps Script project**.

Flow overview:
1. Script runs on a scheduled trigger
2. Checks for new unread emails
3. Extracts structured email data
4. Sends the data to an external webhook
5. Stores the last processed message ID to avoid duplicates

---

## How to use

### 1. Create a new Apps Script project

- Go to https://script.google.com/
- Click **New project**
- Replace the default code with the contents of the `.gs` file

---

### 2. Configure script properties

Set the following Script Properties:
- `WEBHOOK_URL` – your Make / automation webhook URL

This keeps secrets out of the code.

---

### 3. Set a trigger

- Open **Triggers** in Apps Script
- Add a **time-driven trigger**
- Example: run every 1–5 minutes

---

### 4. Grant permissions

On first run, Google will ask for:
- Gmail read access
- Script execution permissions

These are required for the automation to work.

---

## What happens after setup?

Once running:
- New unread emails are detected
- Each email is sent as structured JSON
- Downstream automations handle the rest
- Duplicate processing is avoided automatically

No manual inbox monitoring needed.

---

## Advantages of this approach

- No servers to maintain
- Runs entirely in Google’s infrastructure
- Easy to modify and extend
- Ideal for Ops and CSOps workflows
- Works well alongside Make / Zapier / custom APIs

---

## Notes & best practices

- Always keep webhook URLs in Script Properties
- Start with a low trigger frequency and adjust as needed
- Test on a secondary inbox before production use
- This script assumes emails are marked unread before processing

---

## Who should use this?

- CSOps / Ops teams
- Automation-focused roles
- Teams bridging Gmail with external systems
- Anyone tired of manually reacting to inbox events

---

## Final note

This is a lightweight, production-inspired automation —  
simple by design, powerful in impact.

Happy automating 🚀
