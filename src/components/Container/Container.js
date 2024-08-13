import './Container.css'
// import Hero  from '../../Sections/Hero/Hero'
// import Most  from '../../Sections/Most/Most'
// import GamingLibrary from '../../Sections/GamingLibrary/GamingLibrary'
// import Footer from '../../Sections/Footer/Footer'

const Container = (props) => {
  return (
    <div className='container main-container'>
      {props.children}
    </div>

  )
}

export default Container