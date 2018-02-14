
const hideLine={
    line:'test--test--test',
    hidden:true
}
var namedetails="Show"
const ShowDetails =()=>{
    console.log("Test this")
    if(hideLine.hidden == true){    hideLine.hidden=false;
        namedetails="Hide"}
    else if(hideLine.hidden == false){ hideLine.hidden =true; 
        namedetails="Show"}
   
    RenderTemplate();
}


const getLine = () =>{
    if (hideLine.hidden === false){
        return <p>This is to be shown Click Again to Hide this Element </p>
    }
    else{
        return <p></p>
    }
}

const RenderTemplate = () =>{
    const template = (
<div>
        <button onClick={ShowDetails}> {namedetails} Details</button>

        {getLine()}
</div>               
    )
    const appRoot = document.getElementById('app');
    ReactDOM.render(template,appRoot);  
}

RenderTemplate();
//React.DOM.render()
