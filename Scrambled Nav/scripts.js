const enhance = (id) => {
  const element = document.getElementById('split');
  const text = element.innerText.split('');
  element.innerText = '';

  text.forEach((letter) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.innerText = letter;
    element.appendChild(span);
  });
};

const enhance1 = (id) => {
  const element = document.getElementById('split1');
  const text = element.innerText.split('');
  element.innerText = '';

  text.forEach((letter) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.innerText = letter;
    element.appendChild(span);
  });
};

const enhance2 = (id) => {
  const element = document.getElementById('split2');
  const text = element.innerText.split('');
  element.innerText = '';

  text.forEach((letter) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.innerText = letter;
    element.appendChild(span);
  });
};

enhance('split');
enhance1('split1');
enhance2('split2');
