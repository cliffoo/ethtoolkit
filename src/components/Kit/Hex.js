import { useState } from 'react';

const Hex = () => {
  const [hex, setHex] = useState('');
  const [dec, setDec] = useState('');

  const reset = () => {
    setDec('');
    setHex('');
  };
  const handleDecInputChange = ({ target: { value } }) => {
    if (value === '') { reset(); }
    if (/^[0-9]+$/.test(value)) {
      value = parseInt(value);
      setDec(value);
      setHex(value.toString(16));
    }
  };
  const handleHexInputChange = ({ target: { value } }) => {
    if (value === '') { reset(); }
    if (/^[0-9a-fA-F]+$/.test(value)) {
      value = value.toString();
      setHex(value);
      setDec(parseInt(value, 16));
    }
  };

  return (
    <div className='kit-tool kit-tool-hex'>
      <h2 className='kit-tool-label'>Hex &#8652; dec</h2>
      <div className='kit-tool-hex-input-container'>
        <p>Hex:&nbsp;</p>
        <input value={hex} onChange={handleHexInputChange} />
      </div>
      <div className='kit-tool-hex-input-container'>
        <p>Dec:&nbsp;</p>
        <input value={dec} onChange={handleDecInputChange} />
      </div>
    </div>
  );
};

export default Hex;
