import React,{useState} from 'react';
import "./design.css"
export default function Form() {

    const[nam,SetNam]=useState('');
    const[ema,SetEma]=useState('');
    const[phn,SetPhn]=useState('');

    const NamChg=(event)=>{
        SetNam(event.target.value);
    }

    const EmaChg=(event)=>{
        SetEma(event.target.value);
    }

    const PhnChg=(event)=>{
        SetPhn(event.target.value);
    }

  return (
    <div className='Main'>
    <form>
        <label htmlFor="Name" >Name</label><br />
        <input  className="input-div" id="Name"  value={nam} onChange={NamChg}/>
<br />
        <label htmlFor="Email" >Email</label><br />
        <input  className="input-div" id="Email" value={ema} onChange={EmaChg}/>
<br />
        <label htmlFor="Phone" >Phone</label><br />
        <input  className="input-div" id="Phone" value={phn} onChange={PhnChg}/>
    </form>
    <p>The Name Entered Is {nam}</p>
    <p>The Email Is {ema}</p>
    <p>The Phone Number Is {phn}</p>
    </div>
  )
}
