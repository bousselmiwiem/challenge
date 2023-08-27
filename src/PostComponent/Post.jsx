import TagButtonComponent from "../TagButtonComponent";


function Post({postName = "No Title " ,postBody="No Data here "}) {
  return (
    <div style={{padding:"10px",border:"solid #1d9bf0 5px",width:"300px",margin:"25px"}}> 
        <h2>
             {postName}
        </h2><hr />
        <p>{postBody} </p>
         <TagButtonComponent />
    </div>
  );
}

export default Post