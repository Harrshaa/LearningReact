import Heading from "./components/heading";
import State from "./components/state";
import Propss from "./components/propss";
function handleInputChange(event){
    console.log("someone is typing",event.target.value);
}

function App(){
  return(
    <>
    <div>
    <h2>Let's get started</h2>
    <Heading />
    <button onClick={()=>{
        console.log("button has been clicked");
    }}>Click me</button>
    <input onChange={handleInputChange}></input>
    </div>


    <State />
    <Propss />
    </>

  );

}
export default App;