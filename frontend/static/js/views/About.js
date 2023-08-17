import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        const response = await fetch('./static/js/views/about.html');
        const htmlContent = await response.text();
        return htmlContent;
    }
}