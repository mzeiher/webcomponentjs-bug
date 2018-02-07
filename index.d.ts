interface ShadyCSS {
    prepareTemplate(templateElement: any, elementName: any, elementExtension?: any): any;
    styleElement(element: any): any;
    styleSubtree(element: any, overrideProperties: any): any;
    styleDocument(overrideProperties: any): any;
    getComputedStyleValue(element: any, propertyName: any): any;
    nativeCss: boolean;
    nativeShadow: boolean;
}
declare var ShadyCSS: ShadyCSS;
declare function needsShadyCSS(): boolean;
declare const template: HTMLTemplateElement;
declare class MyElement extends HTMLElement {
    constructor();
}
declare const nestedTemplate: HTMLTemplateElement;
declare class MyElementNested extends HTMLElement {
    constructor();
}
