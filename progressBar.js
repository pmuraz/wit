class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("progress-bar-container");

        this.bar = document.createElement("div");
        this.bar.classList.add("progress-bar");

        this.wrapper.appendChild(this.bar);
        this.shadowRoot.appendChild(this.wrapper);

        this.progressValue = 50;
        this.color = "#4caf50";
    }

    static get observedAttributes() {
        return ["progress-value", "color"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "progress-value") {
            this.progressValue = Math.min(100, Math.max(0, newValue));
            this.bar.style.width = this.progressValue + "%";
        } else if (name === "color") {
            this.color = newValue;
            this.bar.style.backgroundColor = this.color;
        }
    }

    connectedCallback() {
        this.bar.style.width = this.progressValue + "%";
        this.bar.style.backgroundColor = this.color;
    }
}

customElements.define("progress-bar-widget", ProgressBar);
