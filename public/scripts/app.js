"use strict";

var hideLine = {
    line: 'test--test--test',
    hidden: true
};
var namedetails = "Show";
var ShowDetails = function ShowDetails() {
    console.log("Test this");
    if (hideLine.hidden == true) {
        hideLine.hidden = false;
        namedetails = "Hide";
    } else if (hideLine.hidden == false) {
        hideLine.hidden = true;
        namedetails = "Show";
    }

    RenderTemplate();
};

var getLine = function getLine() {
    if (hideLine.hidden === false) {
        return React.createElement(
            "p",
            null,
            "This is to be shown Click Again to Hide this Element "
        );
    } else {
        return React.createElement("p", null);
    }
};

var RenderTemplate = function RenderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: ShowDetails },
            " ",
            namedetails,
            " Details"
        ),
        getLine()
    );
    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

RenderTemplate();
//React.DOM.render()
