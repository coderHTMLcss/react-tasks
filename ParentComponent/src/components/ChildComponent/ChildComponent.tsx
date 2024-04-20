interface IChildComponentProps {
    title: string,
    handleChangeTitle: () => void;
}

const ChildComponent: React.FC<IChildComponentProps> = ({ title, handleChangeTitle }) => {
    return (
        <div className="content">
            <h1 className="content__title">{title}</h1>
            <button onClick={handleChangeTitle} className="content__btn" type="button">change title</button>
        </div>
    )
}

export default ChildComponent;