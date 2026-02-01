import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}> 
        <h2 className={styles.heading2}>
          Find a better card&nbsp;deal <br className='sm:block hidden' /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover smarter ways to compare cards, understand benefits, and choose the option that fits your needs best. With clear insights and simple steps, finding the right deal has never been easier.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeal