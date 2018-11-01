import axios from "axios";
import * as crypto from "crypto-js";
import { api } from "configs/";
import { HTTPStatusCodes } from "configs/constants";
//import * as querystring from 'querystring'

export const upload = async image => {

  
//const path = api + "/upload/" + image.get("nome") + ".jpg";
//console.log(path); 

fetch(`${api}/upload`, {
    method: 'POST',
    body: image,
  }).then((response) => {
    response.json().then((body) => {
    });
});
return(`${api}` + "/public/" + image.get("nome") + ".jpg");


}