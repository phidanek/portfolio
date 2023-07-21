import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Tools");
    }

    async getHtml() {
        return `
            <h1>Tools</h1>
            <p>
               Tools
            </p>

        `;
    }
}