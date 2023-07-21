import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div class="container">
          <h1>KHANO PHIDANE</h1>
          <div class="wrapper">
            <div class="static-txt">I'M A</div>
            <ul class="dynamic-txts">
              <li><span>DEVELOPER</span></li>
              <li><span>DESIGNER</span></li>
              <li><span>PROGRAMMER</span></li>
              <li><span>FARMER</span></li>
            </ul>
          </div>
        </div> 
      `;
    }
}