interface IListItemBase {
    name?: string;
    title?: string;
}

interface IListProps<T> {
    items: T[];
}

const ListItems = <T extends IListItemBase>({ items }: IListProps<T>) => {
    return (
        <div>
            <ul>
                {items.map(({ name, title }) => <li key={name || title}>{name || title}</li>)}
            </ul>
        </div>
    )
};

export default ListItems;