declare interface ShadyCSS {
    prepareTemplate(templateElement, elementName, elementExtension?);
    styleElement(element)
    styleSubtree(element, overrideProperties);
    styleDocument(overrideProperties);
    getComputedStyleValue(element, propertyName);
    nativeCss: boolean;
    nativeShadow: boolean;
}
declare var ShadyCSS: ShadyCSS

function needsShadyCSS():boolean {
    return typeof window['ShadyCSS'] !== undefined && (!ShadyCSS.nativeCss || !ShadyCSS.nativeShadow);
}


const template = document.createElement('template');
template.innerHTML = `
    <style>
        #prespan {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: #f00;
        }
    </style>
    <span id="prespan"></span><span><slot></slot></span>
`;
if(needsShadyCSS()) {
    ShadyCSS.prepareTemplate(template, 'my-element');
}
class MyElement extends HTMLElement {
    
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild((<HTMLTemplateElement>template.cloneNode(true)).content);

        if(needsShadyCSS()) {
            ShadyCSS.styleElement(this);
        }

    }
}

const nestedTemplate = document.createElement('template');
nestedTemplate.innerHTML = `
    <style>
        #prespan {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: #0f0;
        }
    </style>
    <span id="prespan"></span><span><slot></slot></span>
`;
if(needsShadyCSS()) {
    ShadyCSS.prepareTemplate(nestedTemplate, 'my-element-nested');
}

class MyElementNested extends HTMLElement {
    
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild((<HTMLTemplateElement>nestedTemplate.cloneNode(true)).content);

        if(needsShadyCSS()) {
            ShadyCSS.styleElement(this);
        }

    }
}

window.customElements.define('my-element', MyElement);
window.customElements.define('my-element-nested', MyElementNested);