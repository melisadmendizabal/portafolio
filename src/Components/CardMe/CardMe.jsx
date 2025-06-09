import './cardMe.css'

export const CardMe = ({
    title,
    text,
    size = 'medium',
    bgColor = 'purple'
}) => {
    return(
        <article className={`cardMeSytle ${size} ${bgColor}`}>
            <h3 className='title3'>{title}</h3>
            <p className='p3'>{text}</p>
        </article>
    )
}