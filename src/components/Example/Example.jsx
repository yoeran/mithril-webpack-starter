import m  from "mithril";

import "./Example.scss";

let count = 0;

const increment = () => {
  count++;
};

export const Example = {
  view: function() {
    return (
      <main class="example">
        <img src="static/img/logo.svg" />
        <h1 class="title">My Mithril app</h1>
        <p><a href="http://mithril.js.org/">Mithril</a> is a modern client-side Javascript framework for building Single Page Applications. It's small, fast and provides routing and XHR utilities out of the box.</p>
        <button onclick={increment}>Click to increment count</button>
        <p>Count: {count}</p>
      </main>
    );
  }
}
