import React, {useState}  from "react";
import { motion } from "framer-motion";

const  OpenWindowVata = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Vata Facial for dry skin</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
      24 hour non-stop moisturization. Skin protection against extreme climatic conditions.
       Tests have shown that 30 minutes after application skin hydration and softness increase by 46%. 
       Immediate reduction of that unpleasant “tight skin” feeling. 
      Tired and taut skin becomes fresh and relaxed. Plumping effect, small wrinkles are visibly reduced.
      <br/>
        <span className="price">From £ 45</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default OpenWindowVata;