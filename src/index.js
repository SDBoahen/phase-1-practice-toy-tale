const arrayOfToyObjects = [
  {
    "id": 1,
    "name": "Woody",
    "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
    "likes": 5
  },
  {
    "id": 2,
    "name": "Buzz Lightyear",
    "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
    "likes": 8
  },
  {
    "id": 3,
    "name": "Mr. Potato Head",
    "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
    "likes": 3
  },
  {
    "id": 4,
    "name": "Slinky Dog",
    "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
    "likes": 4
  },
  {
    "id": 5,
    "name": "Rex",
    "image": "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png",
    "likes": 1
  },
  {
    "id": 6,
    "name": "Bo Peep",
    "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
    "likes": 2
  },
  {
    "id": 7,
    "name": "Hamm",
    "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
    "likes": 0
  },
  {
    "id": 8,
    "name": "Little Green Men",
    "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
    "likes": 1
  }
]
console.log( "This is Our Data: " , arrayOfToyObjects )  //


// 🛠🧰🌟

// theFirstThingInsomeArray = someArray[0] 
let theFirstToyObject = arrayOfToyObjects[0] 
// console.log( "This is Our theFirstToyObject: " , theFirstToyObject )  // 

/*

On the index.html page, 

there is a div 
  with the id "toy-collection."

 When the page loads, make a 'GET' request to fetch all the toy objects. With the response data, make a <div class="card"> for each toy and add it to the toy-collection div.

*/


// One Object From Our Data 
let oneToyObjectRex = arrayOfToyObjects[4] // 5thToy - 1 = 4thIndex
console.log( "This is Our oneToyObjectRex: " , oneToyObjectRex )  //


const toyCollectionDiv = document.querySelector( "#toy-collection" )
console.log( "This is Our toyCollectionDiv: " , toyCollectionDiv )  //


  const toyCardDivUsingPurelyCreateElement = document.createElement( "div" )
  toyCardDivUsingPurelyCreateElement.classList = "card"
  
    const h2ForToyCardDiv = document.createElement( "h2" )
      h2ForToyCardDiv.textContent = `${oneToyObjectRex.name} - With CreateElement`
    toyCardDivUsingPurelyCreateElement.append( h2ForToyCardDiv )
    
    const imageForToyCardDiv = document.createElement( "img" )
      imageForToyCardDiv.classList = "toy-avatar"
      imageForToyCardDiv.src = oneToyObjectRex.image
    toyCardDivUsingPurelyCreateElement.append( imageForToyCardDiv )
    
    const pTagForToyCardDiv = document.createElement( "p" )
      pTagForToyCardDiv.textContent = `${oneToyObjectRex.likes} Likes`
    toyCardDivUsingPurelyCreateElement.append( pTagForToyCardDiv )

    const likeButtonForToyCardDiv = document.createElement( "button" )
      likeButtonForToyCardDiv.textContent = "Like <3"
    toyCardDivUsingPurelyCreateElement.append( likeButtonForToyCardDiv )


    // toyCardDivUsingPurelyCreateElement.append( 
    //   h2ForToyCardDiv, 
    //   imageForToyCardDiv 
    // )

  console.log( "toyCardDivUsingPurelyCreateElement: ", toyCardDivUsingPurelyCreateElement)  //

toyCollectionDiv.append( toyCardDivUsingPurelyCreateElement )




  const toyCardDivUsingInnerHTML = document.createElement( "div" )
    toyCardDivUsingInnerHTML.innerHTML = ` 
    
      <div class="card">
        <h2>${oneToyObjectRex.name} - With InnerHTML </h2>
        <img src=${oneToyObjectRex.image} class="toy-avatar" />
        <p>${oneToyObjectRex.likes} Likes </p>
        <button class="like-btn" id="[toy_id]">Like <3</button>
      </div>
    
    `
  console.log( "toyCardDivUsingInnerHTML: ", toyCardDivUsingInnerHTML)  //
toyCollectionDiv.append( toyCardDivUsingInnerHTML )




  // const randomh1ToAppend = document.createElement( "h1" )
  //   console.log( "This is Our randomh1ToAppend: " , randomh1ToAppend )  //
  // randomh1ToAppend.textContent = "Woobly! :)"
  //   console.log( "This is Our randomh1ToAppend: " , randomh1ToAppend )  //

  // const randomh1ToAppend = document.createElement( "h1" )
  //       randomh1ToAppend.innerHTML = `<h1>YURT!</h1>`
  //   console.log( "This is Our randomh1ToAppend: " , randomh1ToAppend )  //




/*

// QuerySeclector

- function > a prebuilt function
  - id    : "#"
  - class : "."
  - tagName : "typeOfTag"
    - <div> : "div"

*/




// theLASTThingInsomeArray = someArray[ someArray.length - 1 ) ] 
let theLASTToyObject = arrayOfToyObjects[ ( arrayOfToyObjects.length - 1 ) ] 
// console.log( "This is Our theLASTToyObject: " , theLASTToyObject )  // 

/*

  // Arrays

  - Interacting with Arrays
    - Backet Notation
      - someArray[ someIndex ]
        - n = indexOfInquiry
          - (n - 1) = will ACTUALLY Give You The Desired Index
        - someArray[0]
    - Iterators
      - forEach
        - WHAT IS "forEach"  ****

*/




// This is a variable responsible for Toggling the Add Toy Form
let showToyForm = false;








document .addEventListener( "DOMContentLoaded" , ()=>{

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

});

/*

  // -> MINIMAL ASK/DELIVERABLE FOR THE PRACTICE CHALLENGE

  // I need you to Fetch/OR/Retrieve ONE ToyObject from this Array of ToyObjects

  // THEN Render it to the DOM in a Card

*/




















//// What is .addEventListener()
/*


  - function
    - can be called on {`things`} 
    - able to take in at LEAST 1 Argument(s) 
      - (Based Upon How it is Built/Designed)

    - pre-built function
      - we don't have to declare it; JUST CALL/INVOKE/ACTIVATE IT
    
    - callback
      - function that takes in another function as an argument
        - f( f2 )  :  f 🤙💫 f2
        - f( ()=>{} )  :  f 🤙💫 f2
      - could be AND/OR not be an anonymous function
        - use an anonymous function
        OR
        - write a custom function and pass that in


  -  .addEventListener() SPECIFIC
    - pre-built function
    - What Can You Call It On?
      - called on an HTML Element
    - How Many Arguments Can It Take
      - addEventListener(type, listener);
      - addEventListener( "type" , listenerCallBack );
        - "type" : Main Fundemental Event Types
          - "click"
          - "submit"
          - "DOMContentLoaded"
        - listenerCallBack : CallBack Function
          - 
  
*/




//// ❌THIS IS A NO-NO❌
// function addEventListener(){

//   // YOU DON'T WANT TO MAKE THIS FUNCTION

// }