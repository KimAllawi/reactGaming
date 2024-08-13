import './Hero.css'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/Buttons/Button'

const Hero = () => {
  return (


    <div className='hero-main'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'> welcome to cyborg </h6>
        <h4 className='hero-title'> <em> browser </em> our popular games here </h4>

        <PrimaryButton>

          <div className='main-button'>
            <Link to='brows.html'> Browser Now </Link>
          </div>

        </PrimaryButton>




      </div>
    </div>


  )
}

export default Hero