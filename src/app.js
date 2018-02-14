console.log("App is running!");

//var template =<h2>Something new NEW </h2> 
const templateTwo = (
  <div>
      <h1> Naveen </h1>
      <p>Age: 23</p>
      <p> Location: NZ Auckland </p>
  </div>
    )
const App={
    title:"Indecision App",
    subtitle: "This is sub",
    options:[]}
//Challenge 3 
// Only render the subtite and P tag if subtutle exist:logical AND operator
//render new p tag -if options.length> 0 "Here are your options" / "no options"

const onFormSubmit= (e)=>{
    e.preventDefault();
    console.log('form submitted');  
    const option = e.target.elements.option.value;

    if(option){
        App.options.push(option);
        e.target.elements.option.value='';

    }
    RenderTemplate();
}
const RemoveAll = () =>{
 App.options.length=0;
 RenderTemplate();
}

const SelectOption = () =>{
    const RandomNum = Math.floor(Math.random()* App.options.length);
    alert(App.options[RandomNum]);
}

const RenderTemplate = () =>{
const template =(
    <div>
        <h1>{App.title}</h1>
        {App.subtitle && <p>{App.subtitle} </p>}
        <button onClick={RemoveAll}> Remove all options </button>
        <button disabled={App.options == 0} onClick ={SelectOption}> What should I do? </button>
       <h5> {App.options.length>0 ? "Here are your options":" No Options" }</h5>
       <p>  {App.options.length}</p>

        <ol>
        {  //Challenge 
           //Do some  mapping over the options of the app component

           App.options.map((option)=>{
               return <li key={option}>{option}</li>
           })
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name ="option"/>
            <button > Add Option </button>
        </form>
    </div>
)

    const appRoot = document.getElementById('app');
    ReactDOM.render(template,appRoot);

}
RenderTemplate();

//div
//h1->Naveen
//p-->Age:20
//p--> Location: NZ
//Render templateTwo instead of template