function enableTheme() {
    let style = document.createElement("style");
    style.innerHTML =
        `.bg-white {
        background-color: #24292e !important;
        }
        body {
        color: #ffffff !important;
        background-color: #24292e;
        }
        .text-gray-dark {
        color: #ffffff !important;
        }
        .bg-gray {
        background-color: #24292e !important;
        }
        .text-gray-light {
        color: #ccc!important;
        }
        .link-gray-dark {
        color: #ffffff!important;
        }
        .muted-link {
        color: #cccccc!important;
        }
        .border-bottom{
        border-bottom-color: #444d56 !important;
        }
        .border-top {
        border-top-color: #444d56 !important;
        }
        .border-right {
        border-right-color: #444d56 !important;
        }
        .link-gray {
        color: #cccccc!important;
        }
        .Box {
        background-color: #343a40;
        border-color: #353c44;
        }
        .text-gray {
        color: #ccc!important;
        }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ccc;
        opacity: 1; /* Firefox */
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ccc;
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
        color: #ccc;
        }
        .form-control, .form-select {
        background-color: #41464a;
        border-color: #353c44;
        }
        .ajax-pagination-form .ajax-pagination-btn {
        background: #343a3f;
        border-color: #353c44 !important;
        }
        .rule, hr {
        border-bottom-color: #24292e;
        }
        .dropdown-menu {
        background-color: #343a3f;
        }
        .header-nav-current-user .user-profile-link {
        color: #fff;
        }
        .dropdown-item {
        color: #ffffff;
        }
        .dropdown-divider {
        border-top-color: #24292e;
        }
        .avatar-before-user-status {
        border-color: #444d56
        }
        .border {
        border-color: #444d56 !important;
        }
        .vcard-username {
        color: #ccc;
        }
        .js-profile-editable-edit-button {
        background-color: #444d56;
        background-image: none;
        color: #ffffff;
        }
        .btn.selected, .btn:active, [open]>.btn, .btn:hover {
        color: #0366d6;
        }
        .pinned-item-list-item .pinned-item-handle {
        color: #fff;
        }
        li.pinned-item-list-item.p-3.mb-3.border.border-gray-dark.rounded-1.js-pinned-item-list-item.public.source.reorderable.sortable-button-item {
        background-color: #343a40;
        }
        .profile-rollup-wrapper+.profile-rollup-wrapper {
        border-top: 1px solid #ccc;
        }
        .filter-item {
        color: #ccc;
        }
        .user-profile-nav, .user-profile-sticky-bar:after {
        background-color: #343a3f;
        border-bottom-color: #444d55;
        }
        .UnderlineNav-item {
        color: #ffffff;
        }
        .UnderlineNav-item.selected {
        border-bottom-color: #0366d6;
        color: #ffffff;
        }
        .UnderlineNav-item:focus, .UnderlineNav-item:hover {
        border-bottom-color: #d1d5da;
        color: #0366d6;
        }
        .Counter {
        color: #ccc
        }
        .topic-tag {
        background-color: #343a3e;
        }
        .filter-item:hover {
        color: #0166d6;
        }
        .calendar-graph text.month {
        fill: #cccccc;
        }
        .calendar-graph text.wday {
        fill: #ccc;
        }
        .table-list-header-toggle .btn-link.selected, .table-list-header-toggle .btn-link.selected:hover {
        color: #ffffff;
        }
        .table-list-header-toggle .btn-link {
        color: #ffffff;
        }
        .table-list-header-toggle .btn-link:hover {
        color: #ffffff;
        }
        .blankslate {
        background-color: #343a3e;
        }
        .select-menu-divider, .select-menu-header {
        background: #353b3f;
        border-bottom-color: #444d55;
        }
        .select-menu-divider, .select-menu-header .select-menu-title {
        color: #fff;
        }
        .select-menu-item {
        background-color: #343a3d;
        border-bottom-color: #24292e;
        color: #fff;
        }
        .select-menu-item.selected, details-menu .select-menu-item[aria-checked=true], details-menu .select-menu-item[aria-selected=true] {
        color: #fff;
        }
        .btn-outline {
        background-color: #343a3e;
        }
        .btn-outline.disabled, .btn-outline:disabled {
        background-color: #343a3d;
        color: #0366d687;
        }
        .repohead.experiment-repo-nav {
        background-color: #24292e;
        }
        .pagehead {
        border-bottom-color: #24292e;
        }
        nav.reponav.js-repo-nav.js-sidenav-container-pjax.container {
        background: #444d56;
        }
        .reponav-item {
        color: #cccccc;
        }
        .reponav-item.selected {
        background-color: transparent;
        border-color: #0366d6 transparent transparent;
        color: #ffffff;
        }
        .reponav-item .octicon {
        color: #ccc;
        }
        .reponav-item .Counter {
        color: #ccc;
        }
        .reponav-item:focus, .reponav-item:hover {
        color: #0366d6;
        border-top-color: #ffffff;
        }
        .overall-summary {
        background-color: #444d55;
        border-color: #444d56;
        }
        .numbers-summary .nolink, .numbers-summary a {
        color: #ffffff;
        }
        .numbers-summary .octicon {
        color: #ffffff;
        }
        .text-emphasized {
        color: #ffffff;
        }
        .branch-infobar {
        background-color: #24292e;
        border: solid #444d56;
        color: #ffffff;
        }
        .commit-tease {
        background-color: #444d56;
        border-color:  #444d56;
        color: #cccccc;
        }
        .team-mention, .user-mention {
        color: #ffffff;
        }
        table.files {
        background: none;
        }
        table.files td {
        border-top-color: #444d55;
        }
        table.files td.icon {
        color: #cccccc;
        }
        table.files td.message {
        color: #ffffff;
        }
        table.files td.age {
        color: #cccccc;
        }
        table.files tr.navigation-focus td, table.files tr[aria-selected=true] td {
        background: #444d56;
        }
        .Box-header {
        background-color: #343a3f;
        border-color: #24292e
        }
        .btn-octicon {
        color: #ffffff;
        }
        .markdown-body h1, .markdown-body h2 {
        border-bottom-color: #24292e
        }
        .markdown-body .highlight pre, .markdown-body pre {
        color: #000000;
        }
        .reponav {
        background-color: #444d56;
        }
        .breadcrumb {
        color: #ffffff;
        }
        .breadcrumb strong.final-path {
        color: #ffffff;
        }
        .bg-blue-light {
        background-color: #343a3f!important;
        }
        .Box-body {
        border-bottom-color: #24292e;
        }
        .Box-body.p-0.blob-wrapper.data.type-javascript {
        background-color: #f6f8fa;
        }
        .repohead h1 {
        color: #ffffff;
        }
        .repohead h1 .octicon {
        color: #ffffff;
        }
        table.highlight.tab-size {
        background-color: #f6f8fa;
        }
        table.files td.icon .octicon-file-directory {
        color: #cccccc;
        }
        .repository-lang-stats-graph {
        border-color: #444c54;
        }
        .commit-desc pre {
        color: #cccccc;
        }
        .repository-lang-stats ol.repository-lang-stats-numbers li .lang {
        color: #fff;
        }
        .repository-lang-stats ol.repository-lang-stats-numbers li>a, .repository-lang-stats ol.repository-lang-stats-numbers li>span {
        color: #ccc;
        }
        .select-menu-filters {
        background-color: #333a3c;
        }
        .select-menu-tabs .select-menu-tab-nav.selected, .select-menu-tabs .select-menu-tab-nav[aria-selected=true], .select-menu-tabs a.selected, .select-menu-tabs a[aria-selected=true] {
        background-color: #24292e;
        color: #fff;
        border: none;
        }
        .codesearch-results .repo-list-item+.repo-list-item {
        border-top: 1px solid #444d55;
        }
        .menu {
        background-color: #24292e;
        border-color: #343a3e;
        }
        .menu-item.selected {
        background-color: #444d56;
        color: #ffffff;
        }
        .menu-item {
        border-bottom-color: #444d56;
        }
        .menu-item.selected:before {
        background-color: #0366d6;
        }
        .select-menu-item-text .description {
        color: #cccccc;
        }
        .select-menu-item.selected .description, details-menu .select-menu-item[aria-checked=true] .description, details-menu .select-menu-item[aria-selected=true] .description {
        color: #ccc;
        }
        .subnav-item {
        border-color: #444d56;
        color: #ccc;
        }
        .subnav-item:hover {
        color: #0366d6;
        }
        .subnav-bordered {
        border-bottom-color: #444d55;
        }
        .blankslate {
        border: 1px solid #343a3d;
        }
        .blankslate code {
        color: #343a3d;
        }
        .Box-row--focus-gray.navigation-focus {
        background-color: #444d55;
        }
        .Box-row {
        border-top-color: #444d55;
        }
        .summary-stats li a, .summary-stats li, .summary-stats li .num {
        color: #ffffff;
        }
        .Subhead {
        border-bottom-color: #343a3e;
        }
        .summary-stats li {
        border-left-color: #444c54
        }
        .summary-stats li a:hover, .summary-stats li a:hover span {
        color: #0366d6;
        }
        .diffstat-summary {
        color: #fff;
        }
        .diffstat-summary strong {
        color: #fff;
        }
        .form-control, .form-select {
        color: #fff;
        }
        .jump-to-field-active {
        color: #f1f8ff!important;
        }
        .markdown-body table {
        color: black;
        }
        .gh-header {
        background-color: #24292e;
        }
        .gh-header-meta {
        color: #ccc;
        }
        .discussion-sidebar-item {
        color: #fff;
        }
        .discussion-sidebar-heading {
        color: #ffffff;
        }
        .discussion-sidebar-item+.discussion-sidebar-item {
        border-top-color: #444d56;
        }
        .input-contrast:focus {
        background-color: #42474b;
        }
        .Subhead-description {
        color: #CCC;
        }
        .reponame-suggestion {
        color: #0366d6;
        }
        .form-checkbox .note {
        color: #ccc;
        }
        .owner-reponame .slash {
        color: #fff;
        }
        .note {
        color: #ccc;
        }
        .form-group .form-control {
        background-color: #444d56;
        }
        .form-group .form-control:focus {
        background-color: #444d56;
        }
        .page-new-repo .octicon-repo {
        color: #fff;
        }
        .page-new-repo .color-private-icon {
        color: #d2a81e;
        }
        .markdown-body h1 .octicon-link, .markdown-body h2 .octicon-link, .markdown-body h3 .octicon-link, .markdown-body h4 .octicon-link, .markdown-body h5 .octicon-link, .markdown-body h6 .octicon-link {
        color: #fff;
        }
        .markdown-body blockquote {
        color: #ccc;
        }
        .commit-tease-sha {
        color: #fff;
        }
        .user-status-container-border-busy {
        background-color: #343a3f
        }
        .jump-to-suggestions-path {
        color: #fff;
        }
        .jump-to-suggestions-path .jump-to-octicon {
        color: #fff;
        }
        table.files td .simplified-path {
        color: #0366d6;
        }
        table.files td.message a {
        color: #0366d6;
        }
        .timeline-comment.current-user {
        border-color: #353c44;
        }
        .timeline-comment {
        background-color: #343a40;
        border-color: #353c44;
        }
        .gh-header-meta {
        border-bottom-color: #353c44;
        }
        .timeline-comment-header {
        color: #ffffff;
        }
        .discussion-item-header {
        color: #cccccc;
        }
        .discussion-item-entity {
        color: #cccccc;
        }
        .timeline-comment.current-user .timeline-comment-header {
        border-bottom-color: #24292e;
        background-color: #343a3f;
        }
        .timeline-comment-header {
        border-bottom: 1px solid #24292e;
        }
        .timeline-comment-wrapper {
        border-top-color: #fff0;
        border-bottom-color: #fff0;
        }
        .discussion-item+.discussion-item, .discussion-item-review+.discussion-item {
        border-top-color: #343a3f;
        }
        .discussion-timeline-actions {
        background-color: #24292e;
        border-top-color: #24292e;
        }
        .new-discussion-timeline .previewable-comment-form .comment-form-head.tabnav {
        background: #343a3f;
        }
        .tabnav {
        border-bottom-color: #24292e;
        }
        .toolbar-item {
        color: #fff;
        }
        .protip code {
        background-color: #41464a;
        }
        .tabnav-tab {
        color: #cccccc;
        }
        .tabnav-tab:focus, .tabnav-tab:hover {
        color: #ffffff;
        }
        .toolbar-item .menu-target {
        color: #ffffff;
        }        
        .gh-header .gh-header-sticky.is-stuck+.gh-header-shadow {
        background-color: #343a3f;
        }
        .timeline-comment-header {
        background-color: #343a40
        }
        .new-discussion-timeline .closed-banner {
        background: #343a40;
        border-bottom-color: #24292e;
        }
        `;


    let head = document.querySelector("head");
    head.append(style);
}

function checkStatus() {
    chrome.storage.sync.get(["config"], (result) => {
        if (result.config.darkmode === "enabled") {
            enableTheme();
        }
    });
}

checkStatus();