import React from 'react';
import './TextSlice.css';
import { motion } from "framer-motion";


const textSlice = props => {
   
 return (
  <div  className="top-right">
<motion.div
  
   transition={{ duration: 10 }}  
  initial={{ scale: 0 }}
 animate={{ scale: 1, rotate: 10}}
      
>
<h1 id="top-right-h1">MOBILE WELLNESS</h1>
</motion.div>
   

    

 </div>
    );
  };


  export default textSlice;