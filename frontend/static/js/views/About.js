import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1>About</h1>
            <p>
                you are viewing my about
            </p>

        `;
    }
}