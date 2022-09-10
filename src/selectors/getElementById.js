import { response } from "../data/response";

export const getElementById = (id="") => {
    return response.find(product => product.id===id);
}