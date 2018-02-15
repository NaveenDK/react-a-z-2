let visibility = false

const toggleVisibility = ()=> {
    visibility = !visibility
    renderTemplate();
}
const renderTemplate = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>    {visibility ? 'Hide Details':'Show Details'} </button>
        <div>
            <p>{visibility?'These are the details that toggles off and on': ''} </p>
        </div>
            </div>
    )
    ReactDOM.render(template,document.getElementById('app'));
}
renderTemplate();