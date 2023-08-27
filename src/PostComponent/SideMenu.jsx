
import TagButtonComponent from "../TagButtonComponent"
function SideMenu() {
  return (
    <div style={{margin:"25px ",border:"solid #1d9bf0 5px"}}>
      <TagButtonComponent title="Progamming ">
        <div>
         <span>⚜⚜⚜</span>
        </div>
      </TagButtonComponent>  
      <TagButtonComponent  title="web application  "> 
      <div>
        <span>🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈</span>
      </div>
      </TagButtonComponent>
      <TagButtonComponent  title="Web Site" >
        <div>
          <span>🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀🎀</span>
        </div>

      </TagButtonComponent> 
      <TagButtonComponent title="new test " > 
      <div>
        <img src="/public/logo512.png" />
      </div>
      </TagButtonComponent>
      <TagButtonComponent /> 
    </div>
  );
}

export default SideMenu