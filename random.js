const colorcode=document.querySelector(".text");
const selectbox=document.querySelector("#colors");
const button=document.querySelector("#btn");

let red,green,blue;
    const rgbcolor = () =>{
    
    red= Math.floor(Math.random()*255);
    green= Math.floor(Math.random()*255);
    blue= Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;

};

const rgbcolortohexadecimal = () =>{
    let r,g,b;
    r=red.toString(16);
    g=green.toString(16);
    b=blue.toString(16);
    if(r.length==1) r="0"+r;
    if(g.length==1) g="0"+g;
    if(b.length==1) b="0"+b;
    return `#${r}${g}${b}`;


};

const rgbtohsl = () =>{
    let r = red/255;
    let g = green/255;
    let b = blue/255;
    let cmin = Math.min(r,g,b);
    let cmax = Math.max(r,g,b);
    let delta = (cmax-cmin);
    let h = (s = l = 0);
    if(delta == 0) h = 0;
    else if(cmax==r)h=((g-b)/delta)%6;
    else if(cmin==g)h=(b-r)/delta+2;
    else h=(r-g)/delta + 4;
    h= Math.round(h*60);
    if(h<0)h += 360;
    l = (cmax - cmin)/2;
    s = delta == 0?0 :delta /(1-Math.abs(2*l-1));
    s = +(s *100).toFixed(1);
    l = +(l *100).toFixed(1);
    const hslString = `hsl(${h},${s}%,${l}%)`;
    return hslString;
   
};


button.addEventListener("click" , () => {
    rgbcolor();
    const bgcolor=`rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor=bgcolor;
    colorcode.innerHTML=bgcolor;
     
});

colors.addEventListener('change' ,(e) => {
  const selectvalue=e.target.value;
  console.log(selectvalue);
  
  /*
  2. method to select value from options
  const calculate = () =>{
  const tempSelected=document.getElementById("colors");
    const valuetemp=colors.options[tempSelected.selectedIndex].value;*/

  
  switch (selectvalue) {
      
      case "RGB":
        let rgbstring=`rgb(${red},${green},${blue})`;
        colorcode.innerHTML=rgbstring;
        break;

        case "Hexadecimal":
         let hexastring=rgbcolortohexadecimal();
        colorcode.innerHTML=hexastring;
        break;

        case "HSL":
        let hslString=rgbtohsl();
        colorcode.innerHTML=hslString;
        break;      
  }
  
});


