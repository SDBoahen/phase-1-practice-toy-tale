
// concepts + syntax = NO-ERRORS 
// CASE: Environment (Installs + Configurations + ETC)


// function someAsyncFunction(){
  
//   return aPromise
//   // someVariable = return "someString"
//   // return "someString"

// }
// refference == refferingTo == calling them by their name
// console.log( someFunction )  //
// console.log( someFunction() )  //


// someVariable = return "someString"
// const theResultOfSomeFunction = someAsyncFunction()
// console.log( "This is the Value of: " , theResultOfSomeFunction )  //





// console.log( fetch( "http://localhost:3008/toys" ) )  //


// fetch( "someURL-REMEMEBROTSHOULD-BE-A-STRING" ).then(convertTheData ).then( use/interact with the data )

// fetch( "someURL-REMEMEBROTSHOULD-BE-A-STRING" )
// .then( convertTheData )
// .then( use/interact with the data )




// const theResultOfTheFetchFunction = fetch( "http://localhost:3008/toys" )
// console.log( "This is the Result of the Fetch: " , theResultOfTheFetchFunction )  //


// const theResultOfTheFetchFunctionPlusOneDotThen = fetch( "http://localhost:3008/toys" ).then( response => response.json() )
// console.log( "This is the Result of the theResultOfTheFetchFunctionPlusOneDotThen: " , theResultOfTheFetchFunctionPlusOneDotThen )  //


// const theResultOfTheFetchFunctionPlusOneDotThenPlusOurLastDotThen = fetch( "http://localhost:3008/toys" ).then( response => response.json() ) .then( resultOfFetchData => console.log( "This is resultOfFetchData: " , resultOfFetchData) )
// console.log( "This is the Result of the theResultOfTheFetchFunctionPlusOneDotThen: " , theResultOfTheFetchFunctionPlusOneDotThenPlusOurLastDotThen )  //

// JSON
// JS Object Notation
// JavaScript Object Notation




// fetch( "http://localhost:3008/toys" )
// .then( 
  
//         function(response){
//           return response.json()
//         } 

//      )
// .then( 

//         function( someData ){
//           console.log( "This someData from the Fetch: " , someData)  //
//         }

//      )




// fetch(  "http://localhost:3008/toys" )
// .then(  (response)=>{ return response.json() }  )
// .then(  (someData)=>{  console.log( "This someData from the Fetch: " , someData) }  )
// // Dosen't Get an Implicit Return
     
     


// fetch( "http://localhost:3008/toys" )
// .then( response => response.json() )
// .then( someData => console.log( "This someData from the Fetch: " , someData)  )
// // Gets an Implicit Return









// console.log( fetch( "http://localhost:3008/toys/5" ) )  //




/*


  - pre-built function
    - DONT TRY TO DECLARE THIS - JUST USE IT


  - fetch SPECIFICS
    - What Arguments?
      - ATLEAST 1 Argument
        - some URL/WebAddress
      - Can Also Take 2 Arguments
        - MAINLY for NON-GET Fetch Requests
        - some URL/WebAddress
        - a configuration object


*/




// fetch( "http://localhost:3008/toys" )
// .then( // .then( start

//         function( response ){

//           return response.json()

//         }

//      ) // .then ) end
// .then(   

//         function( theFetchData ){

//           console.log( "This is theFetchedDataParsedJSONandReadyToGo: ", theFetchData )

//         }

//      )



//   function handleResponse(response){

//     return response.json()

//   }
//   function handleJSONData( theFetchData ){

//     //// This is Where You'd Do the Remainder of the Challenge
//       console.log( "This is theFetchedDataParsedJSONandReadyToGo: ", theFetchData )
//     //// This is Where You'd Do the Remainder of the Challenge

//   }
// fetch( "http://localhost:3008/toys" )
// .then( handleResponse )
// .then( handleJSONData ) //THE FINAL COUNTDOWN








// //// Dom Selectors

//   const toyCollectionDiv = document.querySelector( "#toy-collection" )
//   // console.log( "This is Our toyCollectionDiv: " , toyCollectionDiv )  //

//   const toyCardDivUsingPurelyCreateElement = document.createElement( "div" )

// //// Dom Selectors



