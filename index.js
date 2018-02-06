var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function needsShadyCSS() {
    return typeof window['ShadyCSS'] !== undefined && (!ShadyCSS.nativeCss || !ShadyCSS.nativeShadow);
}
var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        #prespan {\n            display: inline-block;\n            width: 10px;\n            height: 10px;\n            background-color: #f00;\n        }\n    </style>\n    <span id=\"prespan\"></span><span><slot></slot></span>\n";
if (needsShadyCSS()) {
    ShadyCSS.prepareTemplate(template, 'my-element');
}
var MyElement = /** @class */ (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        var _this = _super.call(this) || this;
        var shadow = _this.attachShadow({ mode: "open" });
        shadow.appendChild(template.cloneNode(true).content);
        if (needsShadyCSS()) {
            ShadyCSS.styleElement(_this);
        }
        return _this;
    }
    return MyElement;
}(HTMLElement));
var nestedTemplate = document.createElement('template');
nestedTemplate.innerHTML = "\n    <style>\n        #prespan {\n            display: inline-block;\n            width: 10px;\n            height: 10px;\n            background-color: #0f0;\n        }\n    </style>\n    <span id=\"prespan\"></span><span><slot></slot></span>\n";
if (needsShadyCSS()) {
    ShadyCSS.prepareTemplate(nestedTemplate, 'my-element-nested');
}
var MyElementNested = /** @class */ (function (_super) {
    __extends(MyElementNested, _super);
    function MyElementNested() {
        var _this = _super.call(this) || this;
        var shadow = _this.attachShadow({ mode: "open" });
        shadow.appendChild(nestedTemplate.cloneNode(true).content);
        if (needsShadyCSS()) {
            ShadyCSS.styleElement(_this);
        }
        return _this;
    }
    return MyElementNested;
}(HTMLElement));
window.customElements.define('my-element', MyElement);
window.customElements.define('my-element-nested', MyElementNested);
//# sourceMappingURL=index.js.map