import React from 'react';

const options = [
  { id: "x1", value: 1 },
  { id: "x2", value: 2 },
  { id: "x3", value: 3 }
]

const Multiple = (props) => {
  return (
    <select onChange={(e) => props.onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={`mul-${opt.id}`} value={opt.value}>{opt.id}</option>
      ))}
    </select>
  );
}

export default Multiple;
