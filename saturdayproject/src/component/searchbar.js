import  {useState}  from  "react";



import {useEffect} from  'react'
import axios from 'axios'
export default function SearchBar(){
  const [data,setData]=useState([]);
  const [records,setRecords]=useState([])
  //const [offset,setOffset]=useState([0])
 

   const fetchData=async()=>{
     const request=await axios.get("https://flipkart2-zdyu.onrender.com/scrape")
     const response=await request.data
    setData(response.allProductNames);
     //setData(prev=>[...prev,...data])
     setRecords(response.allProductNames);
     
    //fetch("https://studentscors.onrender.com/mentors/all")
    //.then((response)=>response.json())
    //.then((json)=>console.log(json))
    console.log("data" ,response.allProductNames)
  
   }
   useEffect(()=>{
   fetchData();
  },[]);
 
//useEffect(()=>{
  //const handleScroll=(e)=>{
    //const scrollHeight=e.target.documentElement.scrollHeight
    //const currentHeight=e.target.documentElement.scrollTop+window.innerHeight
    //if(currentHeight +1 >= scrollHeight){
      //setOffset(offset+5)
   // }
  //}
  //window.addEventListener("scroll",handleScroll)
  //return()=>window.removeEventListener("scroll",handleScroll)

//},[offset])
  // Change page
 
const Filter=(event)=>{
setRecords(data.filter(f=>f.title.toLowerCase().includes(event.target.value)))
}

    return(
    <div>
        
        <h1>E-commerce</h1>
         <div className="search-bar-input"> 
         <i className="fa-solid fa-cart-shopping"></i>
         <input type="text" onChange={Filter}></input>
        
       
         </div>
        
         <div className="card-container">
         {/* <div className="col-lg-4" style={{display:"flex", gap:"10px", width:"100vw"}}> */}
         
         {
          records?.map((e)=>{
            return(
            <div className="a" key={e._id} style={{flexBasis:"20%"}}>
              
            
              <p className="card-title">{e.title}</p>
              
              <div className="card-image">
                <img src={e.image}  ></img></div>
                <p style={{paddingLeft:"20px",color:"blue"}}>Price:{e.price}</p>
              <p className="card-footer">Ratings&Reviews:{e.ratingandreviews}</p>
              
           </div>   
            )
          })
         }
           
           
           </div>
           
        </div>
        
     
    
     

      

   
)};
// <div className="col-lg-4">