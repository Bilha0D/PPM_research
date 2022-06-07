import * as key from "./apiKey.js";
import axios from "axios";



function ConverToEng(props) {
 
    


    const get_request = async () =>{
        
        const res = await axios.get('/Api',  {params: {place_id: props.place_id , key: key.apiKey.key , headers: {'Content-Type': 'text/plain'}, fields:"name", language:"en" }})

        
        .then(response => {
            console.log("Success ========>", response);})

        .catch(error => {
            console.log("Error ========>", error);})

        
    }





    return(
        <div>
            <input type = "button" value="get_details" onClick={get_request}/>
            <br/>
        </div>
    );

}
    export default ConverToEng;




     





  

