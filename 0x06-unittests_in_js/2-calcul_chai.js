function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = an + bn;
	break;
    case 'SUBTRACT':
	c = an - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            c = "Error";
      } else {
            c = an / bn;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
