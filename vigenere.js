const alphabet = 'a,ą,b,c,ć,d,e,ę,f,g,h,i,j,k,l,ł,m,n,ń,o,ó,p,q,r,s,ś,t,u,v,w,x,y,z,ź,ż'.split(
  ','
);

const buttonEncrypt = document.querySelector('#encryptEn');
const buttonDecrypt = document.querySelector('#encryptDe');

const buttonChoiceEn = document.querySelector('.choiceEn');
const buttonChoiceDe = document.querySelector('.choiceDe');

const formEncrypt = document.querySelector('.formsEncrypt');
const formDecrypt = document.querySelector('.formsDecrypt');

buttonChoiceEn.addEventListener('click', () => {
  buttonChoiceEn.classList.toggle('active');
  buttonChoiceDe.classList.toggle('active');

  if (!formEncrypt.classList.contains('formActive')) {
    formEncrypt.classList.toggle('formsActive');
    formDecrypt.classList.toggle('formsActive');
  }
});

buttonChoiceDe.addEventListener('click', () => {
  buttonChoiceEn.classList.toggle('active');
  buttonChoiceDe.classList.toggle('active');

  if (!formDecrypt.classList.contains('formActive')) {
    formDecrypt.classList.toggle('formsActive');
    formEncrypt.classList.toggle('formsActive');
  }
});

const alphabetPos = (lett) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] == lett) return i;
  }
};

buttonEncrypt.addEventListener('click', () => {
  let encrypted = [];
  const toEncrypt = document
    .querySelector('#textEn')
    .value.trim()
    .replace(/\s+/g, '')
    .toLocaleLowerCase();
  const word = document
    .querySelector('#textWORD')
    .value.trim()
    .replace(/\s+/g, '')
    .toLocaleLowerCase();
  const result = document.querySelector('#resultEn');

  for (let i = 0; i < toEncrypt.length; i++) {
    const index = i % word.length;
    const shiftVertical = alphabetPos(word[index]);
    const shiftHorizontal = alphabetPos(toEncrypt[i]);
    encrypted += alphabet[(shiftVertical + shiftHorizontal) % alphabet.length]; // vertical = pion
  }

  result.value = encrypted.toString();
});

buttonDecrypt.addEventListener('click', () => {
  let decrypted = [];
  const toDecrypt = document
    .querySelector('#textDe')
    .value.trim()
    .replace(/\s+/g, '')
    .toLocaleLowerCase();
  const word = document
    .querySelector('#textWORDDe')
    .value.trim()
    .replace(/\s+/g, '')
    .toLocaleLowerCase();
  const result = document.querySelector('#resultDe');
  let j = 0;
  for (let i = 0; i < toDecrypt.length; i++) {
    decrypted +=
      alphabet[(alphabetPos(toDecrypt[i]) - alphabetPos(word[j]) + 35) % 35];
    j = (j + 1) % word.length;
  }

  result.value = decrypted.toString();
});