//   function doTheCodeChallange( arrayOfToyObjects ){

//     console.log( "theFetchedDataParsedJSONandReadyToGo: ", arrayOfToyObjects )


//           //// THIS IS WHERE WE WILL MINIMALLY DO THE REMAINDER OF THE CHALLANGE
          
//             let oneToyObjectRex = arrayOfToyObjects[4] // 5thToy - 1 = 4thIndex

//               toyCardDivUsingPurelyCreateElement.classList = "card"
              
//                 const h2ForToyCardDiv = document.createElement( "h2" )
//                   h2ForToyCardDiv.textContent = `${oneToyObjectRex.name} - With CreateElement`
                
//                 const imageForToyCardDiv = document.createElement( "img" )
//                   imageForToyCardDiv.classList = "toy-avatar"
//                   imageForToyCardDiv.src = oneToyObjectRex.image

//                 const pTagForToyCardDiv = document.createElement( "p" )
//                   pTagForToyCardDiv.textContent = `${oneToyObjectRex.likes} Likes`

//                 const likeButtonForToyCardDiv = document.createElement( "button" )
//                   likeButtonForToyCardDiv.textContent = "Like <3"

//                 toyCardDivUsingPurelyCreateElement.append( 
//                   h2ForToyCardDiv, 
//                   imageForToyCardDiv,
//                   pTagForToyCardDiv,
//                   likeButtonForToyCardDiv 
//                 )

//               // console.log( "toyCardDivUsingPurelyCreateElement: ", toyCardDivUsingPurelyCreateElement)  //

//             toyCollectionDiv.append( toyCardDivUsingPurelyCreateElement )
//           //// THIS IS WHERE WE WILL MINIMALLY DO THE REMAINDER OF THE CHALLANGE

//   }




// fetch( "http://localhost:3008/toys" )
// .then( // .then( start

//         function( response ){

//           return response.json()
//           // [ {},{},{} ] = arrayOfToyObjects

//         }

//      ) // .then ) end
// .then( doTheCodeChallange )  // doTheCodeChallange( arrayOfToyObjects )




// WE ARE OUTSIDE OF THE LAST .then()

// ❌THIS IS A NO-NO❌
// console.log( "This is dataThatIWillUnfortunatelyLOSE: ", dataThatIWillUnfortunatelyLOSE )

// WE ARE OUTSIDE OF THE LAST .then()

















// // This is a variable responsible for Toggling the Add Toy Form
let showToyForm = false;


