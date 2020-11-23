const alphabet = "a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,q,r,s,ś,t,u,v,w,x,y,z,ź,ż".split(',');

const buttonEncrypt = document.querySelector("#encryptEn");
const buttonDecrypt = document.querySelector("#encryptDe");

const buttonChoiceEn = document.querySelector(".choiceEn");
const buttonChoiceDe = document.querySelector(".choiceDe");

const formEncrypt = document.querySelector(".formsEncrypt");
const formDecrypt = document.querySelector(".formsDecrypt");

buttonChoiceEn.addEventListener( "click", () =>{
    buttonChoiceEn.classList.toggle("active");
    buttonChoiceDe.classList.toggle("active");
    
    if( !formEncrypt.classList.contains("formActive"))
        {
            formEncrypt.classList.toggle("formsActive");
            formDecrypt.classList.toggle("formsActive");
        }
});

buttonChoiceDe.addEventListener( "click", () =>{
    buttonChoiceEn.classList.toggle("active");
    buttonChoiceDe.classList.toggle("active");
    
    if( !formDecrypt.classList.contains("formActive"))  
        {
            formDecrypt.classList.toggle("formsActive");
            formEncrypt.classList.toggle("formsActive");
        }
});


buttonEncrypt.addEventListener("click", () =>{
    let encrypted = [];
    const toEncrypt = document.querySelector("#textEn").value.trim().replace(/\s+/g,'').toLocaleLowerCase();
    const shift =  parseInt( document.querySelector("#shiftEn").value );
    const result = document.querySelector("#resultEn");

    for(let i = 0; i < toEncrypt.length; i++)
    {
        let currentEl = alphabet.indexOf(toEncrypt[i]);
        let newEl = (currentEl+shift)%35;
        encrypted.push(alphabet[newEl]);
    }

    result.value = encrypted.toString().replaceAll(',', '');
});

buttonDecrypt.addEventListener("click", () =>{
    let Decrypted = [];
    const toDecrypt = document.querySelector("#textDe").value.trim().replace(/\s+/g,'').toLocaleLowerCase();
    const shift =  parseInt( document.querySelector("#shiftDe").value );
    const result = document.querySelector("#resultDe");

    for(let i = 0; i < toDecrypt.length; i++)
    {
        let currentEl = alphabet.indexOf(toDecrypt[i]);
        let newEl = (currentEl-shift)%35;
        if( newEl < 0)
            newEl += 35;
        Decrypted.push(alphabet[newEl]);
    }

    result.value = Decrypted.toString().replaceAll(',', '');
});
