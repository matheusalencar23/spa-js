import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome back</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere scelerisque quam, vitae feugiat sapien accumsan id. Maecenas pulvinar imperdiet purus at euismod. Mauris luctus maximus posuere. Suspendisse eget nisi rutrum, tempor augue nec, lacinia nisi. Morbi at turpis eu justo dapibus aliquet sit amet in nisl. Maecenas volutpat, libero at laoreet feugiat, sem elit pellentesque nulla, vitae porttitor dui dui eget odio.
      </p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
      `;
  }
}
