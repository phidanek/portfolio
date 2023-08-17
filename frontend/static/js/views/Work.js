import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Projects");
    }

    getHtml() {
        return `
        <div class="bgimg">
        <div class="middle">
          <h1>COMING SOON</h1>
          <hr>
        </div>
        `;
    }
}