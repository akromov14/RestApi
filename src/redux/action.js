import { getList } from "../api"
import {  SET_LIST } from "./types";

export const setList = async (dispatch)=> {
    const data = await getList();

    console.log(data);

    dispatch( {type: SET_LIST, payload:data})
}


