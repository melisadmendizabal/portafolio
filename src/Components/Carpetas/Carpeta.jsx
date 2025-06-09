import './carpeta.css'

export const Carpeta = ({
    title,
    link,
    picture,
    titleDescription,
    description,
    git,
    bgColor

    //Referencia de animación: https://codepen.io/jakegilesphillips/pen/MveNLe
}) => {
    return(
        <div className='backCarpeta'>
            <div className='contentAnimation'>
                <div className="animatedCarpeta">
                    <div className={`atrasCarpeta ${bgColor}`}></div>
                    <div className='hoja'>
                        <a href = {link} target='_blank'>
                            <img src= {picture}></img>
                        </a>

                    </div>
                    <div className='hoja2'>
                        
                        <p className='des'>{description}</p>
                        <h3 className='h3Carpetas'>{titleDescription}</h3>
                        <a href = {git} >Link de GitHub</a>
                    </div>
                    <div className='adelante'>
                        <div className={`pico ${bgColor}`}> 
                            <p className='nameCarpet'> {title}</p>
                            
                        </div>
                        <div className={`tapa ${bgColor}`}></div>
                    </div>

                </div>

            </div>
  
        </div>
    )
}