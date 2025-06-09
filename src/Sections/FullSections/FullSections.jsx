import { Header } from '../../Components/Header/Header'
import { AboutMe } from '../AboutMe/AboutMe'
import { Proyects } from '../Proyects/Proyects'
import { Sofwares } from '../Softwares/Softwares'
import './fullSections.css'

export const FullSections = () => {
    return (
        <main className='fullSectionStyle'>
            <section className='foot'>
            <Header></Header>
            </section>

            <section className='fullContent'>
            <AboutMe></AboutMe>
            <Proyects></Proyects>  
            <Sofwares></Sofwares>    
            </section>  

        </main>
    )
}