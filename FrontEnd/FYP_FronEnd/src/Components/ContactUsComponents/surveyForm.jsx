import React,{useState} from "react";
import { Box,Grid ,Paper} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";
import swal from 'sweetalert';
import backgroundImage from '../Images/bg13.jpg'
import emailjs from 'emailjs-com';
const SurveyForm=()=>
{
   
  
    const [q1,setQ1]=useState("")
    const [q2,setQ2]=useState("")
    const [q3,setQ3]=useState("")
    const [q4,setQ4]=useState("")
    const [q5,setQ5]=useState("")
    const [q6,setQ6]=useState("")
    const [q7,setQ7]=useState("")
    const [q8,setQ8]=useState("")
    const history=useHistory()
    const cus_id=5
    const Q1_Fun=(e)=>
    {
        let q1_value=e.target.value
        setQ1(q1_value)
    }
    const Q2_Fun=(e)=>
    {
        let q2_value=e.target.value
        setQ2(q2_value)
    }
    const Q3_Fun=(e)=>
    {
        let q3_value=e.target.value
        setQ3(q3_value)
    }
    const Q4_Fun=(e)=>
    {
        let q4_value=e.target.value
        setQ4(q4_value)
    }
    const Q5_Fun=(e)=>
    {
        let q5_value=e.target.value
        setQ5(q5_value)
    }
    const Q6_Fun=(e)=>
    {
        let q6_value=e.target.value
        setQ6(q6_value)
    }
    const Q7_Fun=(e)=>
    {
        let q7_value=e.target.value
        setQ7(q7_value)
    }
    const Q8_Fun=(e)=>
    {
        let q8_value=e.target.value
        setQ8(q8_value)
    }
  
   
    const SurveyFormIntoDB=async(e)=>
    {
        let Dont_RefreshPage=e.preventDefault()
       
        let formField=new FormData()
        formField.append('Ans_of_Q1',q1)
        formField.append('Ans_of_Q2',q2)
        formField.append('Ans_of_Q3',q3)
        formField.append('Ans_of_Q4',q4)
        formField.append('Ans_of_Q5',q5)
        formField.append('Ans_of_Q6',q6)
        formField.append('Ans_of_Q7',q7)
        formField.append('Ans_of_Q8',q8)
        formField.append('customer',cus_id)
        console.log("a="+q1)
        await axios({
            method:'post',
            url:'http://127.0.0.1:8000/api/survey/',
           
            data: formField,
            headers: {"content-type": "application/json"}
          }).then((res)=>
          {
            swal({
              title: "Thank You!",
              text: "Thanks dear customer for feedback",
              icon: "success",
              button: "OK",
            });
          })
    }
   
    return (<>
    <Box style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat',paddingTop:'4%',paddingBottom:'4%'}}>
    <Grid direction="row" container>
             <Grid item md={3}>
            </Grid>
             <Grid item md={6}>
                 <Paper elevation={24}>
                 <Grid direction="row" container> 
                   <Grid item md={12}> 
                   <Box direction="row" container style={{padding:'5%'}} >
                   <center><h2 style={{fontWeight:'bold'}}>Feedback Survey Form</h2></center>      
                         <form className="row g-3" onSubmit={SurveyFormIntoDB}>
                        {/* Q1 */}
                             <fieldset class="row mb-3" id="f1">
                                <label for="inputEmail4" className="form-label">1) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="opt1" onClick={Q1_Fun}></input>
                                    <label class="form-check-label" for="gridRadios1">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" onClick={Q1_Fun}></input>
                                    <label class="form-check-label" for="gridRadios2">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" onClick={Q1_Fun}></input>
                                     <label class="form-check-label" for="gridRadios3">
                                    Third disabled radio
                                    </label>
                                </div>
                               
                                </div>
                            </fieldset>
                            {/* Q2 */}
                            <fieldset class="row mb-3" id="f2">
                                <label for="inputEmail4" className="form-label">2) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios2" id="gridRadios11" value="on1" onClick={Q2_Fun}></input>
                                    <label class="form-check-label" for="gridRadios11">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios2" id="gridRadios22" value="option2" onClick={Q2_Fun}></input>
                                    <label class="form-check-label" for="gridRadios22">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios2" id="gridRadios33" value="option3" onClick={Q2_Fun}></input>
                                    <label class="form-check-label" for="gridRadios33">
                                    Third disabled radio
                                    </label>
                                </div>
                                
                                </div>
                            </fieldset>
                            {/* Q3 */}
                            <fieldset class="row mb-3">
                                <label for="inputEmail4" className="form-label">3) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios3" id="gridRadios111" value="option1" onClick={Q3_Fun}></input>
                                    <label class="form-check-label" for="gridRadios111">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios3" id="gridRadios222" value="option2" onClick={Q3_Fun}></input>
                                    <label class="form-check-label" for="gridRadios222">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios3" id="gridRadios333" value="option3" onClick={Q3_Fun}></input>
                                    <label class="form-check-label" for="gridRadios333">
                                    Third disabled radio
                                    </label>
                                </div>
                               
                                </div>
                            </fieldset>
                            {/* Q4 */}
                            <fieldset class="row mb-3">
                                <label for="inputEmail4" className="form-label">4) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios4" id="gridRadios1111" value="option1" onClick={Q4_Fun}></input>
                                    <label class="form-check-label" for="gridRadios1111">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios4" id="gridRadios2222" value="option2" onClick={Q4_Fun}></input>
                                    <label class="form-check-label" for="gridRadios2222">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios4" id="gridRadios3333" value="option3" onClick={Q4_Fun}></input>
                                    <label class="form-check-label" for="gridRadios3333">
                                    Third disabled radio
                                    </label>
                                </div>
                               
                                </div>
                            </fieldset>
                            {/* Q5 */}
                            <fieldset class="row mb-3">
                                <label for="fname" className="form-label">5) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios5" id="gridRadios11111" value="option1" onClick={Q5_Fun}></input>
                                    <label class="form-check-label" for="gridRadios11111">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios5" id="gridRadios22222" value="option2" onClick={Q5_Fun}></input>
                                    <label class="form-check-label" for="gridRadios22222">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios5" id="gridRadios33333" value="option3" onClick={Q5_Fun}></input>
                                    <label class="form-check-label" for="gridRadios33333">
                                    Third disabled radio
                                    </label>
                                </div>
                              
                                </div>
                            </fieldset>
                            {/* Q6 */}
                            <fieldset class="row mb-3">
                                <label for="name" className="form-label">6) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios6" id="gridRadios6" value="option1" onClick={Q6_Fun}></input>
                                    <label class="form-check-label" for="gridRadios6">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios6" id="gridRadios66" value="option2" onClick={Q6_Fun}></input>
                                    <label class="form-check-label" for="gridRadios66">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios6" id="gridRadios666" value="option3" onClick={Q6_Fun}></input>
                                    <label class="form-check-label" for="gridRadios666">
                                    Third disabled radio
                                    </label>
                                </div>
                              
                                </div>
                            </fieldset>
                            {/* Q7 */}
                            <fieldset class="row mb-3">
                                <label for="inputEmail4" className="form-label">7) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios7" id="gridRadios7" value="option1" onClick={Q7_Fun}></input>
                                    <label class="form-check-label" for="gridRadios7">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios7" id="gridRadios77" value="option2" onClick={Q7_Fun}></input>
                                    <label class="form-check-label" for="gridRadios77">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios7" id="gridRadios777" value="option3" onClick={Q7_Fun}></input>
                                    <label class="form-check-label" for="gridRadios777">
                                    Third disabled radio
                                    </label>
                                </div>
                               
                                </div>
                            </fieldset>
                            {/* Q8 */}
                            <fieldset class="row mb-3">
                                <label for="inputEmail4" className="form-label">8) First Name</label>
                                <div class="col-sm-10 ms-4" style={{fontSize:'14px'}}>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios8" id="gridRadios8" value="option1" onClick={Q8_Fun}></input>
                                    <label class="form-check-label" for="gridRadios8">
                                    First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios8" id="gridRadios88" value="option2" onClick={Q8_Fun}></input>
                                    <label class="form-check-label" for="gridRadios88">
                                    Second radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios8" id="gridRadios888" value="option3" onClick={Q8_Fun}></input>
                                    <label class="form-check-label" for="gridRadios888">
                                    Third disabled radio
                                    </label>
                                </div>
                            
                                </div>
                            </fieldset>
                            {/* Q9 */}
                       
                         
                            <center>  <div className="col-8">
                                <button type="submit" className="btn btn-primary" style={{width:'100%',background:'#186494',color:'white',border:'1px solid silver'}}>Submit Now</button>
                              </div></center>
                          
                </form>
                                                    
                     
                    </Box>
                   </Grid> 
                 </Grid> 
                 </Paper>  
             </Grid>
             <Grid item md={3}> </Grid>
         </Grid>
    </Box>
        
                    
              
         
       
    </>)
}
export default SurveyForm