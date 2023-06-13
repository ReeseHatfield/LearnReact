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
function ListGroup(){

    const header = <h1>My List Group</h1>

    const items : string[] =[
        'Paris',
        'Tokyo',
        'Chillicothe',
        'Fairborn'
    ]

    if(items.length === 0){
        return (
            <>
                {header}
                <p>No cities found</p>
            </>
        )
    }


   const mapped_items = items.map((item: string) => {
        return <li key={item}>
            {item}
        </li>
    })

    return(
        <>
            {header}
            <ul className="list-group">
                {mapped_items}
            </ul>
        </>
    );
}

export default ListGroup