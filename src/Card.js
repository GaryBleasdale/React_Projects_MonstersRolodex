import React, {useEffect, useState} from "react";

export default function Card(props){
  const [data, setData] = useState([])
  const [load,setLoad] = useState(true)
  let input = props.input

  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(actualData => {
     setData(actualData)
  })
  .finally(()=>{
    setLoad(false)
  })
  },[] )

  let finalCardArr = data.map((e,i) => (
        
    <div 
    className='Card' 
    style={{
      margin: '20px',
      backgroundColor:'rgba(255,255,255,0.2)',
      borderRadius:'15px',
      padding: '20px'
    }}
    key = {i}
    >
      <img src={`https://robohash.org/${i}?set=set2`} alt='monsterImage'/>
      <h3>{e.name}</h3>
      <h4>{e.email}</h4>
    </div>
  ))


 
  return(
    <div className='card-container' style={{
      display:'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'space-around'
    }}>
    {load &&
    <div className='loading'>
      <h3>Loading...</h3>
    </div>
    }

    
      {!load &&
      finalCardArr.filter((e)=>{   
        let name = e.props.children[1].props.children.toLowerCase()
        console.log(typeof name)
        return name.includes(input)
      })
    }
    
    </div>
  ) 
    
}