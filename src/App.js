import React from 'react'
import './App.css';
import {connect} from 'react-redux';
import { incAction } from './Actions';
import { DecAction } from './Actions';

function App({local_variable,incAction,DecAction}) {
  return (
    
        <div>
          <center>
          <h1>{local_variable}<br/>
          <button onClick={()=>incAction(5)}>INCREMENT</button>
          <button onClick={()=>DecAction(5)}>DECREMENT</button>
          </h1>
          </center>
          </div>
      
  )
}
const mapStateToProps=state=>({
  local_variable:state
})

export default connect(mapStateToProps ,{incAction,DecAction})(App);
