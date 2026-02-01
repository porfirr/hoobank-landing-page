import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='white__gradient absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full' />
        <div className='pink__gradient absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing and invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Simplify your payments with a unified platform that lets you track expenses, manage invoices, and stay in control of your cash flow — all in real time.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="app_store" className='w-[128px] h-[42px] object-contain cursor-pointer mr-5' />
          <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}
export default Billing