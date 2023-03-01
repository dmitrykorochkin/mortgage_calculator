function init(getData) {
  const {base, it, gov, zero} = getData.programs;

/* назначение кнопкам значений  */
  document.querySelector('#base-value').value = base;
  document.querySelector('#it-value').value = it;
  document.querySelector('#gov-value').value = gov;
  document.querySelector('#zero-value').value = zero;

  document.querySelector('#base-text').innerText = base * 100 + `%`;
  document.querySelector('#it-text').innerText = it * 100 + `%`;
  document.querySelector('#gov-text').innerText = gov * 100 + `%`;
  document.querySelector('#zero-text').innerText = zero * 100 + `%`;
}

export default init;