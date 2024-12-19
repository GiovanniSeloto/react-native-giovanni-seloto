export default function CorePops({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h2> {title} </h2>
            <p> {description} </p>
        </li>

    )
}