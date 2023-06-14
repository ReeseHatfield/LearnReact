/*
JSX = JavaScript XML
-> define what html to return
 */


/*
whe you wanna return multiple top level
html elements, wrap it in a div
or better, use a Fragment
even better, instead of
<Fragment></Fragment>, use <> </>
 */


/*
Cannot iterate with JSX
 */


//when rendering a list, each child in list should have a unique key
import {ReactComponentElement} from "react";
import { MouseEvent } from "react";

function ListGroup(){

    const header = <h1>My List Group</h1>

    const items : string[] =[
        'Paris',
        'Tokyo',
        'Chillicothe',
        'Fairborn'
    ]

    let selectedListItem = -1

    if(items.length === 0){
        return (
            <>
                {header}
                <p>No cities found</p>
            </>
        )
    }

    const handleEvent = (event: MouseEvent) =>{
        //set selectedListItem to index??
    }



    const mapped_items = items.map((item: string, index: number) => {
        return <li
            key={index}
            className= {index === selectedListItem ? 'list-group-item active' : 'list-group-item'}
            onClick={handleEvent}
        >
            {item}
        </li>
    })

    return(
        <>
            {header}
            <ul className="list-group"> {mapped_items}</ul>
        </>
    );
}

export default ListGroup