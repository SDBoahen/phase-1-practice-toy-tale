let addToy = false;


// console.log("👀")  //


let theStateOfOurFetchData = []
// console.log("This is theStateOfOurFetchData: ", theStateOfOurFetchData) //

let theStateOfOurFetchDataAt1 = []
// console.log("This is theStateOfOurFetchData: ", theStateOfOurFetchData) //










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



      
    let oneToy = theStateOfOurFetchData[4]
    console.log("oneToy ->", oneToy) //
    // oneToy = theStateOfOurFetchData[1]
    // console.log("oneToy ->", oneToy) //


      // - One Toy - Using Create Element

      // const oneToyOnTheDOM = document.createElement("div")
      //   oneToyOnTheDOM.classList.add("card")

      // const h2ForOneToyOnTheDom = document.createElement("h2")
      //   h2ForOneToyOnTheDom.textContent = oneToy.name

      //   // oneToyOnTheDOM.append(h2ForOneToyOnTheDom)
      //   // <div class="card"> <h2> oneToy.name </h2> </div>

      // const imgForOneToyOnTheDom = document.createElement("img")
      //   imgForOneToyOnTheDom.classList.add("toy-avatar")
      //   imgForOneToyOnTheDom.src = oneToy.image

      //   // oneToyOnTheDOM.append(imgForOneToyOnTheDom)
      //   // <div> 
      //     //<h2> oneToy.name </h2> 
      //     // <img src="[toy_image_url]" class="toy-avatar" />
      //   //</div>


      // const pTagForOneToyOnTheDom = document.createElement("p")
      //   pTagForOneToyOnTheDom.textContent = `${oneToy.likes} Likes`

      //   // oneToyOnTheDOM.append(pTagForOneToyOnTheDom)

      // const likeButtonForOneToyOnTheDom = document.createElement("button")
      //   likeButtonForOneToyOnTheDom.textContent = "Like <3"
      //   likeButtonForOneToyOnTheDom.classList.add("like-btn")
      //   likeButtonForOneToyOnTheDom.id = oneToy.id 

      //   // oneToyOnTheDOM.append(likeButtonForOneToyOnTheDom)

      // oneToyOnTheDOM.append(
      //   h2ForOneToyOnTheDom, 
      //   imgForOneToyOnTheDom, 
      //   pTagForOneToyOnTheDom,
      //   likeButtonForOneToyOnTheDom
      // )
      // console.log("This is oneToyOnTheDOM-> ", oneToyOnTheDOM) //




      // - One Toy - Using Create InnerHTML

      const oneToyOnTheDOM = document.createElement("div")
      oneToyOnTheDOM.classList.add("card")

      oneToyOnTheDOM.innerHTML = `

          <h2>${oneToy.name}</h2>
          <img src="${oneToy.image}" class="toy-avatar" />
          <p>${oneToy.likes} Likes </p>
          <button class="like-btn" id="${oneToy.id}">Like <3</button>

      `

      console.log("This is oneToyOnTheDOM-> ", oneToyOnTheDOM) //

      
      toyCollectionDiv.append(oneToyOnTheDOM)

      const likeButtonForOneToyOnTheDom = oneToyOnTheDOM.querySelector(".like-btn")
        console.log("Did We Get It? ->", likeButtonForOneToyOnTheDom)
      
      const pTagForOneToyOnTheDom = oneToyOnTheDOM.querySelector("p")
        console.log("Did We Get It? ->", pTagForOneToyOnTheDom)
      
      
      //// Save State - The Last Time Everything Worked 
      // const oneToyOnTheDOM = document.createElement("h1")
      // oneToyOnTheDOM.textContent = oneToy.name
      ////
  


      // addEventListener()
      // addEventListener("EVENT TYPE", aCallBack)
      //// addEventListener("EVENT TYPE", ()=>{ ... }  )

        function clickity(){

          console.log("clickity-click!")

        }
        likeButtonForOneToyOnTheDom.addEventListener("click", 
          ()=>{ 
            
            console.log("clickity-click! We Want to Increment This: ", oneToy.likes)

            let likesForOneToyOnTheDOM = ++oneToy.likes
            pTagForOneToyOnTheDom.innerText = `${likesForOneToyOnTheDOM} Likes`


      
      
          } 
        )
      // oneToyOnTheDOM.addEventListener("click", clickity )








    
    }
  );
  console.log("This is theStateOfOurFetchData: ", theStateOfOurFetchData) //
  // console.log("This is dataThatIWillUnfortuanetlyLose: ", dataThatIWillUnfortuanetlyLose) //

      



  //X// GET THE FIRST DIV ON THE PAGE
  // const toyCollectionDiv = document.querySelector("div")














  console.log("======== OUR SECOND FETCH ========")


  // fetch( GO FETCH ).then( CHANGE DATA TO JSON ).then( NOW WE CAN ATCUALLY USE IT )
    // fetch( GO FETCH )
    //.then( CHANGE DATA TO JSON )
    //.then( NOW WE CAN ATCUALLY USE IT )
  fetch("http://localhost:3000/toys")
  .then( 
    
    (response)=>{ 

      return response.json() 
  
    }
    //.then(response => response.json())

  )
  .then(

    
    // This is an Anonymous Function
    // function 
    (fetchedToyArray)=>{ // STARTING CURLY  ->  {
      
      console.log("======== OUR SECOND FETCH ========", fetchedToyArray)

      const cardAlreadyOnTheDOM = document.querySelector(".card")
        // console.log("Hey, Did I Get That? 👀 ->",cardAlreadyOnTheDOM ) //

        const h2ForCardAlreadyOnTheDOM = cardAlreadyOnTheDOM.querySelector("h2")
          // console.log("Hey, Did I Get That? 👀 ->", h2ForCardAlreadyOnTheDOM )  //

          // console.log(  "What is This? 🧐 :", fetchedToyArray[0].name  ) //
          // variableWorkingWith = fetchedToyArray     ->  [  {},{},{} ]
          // variableWorkingWith = fetchedToyArray[0]  ->  {}

          h2ForCardAlreadyOnTheDOM.textContent = fetchedToyArray[0].name

          //// This Worked 🙌
          // h2ForCardAlreadyOnTheDOM.textContent = "Woobly"
          ////

  
          
    } // CLOSING CURLY  }   <- 


  ) 
  // .then()
  // .then(  ()=>{}  )
  // .then(  (data)=>{ console.log(data) }  )
  // .then(data => console.log("======== OUR SECOND FETCH ========", data)) 
  // THE FINAL COUNTDOWN


  // fetch(URL)
  //.then(r => r.json())
  //.then(data => console.log(data))



  // Interacting with the FORM

  const addToyFormOnTheDOM = document.querySelector(".add-toy-form")
    console.log("Hey, Did I Get That? 👀 ->", addToyFormOnTheDOM )  //

    addToyFormOnTheDOM.addEventListener("submit", 
    
      (event)=>{ 

        event.preventDefault()
        
        console.log("click!")  

        event.target.reset()
    
      }
    
    )
    // .addEventListener()
    // .addEventListener( ()=>{} )
    // .addEventListener( (e)=>{ console.log(e) } )












});
