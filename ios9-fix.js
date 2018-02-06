(function () {
    var regExp = /Version\/(\d).+Mobile.+Safari/g;
    var res = regExp.exec(navigator.userAgent);
    if (res !== null && res.length === 2 && parseInt(res[1]) < 10) {

        function setProto(A, B) {
            A.prototype = Object.create(
                B.prototype,
                {
                    constructor: {
                        configurable: true,
                        writable: true,
                        value: A
                    }
                }
            );
        }

        var nativeHTML = window.HTMLElement;
        function Safari9HTMLElement(self) {
            self = nativeHTML.call(self || this);
            return self;
        }
        setProto(Safari9HTMLElement, HTMLElement);

        window.HTMLElement = HTMLElement = Safari9HTMLElement;
    }
})();