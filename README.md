# ETHAN ADMISSION v2.3 — 120 Digital Programmes

Exclusively for Ethan Digital Academy. Includes the ETHAN ADMISSION logo.

## Open the portal

Extract the ZIP and open index.html. For consistent draft storage, serve the folder with a local web server (for example, python -m http.server 8000) and visit http://localhost:8000. No build step or package installation is required for the website.

## Pages and working features

- Home: admission preparation journey and applicant categories.
- Programmes: 120 digital programmes across 12 learning areas, search, area/category filters, detail dialog and programme selection.
- Requirements: preparation checklist and guardian guidance.
- Apply: three-step form, conditional guardian requirements for under-18 applicants, review, manual draft saving and resuming.
- My Application: continue editing, local reference, download JSON copy, browser Print / Save as PDF, local deletion.
- Fees: official quotation and payment guidance; no invented prices.
- Help: six FAQs, Academy contact links and an enquiry form that prepares a WhatsApp message for the applicant to review and send.
- Privacy: local storage behaviour, deletion, external links and preview terms.

Responsive navigation, accessible labels, keyboard focus styling, skip link, print stylesheet and text-safe display of applicant input are included.

## Hosting / GitHub

Upload the contents of this folder to the repository root. It is a static website. Configure hosting with no build command and publish the repository root. The intended custom domain is admission.ethandigitalacademy.org; the domain has not been connected by this package.

## Configure content

Edit programmes.js to update programme examples. These examples are not a confirmed programme catalogue. Confirm availability, fees, duration, requirements and intake dates before publishing live admission information. Contact links currently use the Academy's WhatsApp numbers and email.

## Important functional boundary

Applicants can send their completed application through WhatsApp (+2348064656499) or email (ethandigitalacademy@gmail.com). After review and sharing acknowledgement, the website creates a complete application message with a reference and applicant / guardian details. The applicant must press Send in WhatsApp or their email app. The website cannot confirm sending, delivery or Academy receipt, and never automatically marks an application submitted. A manual message-copy option is included for devices without a configured mail app or clipboard permission. There is no login, document upload, payment gateway, server verification, administrative review, admission letter or LMS provisioning. Drafts do not sync between devices. The previous preview's saved draft can be read by this version when served from the same browser origin.

## Live backend work still needed

1. Confirm the programme catalogue and intake settings.
2. Add authenticated applicants and role-controlled staff accounts.
3. Store applications and decisions in a server database with owner/staff access rules and decision history.
4. Add protected document storage, file validation and staff review.
5. Connect payment collection and server-side verification.
6. Add server-confirmed receipt, missing-information requests, notifications and decision tracking.
7. Generate admission letters from authorised accepted decisions.
8. Provision enrolled applicants into the existing Ethan LMS/ERP through an authenticated integration.
9. Approve a live privacy notice and retention process.

No provider keys, passwords or personal records are included in this package.

## Submission update

The Apply page and My Application dashboard provide WhatsApp and email submission links after review. WhatsApp opens in a new tab; email opens the device’s configured email app. Applicants can inspect or copy the complete message before sending. Form changes clear previously generated submission links so they can be regenerated from reviewed details. No message is sent automatically and no delivery status is invented.

Official supplied Ethan Digital Academy logo is displayed on all eight page headers and used as the browser icon. Updated promotional poster is included in assets/ethan-admission-poster.png.

## Expanded programme catalogue

120 distinct digital programme options are available in catalogue search, filters, detail dialogs and the application dropdown. Each includes a description and three learning topics. This is an admissions catalogue, not 120 complete teaching courses. Actual programme delivery, fees and dates require Academy confirmation.
