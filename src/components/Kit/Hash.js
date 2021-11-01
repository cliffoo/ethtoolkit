import { useState } from 'react';
import * as keccak256 from 'keccak256';

const Hash = () => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setInput(value);
    setHash(keccak256(value).toString('hex'));
  };

  return (
    <div className='kit-tool kit-tool-hash'>
      <h2 className='kit-tool-label'>Keccak256</h2>
      <div className='kit-tool-hash-input-container'>
        <p>Text input:&nbsp;</p>
        <input value={input} onChange={handleInputChange} />
      </div>
      <textarea value={hash} readOnly={true} cols={30} rows={1} />
    </div>
  );
};

export default Hash;
