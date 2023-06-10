import {useState} from 'react'
import {motion} from 'framer-motion'
import Loader from './components/Loader'

function App() {
  const [showLoader,setShowLoader] = useState(true)

  const paintName = {
    hidden:{
      y:"100%"
    },
    show:{
      y:0,
      transition:{
        duration:0.5
      }
    }
  }

  const paintImage = {
    hidden:{
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
    },
    show:{
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition:{
        delay:0.5,
        duration:1.1,
        ease:"easeIn"
      }
    }
  }
  const navbarAnimation = {
    hidden:{
      y:-50,
    },
    show:{
      y:0,
      transition:{
        delay:1,
        duration:0.7,
        ease:"easeIn"
      }
    }
  }
  
  return (
    <>
      {
        showLoader ? (
          <Loader setShowLoader={setShowLoader} />
        ) : (
          <>
            <motion.nav 
              variants={navbarAnimation}
              initial="hidden"
              animate="show"
              className="px-8 pt-2 w-full">
              <ul className="flex justify-between items-center">
                <li><a href="#" className="font-bold text-2xl">Art-</a></li>
                <li><a href="#" className="font-bold text-xl">menu</a></li>
              </ul>
            </motion.nav>
            <section>
              <div className='overflow-hidden'>
                <motion.h1
                  variants={paintName}
                  initial="hidden"
                  animate="show"
                  className="text-[110px] font-bold text-center uppercase">Battle of Grunwald</motion.h1>
              </div>
              <div className="px-4 w-full h-[450px] overflow-hidden relative">
                <motion.img
                  variants={paintImage}
                  initial="hidden"
                  animate="show"
                  src="/art.webp" 
                  alt="Battle of Grunwald" className="object-cover brightness-90" />
                <p className="w-[1300px] absolute left-1/2 bottom-8 transform -translate-x-1/2 text-[#eaeaea] text-center tracking-wide">Battle of Grunwald. Jan Matejko based his depiction of the Battle of Grunwald on the account of Jan Długosz. Matejko has shown the final stage of the battle - retreat of Teutonic Knights and the death of Grand Master Ulrich von Jungingen. Provided by National Museum of Warsaw. PD for Public Domain Mark</p>
              </div>
            </section>
          </>
        )
      }
    </>
  )
}

export default App
