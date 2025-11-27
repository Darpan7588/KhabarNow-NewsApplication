import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
      <div className='text-center '>                   
        {/* want to hide the spinner after loading is done */}
        <img src={loading} alt="loading" />
      </div>
    )
}
export default Spinner;