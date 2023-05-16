let photosArr = [
    'https://fastly.picsum.photos/id/371/600/600.jpg?hmac=9nKOTKqQtybe7WlTf5tGcdUfm7E3qy433wGEzji7J5M',
    'https://fastly.picsum.photos/id/1011/400/400.jpg?hmac=jvBe5mf7uDeDmAW3ktW1MawUOEOejOAaMOCgicg1pbc',
    'https://fastly.picsum.photos/id/308/600/400.jpg?hmac=7OkFoJc-gMzMAs3LRlECDU18iS2aLizfB0AzcRNpl1A',
    'https://fastly.picsum.photos/id/908/500/200.jpg?hmac=5wy4gD3tpo2-B8F-AafDBTBHcjWkbZTO9rHpheqGQWY',
    'https://fastly.picsum.photos/id/177/400/400.jpg?hmac=aVgfzmAJ4tG-EzJLqqeY46vHKmUGnlqQPo53s8Qrh0U',
    'https://fastly.picsum.photos/id/388/300/600.jpg?hmac=zZ4nKq81O4sqrUgCosl6oHtEDb9GlivkpcxFM4S-O2A',
    'https://fastly.picsum.photos/id/362/300/500.jpg?hmac=pfUsVadgiCD9DiRlwiUoECweomyJkRGtF8AjCCAMEbw',
    'https://fastly.picsum.photos/id/552/500/200.jpg?hmac=128NOJla98fTJNIj4HMnEr7UqzDT9R0u-GS6S41AAD4',
    'https://fastly.picsum.photos/id/382/300/200.jpg?hmac=E0DQ7pBkYETJtSSD6t8zaOmQQhV5QPiAtNUYRlSxAAg',
    'https://fastly.picsum.photos/id/83/600/400.jpg?hmac=Aj4sMjRJ9FGtVCVKrjiFvkl5htGFb9Lb2yN0Fp8s-yw',
    'https://fastly.picsum.photos/id/946/300/200.jpg?hmac=aXMoUqLcaPHPnB6JRMDKaN7QfWJr9GrwfStB2va-kjA',
    'https://fastly.picsum.photos/id/715/400/400.jpg?hmac=eSRpFZ17S87USTAUHim-QFoP0orOPeqMpnOSlxCpGto',
    'https://fastly.picsum.photos/id/581/400/400.jpg?hmac=hwxtFszmLrsPiu7tNwSekrVbiD-QTBhbhFFo27A4H38',
    'https://fastly.picsum.photos/id/976/600/600.jpg?hmac=5QDAHt_d9TcUZbiOO5QpZG1XoCxWcWeRfQlQJ3JNSk8',
    'https://fastly.picsum.photos/id/195/400/400.jpg?hmac=Y84r3gSy17PW0dZ9VysjSaFc4v67rz2GxMMcGTKubQQ',
    'https://fastly.picsum.photos/id/698/500/200.jpg?hmac=SqDvpfvade6cstW3leds3SaKydF4C8oWkpBiXQo8Cek',
    'https://fastly.picsum.photos/id/404/400/400.jpg?hmac=jpg9DG6PcZt2fOjKawcB1qULDWjWCG9Oigagc0Ph49Q',
]

let leftArr = [
    '10vh','45vh','95vh','120vh','135vh','155vh','176vh','220vh','248vh','267vh','290vh','311vh','337vh','385vh','399vh','465vh','493vh',
]

let topArr = [
    '25vh','8vh','52vh','11vh','24vh','35vh','5vh','28vh','11vh','49vh','5vh','33vh','17vh','29vh','6vh','17vh','31vh',
]

let widthArr = [
    '60vh','40vh','60vh','50vh','40vh','30vh','30vh','50vh','30vh','60vh','30vh','40vh','40vh','60vh','40vh','50vh','40vh',
]

let heightArr = [
    '60vh','40vh','40vh','20vh','40vh','60vh','50vh','20vh','20vh','40vh','20vh','40vh','40vh','60vh','40vh','20vh','40vh',
]

let speedArr = [
  '100', '300','150','200','100','200','300','150','100','200','100','300','150','100','200','150','300',
]

let mainWrapper = document.querySelector('.main-wrapper')

for (let i = 1; i <= photosArr.length; i++) {
    let newDiv = document.createElement('div')

    mainWrapper.append(newDiv)
    newDiv.classList.add('card')
    newDiv.style.left = leftArr[i - 1]
    newDiv.style.top = topArr[i - 1]
    newDiv.style.width = widthArr[i - 1]
    newDiv.style.height = heightArr[i - 1]
    newDiv.setAttribute('speed', speedArr[i - 1])
    let newImage = document.createElement('img')
    newDiv.append(newImage)
    newImage.setAttribute('src', photosArr[i - 1])
}

let cards = document.querySelectorAll('.card');

document.addEventListener("DOMContentLoaded", ()=>{
    cards.forEach((card) => {
        card.speed = card.getAttribute('speed')
        Object.defineProperty(card, 'startPosition', {value: card.getBoundingClientRect().left, writable: false})
        card.newPositionAccumulator = 0
        card.moveLeft = function () {
            card.newPositionAccumulator -= (Number(card.getAttribute('speed')))*2
            let newPosition = card.newPositionAccumulator + card.startPosition
            let newTextPosition = newPosition + 'px'
            card.style.left = newTextPosition
        }
        card.moveRight = function () {
            card.newPositionAccumulator += (Number(card.getAttribute('speed')))*2
            let newPosition = card.newPositionAccumulator + card.startPosition
            let newTextPosition = newPosition + 'px'
            card.style.left = newTextPosition
        }
    })
})
mainWrapper.addEventListener('wheel', (e)=> {
    cards.forEach((card) => {
        if (e.deltaY > 0) {
            card.moveLeft()
        } else {
            card.moveRight()
        }
    })
})
cards.forEach((card)=>{
    let child = card.firstChild
    let cardSrc = child.getAttribute('src')
    let currentOpenedCard
    let currentOpenedImg

    card.addEventListener('click',(e)=>{

        let newImage = document.createElement('img')
        let newDiv = document.createElement('div')
        let newWrapper = document.createElement('div')

        mainWrapper.append(newWrapper)
        newWrapper.append(newDiv)
        newDiv.append(newImage)
        newWrapper.classList.add('modalWindowWrapper')
        newDiv.classList.add('modalWindow')
        newImage.classList.add('modalImage')
        newImage.setAttribute('src', cardSrc)
        console.log(cardSrc)
        currentOpenedCard = newWrapper
        newWrapper.addEventListener('click', e => {

            if (!e.target.classList.contains('modalImage')) {
                newWrapper.style.display = 'none'
            }
        })
    })
})



//testing....