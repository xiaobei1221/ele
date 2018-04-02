import React from 'react';
import ReactDOM from 'react-dom';

// import search from '../static/01.png'

class Lb_classify extends React.Component{ 
    render(){
        return(
          <div className='lb_box' style={{padding:"0 5px"}}>
            <div className='lb_banner' style={{width:"100%", height:"130px", background:"red"}}>      
              <img src="http://localhost:8080/static/banner01.png" style={{width:"100%",height:"130px"}} />
            </div>
            <div className='lb_two' style={{display:"flex",justifyContent:"space-between",marginTop:"8px",backgournd:"white"}}>
                <div className='lb_left' style={{width:"45%",height:"210px",background:"#f9f9f9",padding:"0 8px"}}>
                     <h3>限量抢购</h3>
                    <p>超值美味9.9元起</p>
                    <p>1065人正在抢&gt;</p>
                    <img src="http://localhost:8080/static/01.png" style={{height:"70px",float:"right"}}/>
                 </div>
                 <div className='lb_right' style={{width:"45%",background:"#f9f9f9",height:"210px",padding:"0 8px"}}>
                     <h3>品质套餐</h3>
                    <p>搭配齐全吃的好</p>
                    <p>立即抢购&gt;</p>
                    <img src="http://localhost:8080/static/02.png" style={{height:"70px",float:"right"}}/>
                    
                 </div>
            </div>

            <div className='lb_three' style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}}>
                <div className='lb_left' style={{width:"32%",height:"180px",background:"#fafafa",float:"left"}}>
                    <h3>人气下午茶</h3>
                    <p>周末5折吃</p>
                    <img src="http://localhost:8080/static/02.png" style={{height:"70px"}}/>
                   
                    
                 </div>
                 <div className='lb_midd' style={{width:"32%",height:"180px",background:"#fafafa",float:"left"}}>
                 <h3>周末福利社</h3>
                    <p>满50减25起</p>
                    <img src="http://localhost:8080/static/02.png" style={{height:"70px"}}/>
                    
                 </div>
                 <div className='lb_right' style={{width:"32%",height:"180px",background:"#fafafa",float:"left"}}>
                 <h3>大牌西餐厅</h3>
                    <p>人气必点</p>
                    <img src="http://localhost:8080/static/02.png" style={{height:"70px"}}/>
                    
                 </div>
            </div>
            <div>
              <img src="http://localhost:8080/static/banner01.png" style={{width:"100%",height:"130px",marginTop:"10px"}} />
            </div>

          </div>   
        )
    }
}



export default Lb_classify;


