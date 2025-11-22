// Page Fade-In Effect
class PageFadeInEffect {
  constructor() {
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
  }
}
new PageFadeInEffect();


// Greeting Message on Homepage
class GreetingMessage {
  constructor(elementId) {
    this.greetingElement = document.getElementById(elementId);
    if (!this.greetingElement) return;

    const currentHour = new Date().getHours();
    this.greetingElement.textContent =
      currentHour < 12 ? "Good Morning ☀️" :
      currentHour < 18 ? "Good Afternoon 🌤️" :
      "Good Evening 🌙";
  }
}
new GreetingMessage("greeting");


//  Generic List Renderer (Projects, Education, Work) 
class ListRenderer {
  constructor(containerId, dataArray, templateFunction) {
    this.containerElement = document.getElementById(containerId);
    if (this.containerElement && Array.isArray(dataArray)) {
      this.containerElement.innerHTML = dataArray.map(item => templateFunction(item)).join("");
    }
  }
}

// Projects
new ListRenderer("project-list", projectsData, item => `
  <section class="project-section fade-scroll tilt-card">
    <div class="project-image-container">
      <img src="${item.image}" class="project-image" alt="${item.title}">
    </div>
    <div class="project-description">
      <h2 class="project-title">${item.title}</h2>
      <p>${item.description}</p>
      <button class="learn-more-btn">Learn more</button>
    </div>
  </section>
`);

// Education
new ListRenderer("education-list", educationData, item => `
  <div class="education-item fade-scroll tilt-card">
    <h2>${item.degree}</h2>
    <p class="institution">${item.institution}</p>
    <p class="year">${item.year}</p>
  </div>
`);

// Work Experience
new ListRenderer("work-list", workData, item => `
  <section class="work-item fade-scroll tilt-card">
    <h2>${item.role} | ${item.company}</h2>
    <p class="date">${item.year}</p>
  </section>
`);


//  Contact Form Validation 
class ContactFormValidator {
  constructor(formId, statusId) {
    this.formElement = document.getElementById(formId);
    this.statusElement = document.getElementById(statusId);

    if (this.formElement) {
      this.formElement.addEventListener("submit", event => this.validate(event));
    }
  }

  validate(event) {
    const nameInputValue = document.getElementById("name").value.trim();

    if (nameInputValue.length < 3) {
      event.preventDefault();
      this.statusElement.textContent = "Name should be at least 3 characters.";
      this.statusElement.style.color = "red";
    } else {
      this.statusElement.textContent = "Message sent successfully ✅";
      this.statusElement.style.color = "green";
    }
  }
}
new ContactFormValidator("contactForm", "status");


//  Fade Scroll Reveal
class ScrollFadeEffect {
  constructor() {
    this.elementsToReveal = document.querySelectorAll(".fade-scroll");
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    });

    this.elementsToReveal.forEach(element => this.observer.observe(element));
  }
}
new ScrollFadeEffect();


// Tilt Effect 
class TiltInteraction {
  constructor(selector) {
    this.tiltElements = document.querySelectorAll(selector);

    this.tiltElements.forEach(element => {
      element.addEventListener("mousemove", event => this.applyTilt(event, element));
      element.addEventListener("mouseleave", () => this.resetTilt(element));
    });
  }

  applyTilt(event, element) {
    const elementRect = element.getBoundingClientRect();
    const offsetX = event.clientX - elementRect.left - elementRect.width / 2;
    const offsetY = event.clientY - elementRect.top - elementRect.height / 2;

    element.style.transform = `rotateX(${-(offsetY / 20)}deg) rotateY(${offsetX / 20}deg)`;
  }

  resetTilt(element) {
    element.style.transform = "rotateX(0) rotateY(0)";
  }
}
new TiltInteraction(".tilt-card");


//  Spotlight Effect on Hero Section 
class SpotlightEffect {
  constructor(heroClass, spotlightClass) {
    this.heroSection = document.querySelector(heroClass);
    this.spotlightElement = document.querySelector(spotlightClass);

    if (this.heroSection && this.spotlightElement) {
      this.heroSection.addEventListener("mousemove", event => this.moveSpotlight(event));
      this.heroSection.addEventListener("mouseleave", () => this.hideSpotlight());
    }
  }

  moveSpotlight(event) {
    const heroRect = this.heroSection.getBoundingClientRect();
    this.spotlightElement.style.left = event.clientX - heroRect.left + "px";
    this.spotlightElement.style.top = event.clientY - heroRect.top + "px";
    this.spotlightElement.style.opacity = 1;
  }

  hideSpotlight() {
    this.spotlightElement.style.opacity = 0;
  }
}
new SpotlightEffect(".hero-section", ".spotlight");


//  Paint Brush Neon Cursor 
class NeonBrushCursor {
  constructor() {
    this.previousX = 0;
    this.previousY = 0;

    document.addEventListener("mousemove", event => this.drawBrushTrail(event));
  }

  drawBrushTrail(event) {
    const speed = Math.hypot(event.clientX - this.previousX, event.clientY - this.previousY);
    this.previousX = event.clientX;
    this.previousY = event.clientY;

    const brushDot = document.createElement("div");
    brushDot.className = "brush-dot";

    const dotSize = Math.min(40, 8 + speed * 0.6);
    brushDot.style.width = brushDot.style.height = dotSize + "px";
    brushDot.style.left = event.clientX + "px";
    brushDot.style.top = event.clientY + "px";

    document.body.appendChild(brushDot);
    setTimeout(() => brushDot.remove(), 700);
  }
}
new NeonBrushCursor();


//  Custom Cursor Icon 
class BrushCursorIcon {
  constructor() {
    this.cursorImage = document.createElement("img");
    this.cursorImage.src = "cursor.png";
    this.cursorImage.className = "custom-cursor";
    document.body.appendChild(this.cursorImage);

    document.addEventListener("mousemove", event => {
      this.cursorImage.style.left = event.clientX + "px";
      this.cursorImage.style.top = event.clientY + "px";
    });
  }
}
new BrushCursorIcon();
