import React from 'react';
import DetailPage from './DetailPage'
import MayInterested from './MayInterested'
import '../../App.css';

const ProductDetailIntegration=()=>
{
    return (<>
     <div style={{paddingTop:'1.5%',paddingBottom:'1.5%',paddingLeft:'2%',paddingRight:'2%'}}>
     <DetailPage />
  
   
     <MayInterested name="You may also like" />
    </div>
   
    </>)
}
export default ProductDetailIntegration