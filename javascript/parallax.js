const left = document.querySelector('.cad');
const move = document.getElementById('oof');
const please = document.getElementById("testy")
const proj = document.getElementById("proj")
const letro = document.getElementById("letro")
const rightro = document.getElementById("rightro")
const news = document.getElementById("new")
const etro = document.getElementById("diffleft")
const ightro = document.getElementById("diffright")
let curs = document.querySelector('.cursor');
var customCursor = document.getElementById('customCursor');


document.addEventListener('DOMContentLoaded', function() {
    var customCursor = document.getElementById('customCursor');
    var mouseX = 0, mouseY = 0;
    var lastMouseX = 0, lastMouseY = 0;
    var isMoving = false;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!isMoving) {
            requestAnimationFrame(updateCursor);
        }
        isMoving = true;
    });

    function updateCursor() {
        if (lastMouseX !== mouseX || lastMouseY !== mouseY) {
            var x = mouseX;
            var y = mouseY + window.scrollY;
            customCursor.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            lastMouseX = mouseX;
            lastMouseY = mouseY;
            requestAnimationFrame(updateCursor);
        } else {
            isMoving = false;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const dinfo = document.querySelector('.dinfo');
    let cards = dinfo.querySelectorAll('.cards');
    const gone = document.querySelectorAll('.uniem');
    const rarrow = document.querySelector('.fa-arrow-right');
    const larrow = document.querySelector('.fa-arrow-left');

  
    // cards.forEach(card => {
    //   card.addEventListener('click', rotateCards);
    // });

    rarrow.addEventListener('click', rotateCards);
    larrow.addEventListener('click', rotateCardsLeft);

  
    function rotateCards() {
      // Rotate positions: left -> center -> right -> back to left
      let leftCard = cards[0];
      let centerCard = cards[1];
      let rightCard = cards[2];
  
      leftCard.classList.remove('lefter');
      leftCard.classList.add('center');
      centerCard.classList.remove('center');
      centerCard.classList.add('righter');
      rightCard.classList.remove('righter');
      rightCard.classList.add('lefter');
  
      // Re-assign the new positions in the cards array for next click action
      
        let uniemElementsleft = leftCard.getElementsByClassName('uniem');
        if (uniemElementsleft.length > 0) {
            uniemElementsleft[0].classList.add('mid');
        }
        let uniemElementscenter = centerCard.getElementsByClassName('uniem');
        if (uniemElementscenter.length > 0) {
            uniemElementscenter[0].classList.remove('mid');
        }

        let resetleft = leftCard.getElementsByClassName('rese');
        if (resetleft.length > 0) {
            resetleft[0].classList.remove('mid');
            resetleft[0].classList.add('try');
        }
        let resetcenter = centerCard.getElementsByClassName('rese');
        if (resetcenter.length > 0) {
            resetcenter[0].classList.add('mid');
        }


      
      cards = [rightCard, leftCard, centerCard];
    }

    function rotateCardsLeft() {
        // Rotate positions: right -> center -> left -> back to right
        let leftCard = cards[0];
        let centerCard = cards[1];
        let rightCard = cards[2];
    
        leftCard.classList.remove('lefter');
        leftCard.classList.add('righter');
        centerCard.classList.remove('center');
        centerCard.classList.add('lefter');
        rightCard.classList.remove('righter');
        rightCard.classList.add('center');
    
        // Adjust classes for uniem and rese elements
        let uniemElementscenter = centerCard.getElementsByClassName('uniem');
        if (uniemElementscenter.length > 0) {
            uniemElementscenter[0].classList.remove('mid');
        }
        let uniemElementsRight = rightCard.getElementsByClassName('uniem');
        if (uniemElementsRight.length > 0) {
            uniemElementsRight[0].classList.add('mid');
        }
    
        let resetCenter = centerCard.getElementsByClassName('rese');
        if (resetCenter.length > 0) {
            resetCenter[0].classList.add('mid');
            resetCenter[0].classList.remove('try');
        }
        let resetRight = rightCard.getElementsByClassName('rese');
        if (resetRight.length > 0) {
            resetRight[0].classList.remove('mid');
        }
    
        // Re-assign the new positions in the cards array for next click action
        cards = [centerCard, rightCard, leftCard];
    }
    
  });
  



