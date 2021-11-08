let addToy = false;


// console.log("👀")  //


let theStateOfOurFetchData = []
console.log("This is theStateOfOurFetchData: ", theStateOfOurFetchData) //

let theStateOfOurFetchDataAt1 = []
console.log("This is theStateOfOurFetchData: ", theStateOfOurFetchData) //










  // //  Fetching to:  "http://localhost:3000/toys/1"
  // fetch("http://localhost:3000/toys/1")
  // .then( response => response.json() )
  // .then( (fetchDataAt1)=>{ 

  //   //X// WE WILL LOSE THE DATA FAM - DON'T DO IT :(
  //   // let dataThatIWillUnfortuanetlyLose = fetchData
  //   // console.log("This is dataThatIWillUnfortuanetlyLose: ", dataThatIWillUnfortuanetlyLose) //

  
  //   console.log("This is What We Got Back ->", fetchDataAt1) //

  //   theStateOfOurFetchDataAt1 = fetchDataAt1

    
  //   }
  // );
  // console.log("This is theStateOfOurFetchData: ", theStateOfOurFetchDataAt1) //




  // // fetch()
  // const f = fetch("http://localhost:3000/toys")
  //   console.log("f's value: ", f) //

  // // fetch().then()
  // const ff = fetch("http://localhost:3000/toys").then( response => response.json() )
  //   console.log("ff's value: ", ff) //

  // // fetch().then().then()
  // const fff = fetch("http://localhost:3000/toys").then( response => response.json() ).then( data => console.log(data) );
  //   console.log("fff's value: ", fff) //



  // .then(  (response)=>{ response.json() }  )
  // .then(  
    
  //     (response)=>{ 
        
  //       response.json() 
  //       // Turning the Response Into JSON Format
  //       //// J S O N 
  //       //// Java Script Object Notation 
      
  //     }  
    
  //   )

  // fetch('http://example.com/movies.json')
  // .then(r => r.json())
  // .then(data => console.log(data));



document.addEventListener("DOMContentLoaded", ()=>{




  const addBtn = document.querySelector("#new-toy-btn");

  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }

  });







  const toyCollectionDiv = document.querySelector("#toy-collection")
    console.log("This is: ", toyCollectionDiv) //



    
    //// THIS WORKS! YAY! 🙋🏾‍♂️
    ////// It allows me to append to the Toy Collection <Div>

    // const toyCollectionDiv = document.querySelector("#toy-collection")
    // console.log("This is: ", toyCollectionDiv) //

    // const tempH1 = document.createElement("h1")
    //   tempH1.textContent = "Yay!"
    
    //   toyCollectionDiv.append(tempH1)

    ////



  //  Fetching to:  "http://localhost:3000/toys"
  //// Will Return an Array of Objects:: [ {},{},{} ]
  fetch("http://localhost:3000/toys")
  .then( response => response.json() )
  .then( (fetchData)=>{ 

    //X// WE WILL LOSE THE DATA FAM - DON'T DO IT :(
    // let dataThatIWillUnfortuanetlyLose = fetchData
    // console.log("This is dataThatIWillUnfortuanetlyLose: ", dataThatIWillUnfortuanetlyLose) //

  
    console.log("This is What We Got Back ->", fetchData) //

    theStateOfOurFetchData = fetchData



      
    let oneToy = theStateOfOurFetchData[0]
    console.log("oneToy ->", oneToy) //
    // oneToy = theStateOfOurFetchData[1]
    // console.log("oneToy ->", oneToy) //


      const oneToyOnTheDOM = document.createElement("h1")
      oneToyOnTheDOM.textContent = oneToy.name
  
    toyCollectionDiv.append(oneToyOnTheDOM)


      // addEventListener()
      // addEventListener("EVENT TYPE", aCallBack)
      //// addEventListener("EVENT TYPE", ()=>{ ... }  )

        function clickity(){

          console.log("clickity-click!")

        }
      oneToyOnTheDOM.addEventListener("click", ()=>{ console.log("clickity-click!")} )
      // oneToyOnTheDOM.addEventListener("click", clickity )








    
    }
  );
  console.log("This is theStateOfOurFetchData: ", theStateOfOurFetchData) //
  // console.log("This is dataThatIWillUnfortuanetlyLose: ", dataThatIWillUnfortuanetlyLose) //

      



  //X// GET THE FIRST DIV ON THE PAGE
  // const toyCollectionDiv = document.querySelector("div")





});
