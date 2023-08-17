import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        const response = await fetch('./static/js/views/contact.html');
        const htmlContent = await response.text();
        return htmlContent;
    }
}