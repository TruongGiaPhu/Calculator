let outPutScreen = document.querySelector('input');

function display(num) {
    outPutScreen.value += num;
}

function calculate(num) {
    if (!num) {
        try {
            outPutScreen.value = eval(outPutScreen.value);
        } catch (err) {
            alert('Error');
        }
    } else {
        try {
            outPutScreen.value = eval(outPutScreen.value) / num;
        } catch (err) {
            alert('Error');
        }
    }
}

function Clear() {
    outPutScreen.value = '';
}
function del() {
    outPutScreen.value = outPutScreen.value.slice(0, -1);
}
