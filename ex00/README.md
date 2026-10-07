# WADEE Portfolio — Project 04

## About the Project

This project is a personal portfolio website created as part of Project 04.

The goal of the project is to build a responsive and authentic portfolio using only:

- HTML5
- CSS3
- JavaScript ES6+
- Git

No frameworks or templates are used.

The portfolio presents my background, technical skills, projects, hobbies, and contact information in a responsive and interactive website.

---

## Portfolio Sections

The portfolio includes the following sections:

### Header & Navigation
A responsive navigation bar that allows users to move between the main sections of the portfolio.

### Hero Section
Introduces me as:

**Cybersecurity Specialist | Developer | Technical Content Creator**

It also includes links to my LinkedIn profile and contact section.

### About Me
A short introduction about my academic background, technical interests, and continuous learning journey.

### Skills
A structured grid presenting my technical skills across:

- Cybersecurity
- Networking
- Development
- Security Tools

### Projects
A project showcase covering my previous web development projects:

- Project 01 — HTML Fundamentals
- Project 02 — CSS & Visual Presentation
- Project 03 — JavaScript Interactivity

### Hobbies
A section presenting some of my interests outside of the main project work.

### Contact
A contact form where visitors can enter:

- Name
- Email
- Subject
- Message

### Footer
Contains copyright information and additional navigation links.

---

## JavaScript Features

JavaScript is used to make the portfolio interactive.

### Theme Switcher
The website supports Dark and Light themes.

The selected theme is saved using `localStorage`, so the preference remains after refreshing the page.

### Scroll Progress
A progress bar at the top of the page shows the user's current scrolling progress.

### Active Navigation
The navigation automatically highlights the section currently visible on the page.

### Scroll Reveal
Sections and project cards appear with a smooth reveal animation when they enter the viewport.

### Contact Form Validation
The contact form validates user input before submission.

It checks:

- Name
- Email
- Subject
- Message length

The form displays an error message when the input is invalid and a success message when the validation passes.

### Typing Effect
The hero section includes a typing animation for the introduction text.

### Dynamic Copyright Year
The copyright year is generated automatically using JavaScript.

### Mobile Navigation
The navigation transforms into a mobile menu on smaller screens.

---

## Responsive Design

The portfolio is designed to work across different screen sizes.

Responsive behavior is implemented using:

- Flexbox
- CSS Grid
- Media Queries

The layout adapts for desktop, tablet, and mobile screens.

---

## Project Structure

```text
ex00/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── profile.png