document.addEventListener( "DOMContentLoaded" , ()=>{




  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  addBtn.addEventListener( "click" , 
  
    () => {

      // hide & seek with the form
      showToyForm = !showToyForm;

      if (showToyForm) { // TRUE
        toyFormContainer.style.display = "block";
      } else { // FALSE
        toyFormContainer.style.display = "none";
      }
    }
  
  );


  //// Work on the Form

    const addToyForm = document.querySelector( ".add-toy-form" )

      // addToyForm.addEventListener( "submit" , function(){} )
      addToyForm.addEventListener( 
        
        "submit"
        , 
        function( eventObject ){

          eventObject.preventDefault( )  
          // prevent default behavior or submit
          //// It Will Make The Page Refresh  :(

          console.log( "event Object: " , eventObject )  // object
          console.log( "eventObject.target: " , eventObject.target )  // actual <Form>


          //// Using Array Syntax For Input Fields
          let firstInputField = eventObject.target[0]
          console.log( "firstInputField: " , firstInputField )  // 
          console.log( "firstInputField.value: " , firstInputField.value )  // 

          let secondInputField = eventObject.target[1]
          console.log( "secondInputField: " , secondInputField )  // 
          console.log( "secondInputField.value: " , secondInputField.value )  // 


          // Using name Property/Attribute for Input Fields
          let firstInputFieldUsingName = eventObject.target.name
          console.log( "firstInputFieldUsingName: " , firstInputFieldUsingName )  // 
          console.log( "firstInputFieldUsingName.value: " , firstInputFieldUsingName.value )  // 

          let secondInputFieldUsingName = eventObject.target.image
          console.log( "secondInputFieldUsingName: " , secondInputFieldUsingName )  // 
          console.log( "secondInputFieldUsingName.value: " , secondInputFieldUsingName.value )  // 


          const newObject = { 

              // id: 0,
              image: secondInputField.value,
              likes: 1234567890,
              name: firstInputField.value

          }
          console.log( "newObject: " , newObject ) //

        
        const toyCollectionDivInFetch = document.querySelector( "#toy-collection" )


          const toyCardInFetch = document.createElement( "div" ) // <div></div>
            toyCardInFetch.setAttribute( "class" , "card" )
            

            const h2ForToyCardInFetchDivInFetch = document.createElement( "h2" ) // <h2></h2>
              h2ForToyCardInFetchDivInFetch.textContent = newObject.name
          toyCardInFetch.append( h2ForToyCardInFetchDivInFetch )

            const imageForToyCardInFetch = document.createElement( "img" ) // <img></img>
              imageForToyCardInFetch.className = "toy-avatar"
              imageForToyCardInFetch.src = newObject.image
          toyCardInFetch.append( imageForToyCardInFetch )

          const pTagForToyCardInFetch = document.createElement( "p" )
            pTagForToyCardInFetch.textContent = `${newObject.likes} Likes` // interpolation
            pTagForToyCardInFetch.textContent = newObject.likes + " Likes" // concatination
          toyCardInFetch.append( pTagForToyCardInFetch )

          const likeButtonForToyCardInFetch = document.createElement( "button" )
            likeButtonForToyCardInFetch.classList = "like-btn"
            likeButtonForToyCardInFetch.id = newObject.id
            likeButtonForToyCardInFetch.textContent = "Like <3"
          toyCardInFetch.append( likeButtonForToyCardInFetch )


          //// Like Button Flow/Work - 'Sam's Santa's Workshop Flow'

            likeButtonForToyCardInFetch.addEventListener( "eventType" , function(){} )
            likeButtonForToyCardInFetch.addEventListener( 
              
              "click" 
              
              , 
              
              function(){

                
                // internal - Logic
                newObject.likes++

                  console.log( "clickity-click! " , newObject.likes )  //

                pTagForToyCardInFetch.textContent = `${newObject.likes} Likes` 
                // external - DOM


                // let newLike = newObject.likes++
                // // do some more dynamic logic with that newLike Variable
                // pTagForToyCardInFetch.textContent = `${newLike} Likes` 


              } 
            
            )

          //// Like Button Flow/Work - 'Sam's Santa's Workshop Flow'


          toyCollectionDivInFetch.append( toyCardInFetch )  // THIS WORKS


        } 
        
      )

    console.log( "addToyForm: " ,  addToyForm )  //

  //// Work on the Form
    



});
//// Fetching with Arrow Function Syntax Sugar - implicit return

fetch( "http://localhost:3008/toys" )
.then( response => response.json() )
.then(  
  
  (toyArrayOfObjects)=>{ 
    
    // console.log( "fecthedtoyArrayOfObjects: " , toyArrayOfObjects ) //

    //   const oneToyObject = toyArrayOfObjects[ 4 ]  // n-1
    //   console.log( "oneToyObject: " , oneToyObject ) //

    
    // const toyCollectionDivInFetch = document.querySelector( "#toy-collection" )


    //   const toyCardInFetch = document.createElement( "div" ) // <div></div>
    //     toyCardInFetch.setAttribute( "class" , "card" )
        

    //     const h2ForToyCardInFetchDivInFetch = document.createElement( "h2" ) // <h2></h2>
    //       h2ForToyCardInFetchDivInFetch.textContent = oneToyObject.name
    //   toyCardInFetch.append( h2ForToyCardInFetchDivInFetch )

    //     const imageForToyCardInFetch = document.createElement( "img" ) // <img></img>
    //       imageForToyCardInFetch.className = "toy-avatar"
    //       imageForToyCardInFetch.src = oneToyObject.image
    //   toyCardInFetch.append( imageForToyCardInFetch )

    //   const pTagForToyCardInFetch = document.createElement( "p" )
    //     pTagForToyCardInFetch.textContent = `${oneToyObject.likes} Likes` // interpolation
    //     pTagForToyCardInFetch.textContent = oneToyObject.likes + " Likes" // concatination
    //   toyCardInFetch.append( pTagForToyCardInFetch )

    //   const likeButtonForToyCardInFetch = document.createElement( "button" )
    //     likeButtonForToyCardInFetch.classList = "like-btn"
    //     likeButtonForToyCardInFetch.id = oneToyObject.id
    //     likeButtonForToyCardInFetch.textContent = "Like <3"
    //   toyCardInFetch.append( likeButtonForToyCardInFetch )

    //   toyCollectionDivInFetch.append( toyCardInFetch )  // THIS WORKS
    //   console.log( "toyCardInFetch: " , toyCardInFetch ) //
  
  }  

)


  // ==


