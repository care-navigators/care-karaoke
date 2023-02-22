
import Data from '../data/bios-data.json'
import React, { useState} from 'react';

export default function Bios(x) {

    const [data, setData] = useState(null);

    setData(Data[x]);

    return(
        <div>
            <h1>{data.id}</h1>
            <h3> { data.firstname} </h3>
        </div>
    )
}