import React, { useState } from 'react'
import { data } from './data';

const Search = () => {
    const[searchStern, setSearchstern] = useState('');
    return (
        <div className="text-center">
            <input type="text" placeholder="Search..." onChange={event=>{setSearchstern(event.target.value)}} />
            {
                data.filter((val)=>{
                   if(searchStern == ""){
                        return val
                   }else if(val.name.toLowerCase().includes(searchStern.toLowerCase())){
                    return val
                   }
                }).map((val, key)=>{
                    return(
                        <div key={key}>
                            <p className="mt-3">{val.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Search;
