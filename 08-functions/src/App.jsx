import React from 'react'

const App = () => {
 function inputChange(val){
   console.log(val);
 }
 const pageScrolling = () => {
  console.log('page Scrolling ho rhi  hai...')
 }
  return (
    // <div className='box'  onMouseMove={() => {
    //   console.log('nachoo');
    // }}>


    //  {/* <input
    //   onChange={function(elem){
    //    inputChange(elem.target.value);
    //  }} 
   
    //  type="text" placeholder='enter name' /> */}
   

    // </div>
  <div onWheel={pageScrolling}>
    <div className="page1"></div>
    <div className="page2"></div>
    <div className="page3"></div>
  </div>

  )
}

export default App