//// Fetching with function Key Word
fetch(  "http://localhost:3008/toys" )
.then(  function( response ){ return response.json() }  )
.then(

      function( toyArrayOfObjects ){ 


        console.log( "fecthedtoyArrayOfObjects: " , toyArrayOfObjects ) //

          const oneToyObject = toyArrayOfObjects[ 4 ]  // n-1
          console.log( "oneToyObject: " , oneToyObject ) //

        
        const toyCollectionDivInFetch = document.querySelector( "#toy-collection" )


          const toyCardInFetch = document.createElement( "div" ) // <div></div>
            toyCardInFetch.setAttribute( "class" , "card" )
            

            const h2ForToyCardInFetchDivInFetch = document.createElement( "h2" ) // <h2></h2>
              h2ForToyCardInFetchDivInFetch.textContent = oneToyObject.name
          toyCardInFetch.append( h2ForToyCardInFetchDivInFetch )

            const imageForToyCardInFetch = document.createElement( "img" ) // <img></img>
              imageForToyCardInFetch.className = "toy-avatar"
              imageForToyCardInFetch.src = oneToyObject.image
          toyCardInFetch.append( imageForToyCardInFetch )

          const pTagForToyCardInFetch = document.createElement( "p" )
            pTagForToyCardInFetch.textContent = `${oneToyObject.likes} Likes` // interpolation
            pTagForToyCardInFetch.textContent = oneToyObject.likes + " Likes" // concatination
          toyCardInFetch.append( pTagForToyCardInFetch )

          const likeButtonForToyCardInFetch = document.createElement( "button" )
            likeButtonForToyCardInFetch.classList = "like-btn"
            likeButtonForToyCardInFetch.id = oneToyObject.id
            likeButtonForToyCardInFetch.textContent = "Like <3"
          toyCardInFetch.append( likeButtonForToyCardInFetch )


          //// Like Button Flow/Work - 'Sam's Santa's Workshop Flow'

            // likeButtonForToyCardInFetch.addEventListener( "eventType" , function(){} )
            // likeButtonForToyCardInFetch.addEventListener( 
              
            //   "click" 
              
            //   , 
              
            //   function(){

                
            //     // internal - Logic
            //     oneToyObject.likes++

            //       console.log( "clickity-click! " , oneToyObject.likes )  //

            //     pTagForToyCardInFetch.textContent = `${oneToyObject.likes} Likes` 
            //     // external - DOM


            //     // let newLike = oneToyObject.likes++
            //     // // do some more dynamic logic with that newLike Variable
            //     // pTagForToyCardInFetch.textContent = `${newLike} Likes` 


            //   } 
            
            // )

          //// Like Button Flow/Work - 'Sam's Santa's Workshop Flow'


          toyCollectionDivInFetch.append( toyCardInFetch )  // THIS WORKS
            console.log( "toyCardInFetch: " , toyCardInFetch ) //


          //// Like Button Flow/Work - Querying Off The DOM

            const likeButtonToIncrement = document.querySelector( ".like-btn" )
            console.log( "likeButtonToIncrement: " , likeButtonToIncrement ) //

            likeButtonToIncrement.addEventListener( 
              
              "click" 
              
              , 
              
              function(){

                
                // internal - Logic
                oneToyObject.likes++

                  console.log( "clickity-click! " , oneToyObject.likes )  //

                pTagForToyCardInFetch.textContent = `${oneToyObject.likes} Likes` 
                // external - DOM


                // let newLike = oneToyObject.likes++
                // // do some more dynamic logic with that newLike Variable
                // pTagForToyCardInFetch.textContent = `${newLike} Likes` 


              } 
            
            )

          //// Like Button Flow/Work - Querying Off The DOM
          


          
          
          
        }
        
)
        
        // console.log( "likeButtonForToyCardInFetch: " , likeButtonForToyCardInFetch ) //

