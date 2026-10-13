import './pro.css'
function Prof ({res}){
    console.log(typeof(res))
    console.log(res)

 return(
    <div className="p">
        
        <h3>hello come to profile section</h3>
        <p>{res.Name}</p>
        {

        }
    </div>
 )
}
export default Prof;
