import "./App.scss";

let count = 0;

const increment = () => {
  count++;
};

export const App = {
  view: function () {
    return [
      m("main", {class: "app"}, [
        m("img", {src: "static/img/logo.svg"}),
        m("h1", {class: "title"}, "My Mithril app"),
        m("p", [
          m("a", {href: "http://mithril.js.org"}, "Mithril"),
          "is a modern client-side Javascript framework for building Single Page Applications.",
          "It's small, fast and provides routing and XHR utilities out of the box."
        ]),
        m("button", {onclick: increment}, "Click to increment count"),
        m("p", `Count: ${count}`)
      ])
    ];
  }
};
