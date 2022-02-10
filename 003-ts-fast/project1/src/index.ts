// jQuery('#foo');
// // 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
// jQuery = function(selector) {
//     return document.querySelector(selector);
// };

// jQuery('#foo');
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
// jQuery = function(selector) {
//     return document.querySelector(selector);
// };
// ERROR: Cannot assign to 'jQuery' because it is a constant or a read-only property.

jQuery("#foo");

jQuery(function () {
  alert("Dom Ready!");
});

let cat = new Animal("Tom");

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

let settings: jQuery.AjaxSettings = {
  method: "POST",
  data: {
    name: "foo",
  },
};

jQuery.ajax("/api/get_something", settings);

jQuery.ajax("/api/get_something", settings);
console.log(jQuery.version);
const e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick);

jQuery.fn.extend({
  check: function () {
    return this.each(function () {
      this.checked = true;
    });
  },
});
