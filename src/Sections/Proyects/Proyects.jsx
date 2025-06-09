import { Carpeta } from '../../Components/Carpetas/Carpeta'
import kuromiCalc from '../../assets/pictures/kuromiCalc.png'
import chat from '../../assets/pictures/chat.png'
import imagen from '../../assets/pictures/dibujo.png'
import historia from '../../assets/pictures/historia.png'
import club from '../../assets/pictures/clubs2.png'
import restaurante from '../../assets/pictures/restaurante.png'
import './proyects.css'

export const Proyects = () => {
    return (
        <section className='proyectStyle'>
            <h2 className='title'>Algunos Proyectos</h2>
            <article className='carpetas'>
                <Carpeta 
                    title={'Calculadora'}
                    link = {'https://calicheoficial.lat/Melisa/CalcKuromi/index.html'}
                    picture={kuromiCalc}
                    bgColor={'purple'}
                    titleDescription = {'Vite - React - Storybook'}
                    description = {'Una calculadora simple que ofrece operaciones básicas (+, -, *, /, mod) y tiene una estética inspirada en Kuromi. Incluye animaciones en los botones al presionar. Este proyecto también presenta una interfaz interactiva que combina funcionalidades prácticas con un diseño atractivo.'}
                    git = {'https://github.com/melisadmendizabal/Proyecto1WebCalculadora'}
                ></Carpeta>

                <Carpeta 
                    title={'Diseño de chat'}
                    link = {'https://calicheoficial.lat/Melisa/js/base.html'}
                    picture={chat}
                    bgColor={'blue'}
                    titleDescription={'HTML - CSS - JavaScript'}
                    description={'Un chat que conecta a los usuarios con otros compañeros de clase a través de un endpoint externo. Los usuarios pueden cambiar el tema visual del chat modificando los colores de la interfaz. El chat se centra en la interacción en tiempo real y la personalización del diseño.'}
                ></Carpeta>

                <Carpeta 
                    title={'Meilin Lee'}
                    link = {'https://calicheoficial.lat/Melisa/imagenCss/formato.html'}
                    picture={imagen}
                    bgColor={'pink'}
                    titleDescription={'HTML - CSS'}
                    description={'Este ejercicio consistió en recrear a Mei Mei de Turning Red utilizando solo HTML y CSS. Fue una experiencia que me permitió explorar la creación de arte visual con código, y descubrí mi interés por dibujar directamente en el navegador.'}
                ></Carpeta>
            </article>

            <article className='carpetas'>
                <Carpeta 
                    title={'Sin culpa'}
                    link = {'https://calicheoficial.lat/Melisa/CalcKuromi/index.html'}
                    picture={historia}
                    bgColor={'pink'}
                    titleDescription = {'HTML'}
                    description = {'La historia, narra la vida de un hombre que decide dejar su trabajo para nunca regresar. A lo largo de la historia, las decisiones se toman mediante los enlaces, creando una narrativa interactiva.'}
                    git = {'https://github.com/melisadmendizabal/Sin-culpa-HTML'}
                ></Carpeta>

                <Carpeta 
                    title={'CRUD de clubs'}
                    link = {'https://calicheoficial.lat/Melisa/js/base.html'}
                    picture={club}
                    bgColor={'purple'}
                    git={'https://github.com/Ren23813/Lab3_BD1'}
                    titleDescription={'Vite - React - Python - SQLAlchemy'}
                    description={'Una aplicación CRUD que maneja una base de datos de estudiantes y clubes. Permite gestionar registros, crear nuevas entradas y actualizar o eliminar datos. El proyecto se basa en un sistema de endpoints para manejar tanto la parte visual como los datos en el backend.'}
                ></Carpeta>

                <Carpeta 
                    title={'Restaurante'}
                    link = {'https://calicheoficial.lat/Melisa/imagenCss/formato.html'}
                    picture={restaurante}
                    bgColor={'blue'}
                    git={'https://github.com/JuanDsm04/db-project4'}
                    titleDescription={'Vite - React - Python - SQLAlchemy'}
                    description={'Similar al proyecto de clubes, este sistema se centra en gestionar ingredientes y recetas de un restaurante. Permite la creación de recetas, la gestión de ingredientes y la interacción dinámica con una base de datos, proporcionando una experiencia robusta para el manejo de información.'}
                ></Carpeta>
            </article>

        </section>
    )
}