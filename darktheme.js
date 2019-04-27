let style = document.createElement("style");
style.innerHTML = ".bg-white {" +
    "background-color: #24292e !important;" +
    "}" +
    "body {" +
    "color: #ffffff !important;" +
    "}" +
    ".text-gray-dark {" +
    "color: #ffffff !important;" +
    "}" +
    ".bg-gray {" +
    "background-color: #41464a!important;" +
    "}" +
    ".text-gray-light {" +
    "color: #ccc!important;" +
    "}" +
    ".link-gray-dark {" +
    "color: #ffffff!important;" +
    "}" +
    ".muted-link {" +
    "color: #cccccc!important;" +
    "}"
let head = document.querySelector("head");
head.append(style);