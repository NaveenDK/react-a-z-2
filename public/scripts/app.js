'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    renderTemplate();
};
var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            '    ',
            visibility ? 'Hide Details' : 'Show Details',
            ' '
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                visibility ? 'These are the details that toggles off and on' : '',
                ' '
            )
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};
renderTemplate();