/* 

  README Reference Code

  <div class="card">
    <h2>Woody</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div> 

*/


      // SAFTEY CODE
      // const testh1 = document.createElement( "h1" )
      //   testh1.textContent = "Woobly! :)"

/*


      Different Options

      // For Adding a Class

        // toyCardInFetch.setAttribute( "class" , "card" )
        // toyCardInFetch.classList = "card"
        // toyCardInFetch.className = "card"

        <h1 class="" >
        h1{

            class: ""

        }

      // For Adding a Class




      // For Representing Data in Combination with a String

        pTagForToyCardInFetch.textContent = `${oneToyObject.likes} Likes` // interpolation
        pTagForToyCardInFetch.textContent = oneToyObject.likes + " Likes" // concatination

      // For Representing Data in Combination with a String




      // #EVERYTHING'S AN OBJECT // LOL 
      <img src="" >
      img{

          src: ""

      }


*/























































////////////////////////////////////////

// const arrayOfToyObjects = [
//   {
//     "id": 1,
//     "name": "Woody",
//     "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//     "likes": 5
//   },
//   {
//     "id": 2,
//     "name": "Buzz Lightyear",
//     "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
//     "likes": 8
//   },
//   {
//     "id": 3,
//     "name": "Mr. Potato Head",
//     "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
//     "likes": 3
//   },
//   {
//     "id": 4,
//     "name": "Slinky Dog",
//     "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
//     "likes": 4
//   },
//   {
//     "id": 5,
//     "name": "Rex",
//     "image": "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png",
//     "likes": 1
//   },
//   {
//     "id": 6,
//     "name": "Bo Peep",
//     "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
//     "likes": 2
//   },
//   {
//     "id": 7,
//     "name": "Hamm",
//     "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
//     "likes": 0
//   },
//   {
//     "id": 8,
//     "name": "Little Green Men",
//     "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
//     "likes": 1
//   }
// ]
// // console.log( "This is Our Data: " , arrayOfToyObjects )  //


// // 🛠🧰🌟

// // theFirstThingInsomeArray = someArray[0] 
// let theFirstToyObject = arrayOfToyObjects[0] 
// // console.log( "This is Our theFirstToyObject: " , theFirstToyObject )  // 

// /*

// On the index.html page, 

// there is a div 
//   with the id "toy-collection."

//  When the page loads, make a 'GET' request to fetch all the toy objects. With the response data, make a <div class="card"> for each toy and add it to the toy-collection div.

// */


// // One Object From Our Data 
// let oneToyObjectRex = arrayOfToyObjects[4] // 5thToy - 1 = 4thIndex
// // console.log( "This is Our oneToyObjectRex: " , oneToyObjectRex )  //


// const toyCollectionDiv = document.querySelector( "#toy-collection" )
// // console.log( "This is Our toyCollectionDiv: " , toyCollectionDiv )  //


//   const toyCardDivUsingPurelyCreateElement = document.createElement( "div" )
//   toyCardDivUsingPurelyCreateElement.classList = "card"
  
//     const h2ForToyCardDiv = document.createElement( "h2" )
//       h2ForToyCardDiv.textContent = `${oneToyObjectRex.name} - With CreateElement`
//     toyCardDivUsingPurelyCreateElement.append( h2ForToyCardDiv )
    
//     const imageForToyCardDiv = document.createElement( "img" )
//       imageForToyCardDiv.classList = "toy-avatar"
//       imageForToyCardDiv.src = oneToyObjectRex.image
//     toyCardDivUsingPurelyCreateElement.append( imageForToyCardDiv )
    
//     const pTagForToyCardDiv = document.createElement( "p" )
//       pTagForToyCardDiv.textContent = `${oneToyObjectRex.likes} Likes`
//     toyCardDivUsingPurelyCreateElement.append( pTagForToyCardDiv )

