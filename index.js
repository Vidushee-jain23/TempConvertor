let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");

cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c*9/5) + 32;
    let k = Number(c) + 273.15;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    if(!Number.isInteger(k)){
        k = k.toFixed(2);
    }
    fah.value = f;
    kel.value = k;
});

fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = (f -32) * 5/9 + 273.15;
    if(!Number.isInteger(c)){
        c = c.toFixed(2);
    }
    if(!Number.isInteger(k)){
        k = k.toFixed(2);
    } 
    cel.value = c;
    kel.value = k;
})

kel.addEventListener('input',function(){
    let k = this.value;
    let c = Number(k) - 273.15;
    let f = (k - 273.15) * 9/5 + 32;
    if(!Number.isInteger(c)){
        c = c.toFixed(2);
    }
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    cel.value = c;
    fah.value = f;
});
function changeC(color){
    document.body.style.background = color;
};
