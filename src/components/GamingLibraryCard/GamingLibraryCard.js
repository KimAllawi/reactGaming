import { SecondryButton } from '../Buttons/Button'
import './GamingLibraryCard.css'


const GamingLibraryCard = (props) => {
  return (
    <>
      <div className='gaming-library-data'>
        <ul>
          <li><img src={props.image} alt='' /></li>
          <li><h4>{props.title}</h4><span>{props.category}</span></li>
          <li><h4>Data added</h4><span>{props.date_added}</span></li>
          <li><h4>category</h4><span>{props.hourse_played}</span></li>
          <li><h4>hourse_played</h4><span>{props.download}</span></li>
          <SecondryButton>
            Download
          </SecondryButton>

        </ul>
      </div>

    </>
  )
}

export default GamingLibraryCard