//     const likeButtonForToyCardDiv = document.createElement( "button" )
//       likeButtonForToyCardDiv.textContent = "Like <3"
//     toyCardDivUsingPurelyCreateElement.append( likeButtonForToyCardDiv )


//     // toyCardDivUsingPurelyCreateElement.append( 
//     //   h2ForToyCardDiv, 
//     //   imageForToyCardDiv 
//     // )

//   // console.log( "toyCardDivUsingPurelyCreateElement: ", toyCardDivUsingPurelyCreateElement)  //

// toyCollectionDiv.append( toyCardDivUsingPurelyCreateElement )




//   const toyCardDivUsingInnerHTML = document.createElement( "div" )
//     toyCardDivUsingInnerHTML.innerHTML = ` 
    
//       <div class="card">
//         <h2>${oneToyObjectRex.name} - With InnerHTML </h2>
//         <img src=${oneToyObjectRex.image} class="toy-avatar" />
//         <p>${oneToyObjectRex.likes} Likes </p>
//         <button class="like-btn" id="[toy_id]">Like <3</button>
//       </div>
    
//     `
//   // console.log( "toyCardDivUsingInnerHTML: ", toyCardDivUsingInnerHTML)  //
// toyCollectionDiv.append( toyCardDivUsingInnerHTML )




//   // const randomh1ToAppend = document.createElement( "h1" )
//   //   console.log( "This is Our randomh1ToAppend: " , randomh1ToAppend )  //
//   // randomh1ToAppend.textContent = "Woobly! :)"
//   //   console.log( "This is Our randomh1ToAppend: " , randomh1ToAppend )  //

//   // const randomh1ToAppend = document.createElement( "h1" )
//   //       randomh1ToAppend.innerHTML = `<h1>YURT!</h1>`
//   //   console.log( "This is Our randomh1ToAppend: " , randomh1ToAppend )  //




// /*

// // QuerySeclector

// - function > a prebuilt function
//   - id    : "#"
//   - class : "."
//   - tagName : "typeOfTag"
//     - <div> : "div"

// */




// // theLASTThingInsomeArray = someArray[ someArray.length - 1 ) ] 
// let theLASTToyObject = arrayOfToyObjects[ ( arrayOfToyObjects.length - 1 ) ] 
// // console.log( "This is Our theLASTToyObject: " , theLASTToyObject )  // 

// /*

//   // Arrays

//   - Interacting with Arrays
//     - Backet Notation
//       - someArray[ someIndex ]
//         - n = indexOfInquiry
//           - (n - 1) = will ACTUALLY Give You The Desired Index
//         - someArray[0]
//     - Iterators
//       - forEach
//         - WHAT IS "forEach"  ****

// */












// /*

//   // -> MINIMAL ASK/DELIVERABLE FOR THE PRACTICE CHALLENGE

//   // I need you to Fetch/OR/Retrieve ONE ToyObject from this Array of ToyObjects

//   // THEN Render it to the DOM in a Card

// */




















// //// What is .addEventListener()
// /*


//   - function
//     - can be called on {`things`} 
//     - able to take in at LEAST 1 Argument(s) 
//       - (Based Upon How it is Built/Designed)

//     - pre-built function
//       - we don't have to declare it; JUST CALL/INVOKE/ACTIVATE IT
    
//     - callback
//       - function that takes in another function as an argument
//         - f( f2 )  :  f 🤙💫 f2
//         - f( ()=>{} )  :  f 🤙💫 f2
//       - could be AND/OR not be an anonymous function
//         - use an anonymous function
//         OR
//         - write a custom function and pass that in


//   -  .addEventListener() SPECIFIC
//     - pre-built function
//     - What Can You Call It On?
//       - called on an HTML Element
//     - How Many Arguments Can It Take
//       - addEventListener(type, listener);
//       - addEventListener( "type" , listenerCallBack );
//         - "type" : Main Fundemental Event Types
//           - "click"
//           - "submit"
//           - "DOMContentLoaded"
//         - listenerCallBack : CallBack Function
//           - 
  
// */




// //// ❌THIS IS A NO-NO❌
// // function addEventListener(){

// //   // YOU DON'T WANT TO MAKE THIS FUNCTION

// // }