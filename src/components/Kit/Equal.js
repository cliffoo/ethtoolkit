import { useState } from "react";

const Equal = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [equal, setEqual] = useState(undefined);

  const handleXChange = ({ target: { value } }) => {
    value = value.toString();
    setX(value);
    if (caseSensitive) { setEqual(value === y); }
    else { setEqual(value.toLowerCase() === y.toLowerCase()); }
  };
  const handleYChange = ({ target: { value } }) => {
    value = value.toString();
    setY(value);
    if (caseSensitive) { setEqual(value === x); }
    else { setEqual(value.toLowerCase() === x.toLowerCase()); }
  };
  const handleCheckboxChange = () => {
    if (caseSensitive) { setEqual(x.toLowerCase() === y.toLowerCase()); }
    else { setEqual(x === y); }
    setCaseSensitive(!caseSensitive);
  };

  return (
    <div className='kit-tool kit-tool-equality'>
      <h2 className='kit-tool-label'>Equality</h2>
      <textarea value={x} onChange={handleXChange} cols={40} rows={2} />
      <div className='kit-tool-equality-mid-container'>
        <p>Case sensitive:&nbsp;</p>
        <input type='checkbox' defaultChecked={caseSensitive} onChange={handleCheckboxChange} />
        {typeof (equal) === 'boolean' &&
          <div className={`kit-tool-equality-equality-container ${equal ? 'green' : 'red'}`}>
            {equal ? '=' : '≠'}
          </div>
        }
      </div>
      <textarea value={y} onChange={handleYChange} cols={40} rows={2} />
    </div>
  );
};

export default Equal;
