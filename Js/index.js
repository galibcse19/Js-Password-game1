document.getElementById('p1').addEventListener('keyup', function (event) {
    const P1 = event.target.value;
    const P2 = document.getElementById('p2').onkeyup.value; 
    console.log(P2);
    const buttonAnimation = document.getElementById('clickButton');

    if (P1 === P2) {
        buttonAnimation.removeAttribute('disabled');
    } else {
        buttonAnimation.setAttribute('disabled', true);
    }
});

document.getElementById('clickButton').addEventListener('click',function(){
    const ShowInScreen = document.getElementById('showInScreen');
    const p=document.createElement('p')
    p.innerText="Successfully Matched Password";
    ShowInScreen.appendChild(p);
});

 
