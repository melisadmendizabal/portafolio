import { Header } from '../../Components/Header/Header'
import { AboutMe } from '../AboutMe/AboutMe'
import { Proyects } from '../Proyects/Proyects'
import './fullSections.css'

export const FullSections = () => {
    return (
        <main className='fullSectionStyle'>
            <Header></Header>
            <AboutMe></AboutMe>
            <Proyects></Proyects>           

        </main>
    )
}