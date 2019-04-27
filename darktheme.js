let style = document.createElement("style");
style.innerHTML = ".bg-white {" +
    "background-color: #24292e !important;" +
    "}" +
    "body {" +
    "color: #ffffff !important;" +
    "background-color: #24292e;" +
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
    "}" +

    "::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */" +
    "color: #ccc;" +
    "opacity: 1; /* Firefox */" +
    "}" +
    ":-ms-input-placeholder { /* Internet Explorer 10-11 */" +
    "color: #ccc;" +
    "}" +
    "::-ms-input-placeholder { /* Microsoft Edge */" +
    "color: #ccc;" +
    "}" +

    ".form-control, .form-select {" +
    "background-color: #41464a;" +
    "border-color: #353c44;" +
    "}" +
    ".ajax-pagination-form .ajax-pagination-btn {" +
    "background: #343a3f;" +
    "border-color: #353c44 !important;" +
    "}" +
    ".rule, hr {" +
    "border-bottom-color: #24292e;" +
    "}" +

    ".dropdown-menu {" +
    "background-color: #343a3f;" +
    "}" +

    ".header-nav-current-user .user-profile-link {" +
    "color: #fff;" +
    "}" +
    ".dropdown-item {" +
    "color: #ffffff;" +
    "}" +
    ".dropdown-divider {" +
    "border-top-color: #24292e;" +
    "}" +
    ".avatar-before-user-status {" +
    "border-color: #444d56" +
    "}" +
    ".border {" +
    "border-color: #444d56 !important;" +
    "}" +
    ".vcard-username {" +
    "color: #ccc;" +
    "}" +
    ".js-profile-editable-edit-button {" +
    "background-color: #444d56;" +
    "background-image: none;" +
    "color: #ffffff;" +
    "}" +
    ".btn.selected, .btn:active, [open]>.btn, .btn:hover {" +
    "color: #0166d6;" +
    "}" +
    ".pinned-item-list-item .pinned-item-handle {" +
    "color: #fff;" +
    "}" +
    "li.pinned-item-list-item.p-3.mb-3.border.border-gray-dark.rounded-1.js-pinned-item-list-item.public.source.reorderable.sortable-button-item {" +
    "background-color: #343a40;" +
    "}" +
    ".profile-rollup-wrapper+.profile-rollup-wrapper {" +
    "border-top: 1px solid #ccc;" +
    "}" +
    ".filter-item {" +
    "color: #ccc;" +
    "}" +
    ".user-profile-nav, .user-profile-sticky-bar:after {" +
    "background-color: #343a3f;" +
    "border-bottom-color: #444d55;" +
    "}" +
    ".UnderlineNav-item {" +
    "color: #ffffff;" +
    "}" +
    ".UnderlineNav-item.selected {" +
    "border-bottom-color: #0366d6;" +
    "color: #ffffff;" +
    "}" +
    ".UnderlineNav-item:focus, .UnderlineNav-item:hover {" +
    "border-bottom-color: #d1d5da;" +
    "color: #0366d6;" +
    "}" +
    ".Counter {" +
    "color: #ccc" +
    "}" +
    ".topic-tag {" +
    "background-color: #343a3e;" +
    "}"

let head = document.querySelector("head");
head.append(style);