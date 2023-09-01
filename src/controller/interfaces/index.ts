import { BasicResponse } from "../types";


export interface IHelloController {
    getMessage(name?:string) : Promise<BasicResponse> //Devuelve una promesa de tipo basic response
}