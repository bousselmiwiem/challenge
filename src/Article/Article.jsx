import React from 'react'

function Article(props) {
  /*  console.log(props);
  const children = props.children; */ 



  return (
<> 

    {/*   <div style={{background:"#222",boxShadow:"0px 10px 10px gray",color:"white",margin:"10px"}}>
       
{children}
    </div> */ }
  <div style={{
    background:"#222",
    boxShadow:"0px 10 px 10 px gray ",
    color:"white",
    margin:"10 px "
  }}>
    
    <h1> Wiem Bousselmi </h1>
    <h3>Bousselmiwiem5@gmail.com</h3>
    <hr/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet amet iusto ex quae numquam modi repellat debitis nobis hic quidem tempore velit similique voluptatem quasi ut, 
             nostrum deleniti! Quas, quia.</p>
  </div>
 

</>
  )
}

export default Article