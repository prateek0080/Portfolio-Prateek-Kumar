# Portfolio - Prateek Kumar

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React and featuring a clean, professional design with dark/light theme support.

## 🚀 Live Demo

[View Live Portfolio](https://portfolio-prateek-kumar.netlify.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Theme**: Toggle between dark and light themes with smooth transitions
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive UI**: Hover effects, animations, and modern design elements
- **Contact Form**: Functional contact form for inquiries
- **Resume Download**: Direct download link for resume
- **Project Showcase**: Detailed project cards with live demos and source code links
- **Skills Visualization**: Interactive skill bars showing proficiency levels
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: CSS3 with Custom Properties, Flexbox, Grid
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/prateek0080/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   └── notepad.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── about.jpg
│   │       ├── profile-pic.jpeg
│   │       ├── notepad.png
│   │       ├── flavors.png
│   │       └── ats.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 📄 Sections

### 🏠 Hero Section

- Professional introduction
- Call-to-action buttons
- Profile image
- Resume download functionality

### 👨‍💻 About Section

- Personal background
- Educational qualifications
- Coding statistics (LeetCode, GeeksforGeeks)
- Professional image

### 🚀 Projects Section

- Featured project showcase
- Project descriptions and technologies used
- Live demo and source code links
- Responsive project cards with hover effects

### 🛠️ Skills Section

- Technical skills categorized by:
  - Frontend technologies
  - Backend technologies
  - Tools & Others
- Interactive progress bars
- Proficiency percentages

### 📞 Contact Section

- Contact information
- Social media links
- Functional contact form
- Direct communication channels

## 🎨 Customization

### Personal Information

1. **Update personal details** in `src/components/Hero.jsx`:

   ```javascript
   <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
   <h2>Your Title</h2>
   <p>Your description...</p>
   ```

2. **Modify education** in `src/components/About.jsx`

3. **Update projects** in `src/components/Projects.jsx`:

   ```javascript
   const projects = [
     {
       title: "Your Project",
       description: "Project description",
       technologies: ["Tech1", "Tech2"],
       liveUrl: "https://your-live-url.com",
       githubUrl: "https://github.com/your-repo",
     },
   ];
   ```

4. **Customize skills** in `src/components/Skills.jsx`

5. **Update contact info** in `src/components/Contact.jsx`

### Styling

- **Colors**: Modify CSS custom properties in `src/App.css`
- **Fonts**: Update font families in the CSS
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Customize keyframes and transitions

### Images

Replace images in `src/assets/images/` with your own:

- `profile-pic.jpeg`: Your profile photo
- `about.jpg`: About section image
- Project screenshots for each project

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Prateek Kumar**

- 📧 Email: prateekkumar0080@gmail.com
- 📱 Phone: +91 8507901395
- 💼 LinkedIn: [prateek850](https://www.linkedin.com/in/prateek850/)
- 🐙 GitHub: [prateek0080](https://github.com/prateek0080)

---

⭐ If you found this portfolio helpful, please give it a star!
