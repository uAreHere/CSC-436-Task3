const ArrayFilter = () =>{

    const items = [
        {
            id: 1,
            name: 'Johnny',
        },
        {
            id: 2,
            name: 'Stacy',
        },
        {
            id: 3,
            name: 'Moses',
        },
    ];

    const filteredItems = items.filter((item) =>{
        return item.id !==2;
    });
    {/*the above can also be rewritten in one line, like below*/}

    {/*const filteredItems = items.filter(({id}) => id !== 2);*/}

    return <ol>
        {
            filteredItems.map(({id,name}) => <li key={id}>{name}</li>)
        }
    </ol>
}

export default ArrayFilter;