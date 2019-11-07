let thing = document.querySelector('.thing')
let test = document.querySelector('#test')
let circles = document.querySelectorAll('.circle')
const numpad = document.querySelector('.numpad')

var manualInputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});

numpad.addEventListener('click', () => {
    if (event.target !== event.currentTarget) {
        test.value += event.target.value
        test.dispatchEvent(manualInputEvent);
    }
})

test.addEventListener('input', () => {
    circles.forEach((circle, index) => {
        if (index < test.value.length) {
            circle.classList.add('filled')
        }
    })

    if (test.value.length === 4) {
        test.setAttribute('disabled', '')
        setTimeout(() => {
            if (window.navigator.vibrate) {
                window.navigator.vibrate(500);
            }
            document.querySelector('.holder').classList.add('shaker')
            setTimeout(() => {
                document.querySelector('.holder').classList.remove('shaker')
                test.value = ''
                test.removeAttribute('disabled')

                circles.forEach((circle, index) => {
                    circle.classList.remove('filled')
                })
            }, 750)
        }, 450)
    }
})
