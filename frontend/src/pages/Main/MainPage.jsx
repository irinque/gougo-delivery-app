import './MainPage.css'
import logo from '../../assets/card1.jpeg'

function MainPage() {
  return (
    <main className='app-main'>
      <section className='main-section'>
        <div className="section-style-1">
          <div className="section-content-style-1">
            <h1>Быстрая доставка</h1>
            <div className="section-content-form">
              <div></div>
              <input className='form-input' placeholder='Откуда'></input>
            </div>
            <div className="section-content-form">
              <div></div>
              <input className='form-input' placeholder='Куда'></input>
            </div>
          </div>
          <div className='section-content-style-1-1'>
            <img src={ logo } alt='logo'></img>
          </div>
        </div>
      </section>
      <section className='main-section'>
        <div className="section-style-2">
        </div>
      </section>
    </main>
  )
}

export default MainPage