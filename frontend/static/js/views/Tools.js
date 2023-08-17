import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Tools");
    }

    async getHtml() {
        const response = await fetch('./static/js/views/tools.html');
        const htmlContent = await response.text();
        return htmlContent;
      }
}