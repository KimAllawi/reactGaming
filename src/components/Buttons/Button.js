import { Link } from 'react-router-dom'
import './Button.css'


const PrimaryButton = (props) => {
  return (
    <div className='button primary-btn'>
      {props.children}
    </div>
  )
}


const SecondryButton = (props) => {
  return (
    <div className='button secondry-btn'>
      <Link to='/#'> {props.children} </Link>
    </div>
  )
}

export default PrimaryButton
export { SecondryButton }