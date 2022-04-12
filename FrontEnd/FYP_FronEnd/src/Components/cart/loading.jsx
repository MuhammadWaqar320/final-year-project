
import {useEffect,useState} from 'react';

import { useHistory } from 'react-router-dom';
import * as animationData from '../Lottie Files/8774-loading.json'
//components
import Lottie from 'react-lottie';


const Loading=()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
   return (
   
      <div style={{padding:'13%'}}>
          <Lottie options={defaultOptions}
         style={{height:'260px',width:'260px'}}

        />
      </div>
    
    )
}
export default Loading;