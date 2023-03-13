import { supabase } from "./api/supabaseClient";
import { useState, useEffect } from "react";

export async function getData(){
    let {data} = await supabase.from('countries').select();
    return data;
}


export default async function Page(){
    const data = await getData();
    return (
        <ul>
            {data?.map((dat)=>{
                return <li>{dat.name}</li>
            })}
        </ul>
    )
}
