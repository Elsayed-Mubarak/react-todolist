import React from 'react';

const dynamic = (props) => {
    let param = props.match.params.Dynamic;
    console.log("props from dynamic component", param);
    return (
    <div> Dynamic component params is {param}</div>
    );
}
export default dynamic; 