# Personal Portfolio Website

A modern responsive single-page portfolio website built using HTML5, CSS3, and Firebase for Syntecxhub Project 1.

## Features

- Responsive design for desktop, tablet, and mobile
- Modern dark UI with subtle gradients
- About, skills, projects, and contact sections
- HTML-only contact form
- CSS hover effects and transitions
- Mobile-friendly layout
- Semantic HTML and accessible form labels
- Firebase Firestore contact submissions
- Firebase Hosting deployment configuration

## Technologies

- HTML5
- CSS3
- JavaScript (Firebase browser SDK)
- Firebase Firestore
- Firebase Hosting

## Project Structure

```text
portfolio-website/
├── index.html
├── app.js
├── firebase-config.js
├── firebase.json
├── firestore.rules
├── style.css
└── README.md
```

A profile image is not required; the hero illustration is created with CSS so the page remains complete without an image asset.

## How to Run

1. Open the project folder.
2. Open `index.html` directly in a browser.
3. No build tools or dependencies are required.

The stylesheet imports Google Fonts when an internet connection is available; the layout remains usable if those fonts cannot load.

## Firebase Setup

1. Open Firebase Console and select project `my-portfolio-1f772`.
2. Create a Web App under Project settings if one does not already exist.
3. Copy its Firebase configuration into `firebase-config.js`.
4. Create a Firestore database in production mode.
5. Deploy the Firestore rules with `firebase deploy --only firestore:rules`.

The contact form stores submissions in the `contactMessages` collection. Public users can create validated messages, while reads, updates, and deletes are blocked by `firestore.rules`.

## Firebase Hosting

After installing and authenticating the Firebase CLI, select the project and deploy:

```powershell
firebase use my-portfolio-1f772
firebase deploy
```

The project does not include private credentials. Firebase Web App configuration values are intended for browser use; Firestore rules protect the data instead.

## Author

Anoop Joel  
B.Tech CSE (AI & ML)  
Kalasalingam University

## GitHub Preparation

Suggested repository name: `syntecxhub-portfolio`

Suggested description: `A modern responsive single-page portfolio website built using HTML5 and CSS3 for Syntecxhub Project 1.`
