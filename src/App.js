 import Header from './HeaderComponent/Header';
import './App.css';

import Article from './Article/Article';
import SideMenu from './PostComponent/SideMenu';
import Post from './PostComponent/Post';


function App() {
  return (
  
    <div className="App">
      <Header />
     
      <div style={{ display:'flex',justifyContent:"center"}}>
        
     {/*Posts and Side Menu Container */}
     <div style={{ display:"flex"}}>  

             {/*POSTS CONTAINER    */}
      <div style={{width:"70%"}}>
          <Post postName = "PinguCoder "  postBody=" welcome here , join us to learn more about react  "  />
          <Post postName = "PinguCoder "  postBody=" welcome here , join us to learn more about Angular "  />
          <Post postName = "PinguCoder "  postBody=" welcome here , join us to learn more about JavaScript " />
          <Post postName = "PinguCoder "  postBody=" welcome here , join us to learn more about express JS  " />
          <Post />


       </div>
       
      
       {/*      POSTS CONTAINER ==    */}


  {/* Side Menu Container ----- */}
  <div style={{width:"30%",marginTop:"25px" }}>
    <SideMenu />
  </div>


  </div>
       
      
  </div> 
    

    </div>
  
  )
}
  
  export default  App;
























        {/*

------------------Sending Props  code 



      <Article content={firstArtical} name="Kamel" email="Kamel@gmail.com" age="23 " >
      <div  style={{background:"teal"}}>
        <h2> PinguCoder -2023</h2>
        <p  style={{background:"orange"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Assumenda, maxime secpndArticale
    
  

        </p>
      </div>
      </Article>
      <Article content={firstArtical}name="Kamel" email="Kamel@gmail.com" age="23 " info="Lorem ipsum dolor sit amet consectetur adip Assumenda, 3"/>
      <Article name="Kamel" email="Kamel@gmail.com" age="23 " info="Lorem ipsum dolor sit amet consectetur adip Assumenda, 4"/>
      */ 
       /* const firstArtical = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Assumenda, maxime firstArtical 
  `;
  const secpndArticale =`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Assumenda, maxime secpndArticale` ; 
*/}

      
     

 