import '../../css/transition.css';
import {motion} from 'framer-motion'



// function TransitionPage({location,Page}) {
//   return (
//   <>
//     {Page}
//     <motion.div className="slide-in"
//     initial={{scaleY:0}}
//     animate={{scaleY:1}}
//     exit={{scaleY:0}}
//     transition={{duration:1,easeOut:[0.22,1,0.36,1]}}>
    
    
   
    
  
//  </motion.div>
  
//    {/* <motion.div className="slide-out"
//    initial={{scaleY:1}}
//    animate={{scaleY:0}}
//    exit={{scaleY:1}}
//    transition={{duration:1,easeIn:[0.22,1,0.36,1]}}>
   
   

 
// </motion.div> */}
// </>
//   );
// }

function TransitionPage({ children }) {
  return (
    <motion.div
      className="transition-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default TransitionPage;
