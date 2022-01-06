import "./../style/style.css";

export default () => {
  import(/* webpackChunkName: 'add-content' */ "./add-content").then(
    (addContent) => {
      addContent.default()
    }
  );

  document.write("my first webpack app. <br />");
};
