import React, {useState}  from "react";
import { motion } from "framer-motion";

const  OpenWindowShMani = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Shellac Manicure</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
    Luxury CND, Shellac manicure with file or cut, cuticle work, IBX repairing and strengthening nail treatment,
     long-lasting gel polish such as CND shellac, cuticle oil and hand massage.
     (gel removal included if was previously done by me).
      <br/>
        <span className="price">From £ 36</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default OpenWindowShMani;