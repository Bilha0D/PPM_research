import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import * as key from "./apiKey.js";
import ConverToEng from './ConverToEng'

function Autocomplete() {
    const [address, setAddress] = useState({value: {place_id: ""}});
    let place_id = address.value.place_id

      console.log(address)
      console.log(address.value.place_id)
    

    return (
      <div className='Autocomplete'>
        <GooglePlacesAutocomplete
          apiKey={key.apiKey.key}
          apiOptions={{ language: "iw", region: "IL" }}
          selectProps={{
            value: address,
            onChange: setAddress,
            isValidNewOption: true
          }}
        />
        <ConverToEng place_id= {place_id}/>
      </div>
    );
  }
  
  export default Hannanel;