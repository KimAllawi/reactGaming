import './Most.css'

import {Card , SectionHeader , SectionWrapper} from '../../components/indexComponent'

import MostPopular from '../../Data/MostPopularData'

const Most = () => {



const cards = MostPopular.map(card => {

  return <Card key={card.id} image={card.image} title={card.title} category={card.category} download={card.download} rate={card.rate} />
})

  return (
    <>
      <SectionWrapper>
        

        <SectionHeader>
          <div className='section-header'>
            <h4>Most popular</h4>
          </div>
        </SectionHeader>

        <div className='most-popular-items'>

          {cards}
         

        </div>
        
        </SectionWrapper>








    </>
  )
}

export default Most