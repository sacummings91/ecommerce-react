import React from 'react';

export default function adminPageLayout(props) {
  return (
    <div>
      <div>
        {props.children[0]}
      </div>
      <div>
        {props.children[1]}
      </div>
      <div>
        {props.children[2]}
      </div>
    </div>
  );
}
