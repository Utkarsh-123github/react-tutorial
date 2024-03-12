import Chai from "./chai"
function App() {

  return (
    <>
      <h1>Chai aur React | Utkarsh Tiwari</h1>
      <p>Some react commands :- </p>
      <p>npm create vite@latest :- To create a react app using vite</p>
      <p>npm install :- To install the node modules</p>
      <p>npm run dev :- To run the react app</p>
      <p>React bolta hai ki aap function lo or function ke andar html return krdo or mai usko render krdunga.</p>
      <p>Function ka name hamesha uppercase letter se shuru hoga.</p>
      {/* yaha hum ek chai name ka component chalane jaa rhe */}
      <Chai />
    </>
  )
}

export default App
