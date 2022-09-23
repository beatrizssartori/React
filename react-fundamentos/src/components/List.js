const List = () => {
    const items = [{
        id: 1,
        name: 'Beatriz'
    }, {
        id: 2,
        name: 'Nicolas' 
    }, {
        id: 3,
        name: 'Miguel'
    }];

    return (
        <div>
            {items.map((item) => (
                <p key = {item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    )
}

export default List