let body = document.querySelector('.wrapper')

let dotsArray = document.querySelectorAll('.box')

let imagesArray = ['img2.jpg','img3.jpg','img4.jpg']

let imagesCounter = 0;
let dotsCounter = 0;



function background(){
   body.style.backgroundImage = 'url(' + imagesArray[imagesCounter] + ')';
}

// applying backgroundImage as page loads.....
background();


// applying backgroundImage after every 3 seconds
setInterval(next, 5000)


const nextBtn = document.querySelector('.fa-chevron-right')

const previousBtn = document.querySelector('#left')

nextBtn.addEventListener('click', next)



function next(){
  imagesCounter++;
  if(imagesCounter===3){
     imagesCounter=0;
  }
  body.style.backgroundImage = 'url(' + imagesArray[imagesCounter] + ')';

  dotsCounter++;
  if(dotsCounter===3){
     dotsCounter=0
  }
  dotsArray.forEach(dot=>{
   dot.classList.remove('dot')
   dotsArray[dotsCounter].classList.add('dot')

})
  
 
}


 
  
previousBtn.addEventListener('click', previous)

  function previous(){
  imagesCounter--;
   if(imagesCounter===-1){
      imagesCounter = 2
   }
  body.style.backgroundImage = 'url(' + imagesArray[imagesCounter] + ')';

  dotsCounter--;
  if(dotsCounter===-1){
    dotsCounter = 2
  }
  dotsArray.forEach(dot=>{
     dot.classList.remove('dot')
     dotsArray[dotsCounter].classList.add('dot')

  })
    
 }





