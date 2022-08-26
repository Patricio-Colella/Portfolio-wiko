import React,{ useState } from 'react';
import char from "./character.png"
import char2 from "./character2.png"
import mario from "./mario.png"
import mario2 from "./mario2.png"


const Character=()=>{
    const [style,setStyle] =  useState({height:"100px",width:"100px", position:"absolute",right:"50%",top:"50%"})
    const [movement,setMovement] =  useState(true)
    const [character,setChar] = useState({name:"mario",fst:mario,scd:mario2})
  
    function move(e,num){
      const pos=parseInt(style[e].slice(0,style[e].length-1))
      setStyle({...style,[e]:pos+num+"%"})
      pos%10===0&&setMovement(!movement)
    }
  
    document.onkeydown=function con(e){
      const keys={
        ArrowLeft:["right",1],
        ArrowUp:["top",-1],
        ArrowRight:["right",-1],
        ArrowDown:["top",1]
      }
      if(keys[e.key]){
        const dir=keys[e.key]
        const pos=parseInt(style[dir[0]].slice(0,style[dir[0]].length-1))
    console.log(pos)
        pos+dir[1]> 0&&pos+dir[1]<95&&move(dir[0],dir[1])

      }
    }
  
    return (
      <div className="App">    
        <img src={movement?character.fst:character.scd} style={style} alt="char"/>
      <button onClick={()=>{
        setChar(character.name==="mario"?{name:"zelda",fst:char,scd:char2}
                                        :{name:"mario",fst:mario,scd:mario2}
        )
      }}>
      </button>
      <span style={{fontSize:"100px" ,position:"absolute",right:"50%",top:"10%"}}>wip</span>
  
        
      </div>
    );

}

export default Character