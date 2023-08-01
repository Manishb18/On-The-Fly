import React from 'react'

const TextDisp = ({text, handleDelete}) => {
  return (
    <div className='text-disp-hero-container'>
      <div className="text-title">
      <h3>{text.title}</h3>
      </div>
      <div className="text-desc">
        <p>This is about : </p>
        <p>{text.text}</p>
      </div>
      <div className="text-btn-del">
        <button onClick={()=>{
            handleDelete(text.id)
        }}>Delete Text</button>
      </div>
      {text==null&&
      <p>There are no texts to display! Please add some</p>
      }
    </div>
  )
}
export default TextDisp
