import React from 'react'
  
const Progressbar = (props) => {
     
    const Parentdiv = {
        height: '1.8vh',
        width: '90%',
        backgroundColor: '#1194A9',
        boxShadow: '2px 2px #1194A9',
        borderRadius: 40,
        marginTop:20,
        margin: 10
      }
      
      const Childdiv = {
        height: '100%',
        width: `${props.progress}%`,
        backgroundColor: 'whitesmoke',
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: '#1194A9',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${props.progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progressbar;