
import axios from "axios";



 (async()=>{ 
   const {data:user1} = 
   await axios("https://jsonplaceholder.typicode.com/users/1");
   const {data:post1}=  
      await axios("https://jsonplaceholder.typicode.com/posts/1");
   
          
  console.log(user1);
  console.log("Posts",post1);

})();

