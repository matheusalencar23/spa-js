import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <ul>
        <li>
            Ut placerat quis orci ac imperdiet. Suspendisse sit amet massa a elit aliquet tincidunt et vel felis. Mauris fermentum, tortor sed mollis auctor, massa augue auctor orci, in consequat sem nibh eu lectus. Nam fringilla magna quis nunc dictum, tempus congue eros consequat.
        </li>
        <li>
            Aenean mattis viverra vehicula. Nullam blandit, leo et vulputate congue, nisl urna commodo diam, nec semper turpis leo sit amet quam.
        </li>
        <li>
            Etiam in ligula lectus. Vestibulum sit amet rhoncus libero. Nam a fringilla sapien, ut ullamcorper erat. Nullam ultricies sapien non euismod suscipit.
        </li>
      </ul>
      `;
  }
}
