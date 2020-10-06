import React from 'react';

function Food(props){
  console.log(props);
  return <h1>Potata?!</h1>
}

function App() {
  return (<div>Hello
              <Food 
                fav="kimchi"
                somthing={true}
                papa={["potato123",1,2,3,4,true]}
             />
          </div>
  );
}

export default App;
