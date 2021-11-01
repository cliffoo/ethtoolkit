import { useState } from 'react';
import * as InputDecoder from 'ethereum-input-data-decoder';

const Decoder = () => {
  const [abi, setAbi] = useState('');
  const [inputData, setInputData] = useState('');
  const [decoded, setDecoded] = useState('');

  const decode = ({ abiNow, inputDataNow }) => {
    const abiToUse = abiNow ? abiNow : abi;
    const inputDataToUse = inputDataNow ? inputDataNow : inputData;

    if (abiToUse === '' || inputDataToUse === '') {
      setDecoded('');
      return;
    }

    let abiList, decoder, decodedData;
    try {
      abiList = JSON.parse(abiToUse);
    } catch (err) { setDecoded('Failed to parse ABI as JSON'); }
    try {
      decoder = new InputDecoder(abiList);
    } catch (err) { setDecoded('Invalid ABI'); }
    try {
      decodedData = decoder.decodeData(inputDataToUse);
      setDecoded(JSON.stringify(decodedData, null, 2));
    } catch (err) { setDecoded('Invalid input data'); }
  };
  const handleAbiChange = ({ target: { value } }) => {
    value = value.toString();
    setAbi(value);
    decode({ abiNow: value });
  };
  const handleInputDataChange = ({ target: { value } }) => {
    value = value.toString();
    setInputData(value);
    decode({ inputDataNow: value });
  };

  return (
    <div className='decoder'>
      <h2 className='decoder-label'>Decode input data</h2>
      <div className='decoder-tools-container'>
        <div className='decoder-tool'>
          <p>ABI</p>
          <textarea value={abi} onChange={handleAbiChange} />
        </div>
        <div className='decoder-tool'>
          <p>Input data</p>
          <textarea value={inputData} onChange={handleInputDataChange} />
        </div>
        <div className='decoder-tool'>
          <p>Decoded</p>
          <textarea value={decoded} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Decoder;
