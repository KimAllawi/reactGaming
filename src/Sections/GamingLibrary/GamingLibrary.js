import './GamingLibrary.css'
import { SectionHeader, SectionWrapper, GamingLibraryCard } from '../../components/indexComponent'
import GamingLibraryData from '../../Data/GamingLibraryData'



const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hourse_played={card.hourse_played} download={card.download} />
    })

    return (
        <>

            <SectionWrapper>

                <SectionHeader>
                    <div className='section-header'>
                        <h4>Gaming Library</h4>
                    </div>

                    {cards}


                </SectionHeader>

            </SectionWrapper>

        </>
    )
}

export default GamingLibrary