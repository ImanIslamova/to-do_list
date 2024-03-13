
const Advertising = ({title, value, href, description}) => {
    return (
        <div className="todo__item">
            <div className="element">{title}</div>
            <div className="todo__task"><a href={href}>{value}</a></div>
            <div className="todo__task">{description}</div>
        </div> 
    )
}

export default Advertising;

