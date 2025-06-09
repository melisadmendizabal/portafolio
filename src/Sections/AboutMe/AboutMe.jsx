import { CardMe } from '../../Components/CardMe/CardMe'
import yo from '../../assets/pictures/yo.png'
import hola from '../../assets/pictures/melisa.png'
import { Carpeta } from '../../Components/Carpetas/Carpeta'
import './aboutMe.css'

export const AboutMe = () => {
    return(
        <section className='aboutMeStyle' id='sobremi'>
            <aside className='cardsStyle'> 
                <h2 className='title'>
                    Un poco sobre mi 
                </h2>

                

                <div className='rowCards'>
                    <CardMe 
                        title = 'Desarrollo web y bases de datos'
                        text = 'Estudio Ingeniería en Computación, con un enfoque en desarrollo frontend y bases de datos. Aún estoy aprendiendo sobre JavaScript y otras tecnologías. Me apasiona tanto el diseño de personajes como la creación de interfaces web, y me interesa la interacción entre usuarios y productos, buscando siempre un diseño funcional y estético.'
                        size='medium'
                        bgColor='purple'
                    ></CardMe>

                    <CardMe 
                        title = 'Primer contacto con la programación'
                        text = 'Mi interés por la programación comenzó en tercero básico, cuando aprendí lo básico de HTML y CSS en una clase de computación. Aunque no entendía completamente, me emocionó ver que lo que escribía funcionaba, lo que me motivó a seguir aprendiendo.'
                        size='little'
                        bgColor='green'
                    ></CardMe>
                </div>

                <div className='rowCards'>
                    <CardMe 
                        title = 'El futuro en los videojuegos'
                        text = 'Me considero una persona creativa. En mi tiempo libre, disfruto dibujar, pintar con acuarelas y trabajar con materiales como arcilla y cartón. La creatividad es clave en mi vida y disfruto el proceso de crear y experimentar con nuevas ideas.'
                        size='little'
                        bgColor='green'
                    ></CardMe>

                     <CardMe 
                        title = 'Una vida artística y creativa'
                        text = 'Quiero dedicarme al desarrollo de videojuegos. Aunque no tuve una buena computadora cuando era pequeña, descubrí los videojuegos a través de YouTube. Mis favoritos son Tetris, Buscaminas y Minecraft, y me encantan historias como las de Detroit: Become Human y The Last of Us.'
                        size='medium'
                        bgColor='purple'
                    ></CardMe>
                </div>


            </aside>
            <section className='imagenAboutMe'> 
                <img src= {yo} className='yo'></img>
                <img src= {hola} className='hola'></img>
            </section>


        </section>
    )
} 