# Personal-Portfolio


<p align="center">
  <video src="https://github.com/user-attachments/assets/e6a8642b-df5e-4829-b596-32909c50b147" controls width="300" style="margin-left:400;" ></video>
</p> 
<details>
<summary><h2><b>Screenshots (click to open)</b></h2></summary>
<p>
<img src="https://github.com/user-attachments/assets/3eeb7553-c65e-462e-bc0e-682e2ca40fa6" width=50% height=50%><img src="https://github.com/user-attachments/assets/7df505bf-0f03-4741-acb1-0cf999418791" width=50% height=50%><img src="https://github.com/user-attachments/assets/e21556c1-8923-4c8b-8609-4e478272fc7b" width=50% height=50%><img src="https://github.com/user-attachments/assets/3a404f8d-0ab3-4c7e-88ce-6f871cc644f2" width=50% height=50%><img src="https://github.com/user-attachments/assets/435fb805-a50f-440c-b370-fa5da482c361" width=50% height=50%>
</p>
</details>

## Description
Responsive, single-page personal portfolio website built with **React** using advanced animations, a navigation bar, sections for skills (with a slider), projects (with filterable tabs), and a contact form connected to a mail server.

## Core Technologies
- **Frontend:** React.js, JavaScript (ES6+), HTML5, SCSS
- **Backend:** Node.js, Express.js
- **Styling & UI Components:** React Bootstrap, Bootstrap CSS, animate.css
- **Email Functionality:** Nodemailer, Gmail

## Technical Features & Highlights
- **Single-Page Architecture:** Smooth scrolling navigation between sections
- **State Management:** React Hooks (`useState` and `useEffect`)
- **SCSS (Sassy CSS):** Advanced styling, theming, animation
- **Service Integration:** Backend server (Express.js and Node.js), NodeMailer, CORS
- **Effects:** Particle (Snow Effect Animation), Parallax (Multi-layered parallax scrolling effect in footer)
- **Responsive Design:** Adapts to various screen sizes
- **Responsive Layout:** Using React Bootstrap's grid system (`Container`, `Row`, `Column`, and `Tabs`)
- **Slider/Carousel:** `react-multi-carousel` for scrollable/slidable format (to showcase multiple skills/tools)
- **Hover Effect and Interactive Elements:** Skill/Tool zoom out, individual container reveal (`ProjectCard`)
- **Timeline Element:** Display extracurricular activities
- **Battery Status:** Fixed position element at left bottom

<details>
<summary><h3><b>Repository Structure (click to open)</b></h3></summary>

``````
├── Code Files/             
│   ├── pubilc/          
│   │   ├── favicon.ico
│   │   ├── index.html                 
│   │
│   ├── src
│   │   ├── assets/
│   │   │   ├── font/
│   │   │   ├── img/
│   │   │   
│   │   ├── components/
│   │   │   ├── Banner.js
│   │   │   ├── BatteryStatus.js
│   │   │   ├── Contact.js
│   │   │   ├── NavBar.js
│   │   │   ├── ParticlesBackground.js
│   │   │   ├── Project.js
│   │   │   ├── ProjectCard.js
│   │   │   ├── Skills.js
│   │   │
│   │   ├── App.js
│   │   ├── App.scss
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │
│   ├── README.md 
│   ├── package-lockjson
│   ├── package.json
│   ├── server.js
│   
├── capture/
│
├── README.md 
``````
</details>

## Prerequisites
- **Node.js** (Version >= 14.0.0)
- **npm** (Node Package Manager)
- **Git**

## Required npm Installations
``````
npm install react-bootstrap 
npm install bootstrap 
npm install react-bootstrap-icons 
npm install animate.css 
npm install react-on-screen 
npm install react-multi-carouse
``````

## Contact Form - Environment Variables Configuration
Create a file named .env.credential that lists the environment variables which is required to utilize the functionality of Contact form
Due to security issues it is not present in current repository.
``````
credential .env.credential:
Text File
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password
PORT=3000 
``````

## Clone the repository
``````
git clone https://github.com/Amri174/Personal-Portfolio.git
``````

