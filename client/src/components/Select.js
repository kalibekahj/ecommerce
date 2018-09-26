import React from "react";

export default function Select(props) {
   const options = props.options.map((o,i) => <option key={i} value={o.value}>{o.key}</option>);
  return (
    <select className={props.className} onChange={props.onChange}>
      {options}
    </select>
  );
}
