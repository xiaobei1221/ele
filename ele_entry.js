import React from 'react';

import ReactDOM from 'react-dom';


import Lb_classify from './components/lb_classify.js'

class Ele_app extends React.Component{
    render(){
        return(
            <div>
               
                <Lb_classify/>
            </div>
        )
    }
}

ReactDOM.render(<Ele_app/>,document.getElementById('ele_out'))