import React from 'react';

function App() {
  let text;
  const show = true;

  if(show) {
    text = 'text1';
  } else {
    text = 'text2';
  }
  return (
    <>
        <div>
          {text}
        </div>
    </>

  );
}

export default App;