// window.addEventListener('scroll', function() {
//     var customCursor = document.getElementById('customCursor');
//     var mouseY = parseInt(customCursor.style.top, 10) - window.scrollY;
//     customCursor.style.top = mouseY + window.scrollY + 'px';
// });

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
 
// var docheight = getDocHeight()


function getmeasurements(){
	
	// return pctScrolled
}

function amountscrolled(){
    var winheight= window.innerHeight
	var docheight = getDocHeight()
    var scrollTop = window.scrollY
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    return pctScrolled
}

window.addEventListener("resize", function(){
    getmeasurements()
}, false)


const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

window.addEventListener("scroll", function(){
    // clearTimeout(throttlescroll)
    //     throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
    //     amountscrolled()
    // }, 50)
    // function elementVisibleInViewport(el, threshold = 0) {
    //     const rect = el.getBoundingClientRect();
    //     const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    //     return !(rect.bottom - threshold < 0 || rect.top - viewHeight + threshold > 0);
    // }
    
    
    

    // if(!elementVisibleInViewport(proj)){
    //     proj.style.opacity = 0
    //     proj.style.transform = `translateY(${25}%)`;
    //     letro.style.opacity = 0
    //     letro.style.transform = ``
    //     rightro.style.transform = ``
    //     rightro.style.opacity = 0
    // }

    if(elementIsVisibleInViewport(proj)){

        proj.style.opacity = 1
        proj.style.transform = `translateY(${-0}%)`;
        proj.style.transition = `all .7s`
        letro.style.transform = ` perspective(1000px) rotate3d(-.4, 1, 0, 10deg)`
        letro.style.opacity = 1
        letro.style.transition = 'all .8s'
        rightro.style.transform = ` perspective(1000px) rotate3d(1, -14, 0, 10deg)`
        rightro.style.opacity = 1
        rightro.style.transition = 'all .8s .1s'

    }
    
    if(elementIsVisibleInViewport(news)){
        etro.style.transform = ` perspective(1000px) rotate3d(-.4, 1, 0, 10deg)`
        etro.style.transition = 'all 1.2s'
        ightro.style.transform = ` perspective(1000px) rotate3d(1, -14, 0, 10deg)`
        ightro.style.opacity = 1
        ightro.style.transition = 'all 1.2s .1s'
    }

    const val = window.scrollY * .3;

    document.querySelectorAll('.imageC').forEach((item) => {
        item.style.transform =  `translateX(${val * -.3}%)`
        // item.backgroundPosition = `${val * .6}% 50%`
        item.animate({
            
            backgroundPosition: `${val * .1}% 50%`
        }, {duration: 500, fill: 'forwards'});
    })

    // if(elementIsVisibleInViewport(please)){
    // const val = window.scrollY * .1;
    // left.style.transform = `translateY(${-.15 * val}%)`;
    // left.style.height = `${-.15 * val}vh`;
    // document.querySelectorAll('.imageC').forEach((item) => {
    //     // item.style.transform =  `translateX(${val * -.1}%)`
        
    // }
    // )    

    
    // }


    if(elementIsVisibleInViewport(move)){
        const scrolled = 100;
    const val = (1 - (amountscrolled() / 100)) * window.innerHeight * .1;
        document.querySelectorAll('.imageC').forEach((item) => {
            // item.style.transform = `translateX(${val * -.8}%)`
            
            item.animate({
                backgroundPosition: `${val * 1.2}% 50%`,
                
            }, {duration: 1200, fill: 'forwards'});
        }
        )
    }
    
}, false)

