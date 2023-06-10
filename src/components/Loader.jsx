import {motion} from 'framer-motion'

const Loader = ({setShowLoader}) => {
    const fadeLoader = {
        hidden:{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition:{
                duration:1
            }
        },
        show:{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            transition:{
                delay:3.8,
                duration:1
            }
        }
    }

    const letterDelay = {
        hidden:{
            opacity:0,
        },
        show:{
            opacity:1,
            transition:{
                staggerChildren:0.3,
            }
        },
    }
    const letterDelayChildren = {
        hidden: {
            opacity: 0,
          },
        show: {
            opacity: 1,
            transition: {
                ease: 'easeIn',
            },
        },
    }
    const imageUp = {
        hidden: {
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
        },
        show: {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: {
                delay:2.2,
                duration:1,
                ease: "easeIn"
            },
        },
    }

  return (
    <motion.div 
        variants={fadeLoader}
        initial="hidden"
        animate="show"
        onAnimationComplete={() => setShowLoader(false)}
        className='h-screen w-screen bg-[#242424] flex flex-col  items-center justify-center overflow-hidden relative'>
        <motion.h1 
            variants={letterDelay}
            initial="hidden"
            animate="show"
            className='text-[#eaeaea] tracking-wider text-6xl absolute top-1/2 transform -translate-y-1/2 z-50'>
            {Array.from("Welcome").map((letter,idx) => (
                <motion.span 
                    variants={letterDelayChildren}
                    key={idx}>{letter}
                </motion.span>
            ))}
        </motion.h1>
        <motion.div
            className='w-[400px] mt-4 overflow-hidden' key="imageup">
            <motion.img 
                src="/art2.webp" 
                alt="art" 
                className='object-cover' 
                variants={imageUp} 
                initial="hidden"
                animate="show"
            />
        </motion.div>
    </motion.div>
  )
}

export default Loader