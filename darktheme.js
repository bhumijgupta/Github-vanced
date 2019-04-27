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
    "background-color: #24292e !important;" +
    "}" +
    ".text-gray-light {" +
    "color: #ccc!important;" +
    "}" +
    ".link-gray-dark {" +
    "color: #ffffff!important;" +
    "}" +
    ".muted-link {" +
    "color: #cccccc!important;" +
    "}" +
    ".border-bottom{" +
    "border-bottom-color: #444d56 !important;" +
    "}" +
    ".border-top {" +
    "border-top-color: #444d56 !important;" +
    "}" +
    ".border-right {" +
    "border-right-color: #444d56 !important;" +
    "}" +
    ".link-gray {" +
    "color: #cccccc!important;" +
    "}" +
    ".Box {" +
    "background-color: #343a40;" +
    "border-color: #353c44;" +
    "}" +
    ".text-gray {" +
    "color: #ccc!important;" +
    "}" + "::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */" +
    "color: #ccc;" +
    "opacity: 1; /* Firefox */" +
    "}" +

    ":-ms-input-placeholder { /* Internet Explorer 10-11 */" +
    "color: #ccc;" +
    "}" +

    "::-ms-input-placeholder { /* Microsoft Edge */" +
    "color: red;" +
    "}" +
    ".form-control, .form-select {" +
    "background-color: #41464a;" +
    "border-color: #353c44;" +
    "}" +
    ".ajax-pagination-form .ajax-pagination-btn {" +
    "background: #343a3f;" +
    "border-color: #353c44;" +
    "}" +
    ".rule, hr {" +
    "border-bottom-color: #24292e;" +
    "}"
let head = document.querySelector("head");
head.append(style);