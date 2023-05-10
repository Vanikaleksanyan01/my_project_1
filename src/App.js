// Orinak

// import './App.css';


// function App() {
//   return (
//     <div>
//       <p>React js</p>
//     </div>
//   );
// }

// export default App;




//  React Das 1

// Sa hin greladzevi hamar 
// import { Component } from 'react';

// sa taza greladzevi hamar e
// import './App.css';

// React das 1

// Taza dzev

// function App() {
//   const test = ()=>{
//     alert()
//   }
//   return (
//     <div>
//       <p>React js</p>
//       <button onClick={test}>test</button>
//     </div>
//   );
// }


// Hin dzev

// class App extends Component{
//   test = ()=>{
//     alert()
//   }
//   render(){
//     return(
//       <div>
//       <p>React js</p>
//       <button onClick={this.test}>test</button>
//       </div>
//     )
//   }
// }

// Sa petq e grel
// export default App;


// React Das 2

// import './App.css';
// import someFunc,{months as arr} from './test.js';

// console.log(arr);

// someFunc()


// function App() {
//   return (
//     <div>
//       <p>React js</p>
//     </div>
//   );
// }

// export default App;



// Espes menq sax popoxakanner@ kgcenq ,i obyeqti mej
// import * as say from './test.js';

// sranov erkrord barov popoxakan ksarkenq u arajini infon kqcenq mej@
// import {months as arr,testUser as user} from './test.js';




// import './App.css';
// import MyForm from './components/MyForm';

// function App() {
//   return (
//     <div>
//       <p>React js</p>
//       <MyForm />
//     </div>
//   );
// }

// export default App;


//                            React Das 3


// knopkeq

// import './App.css';
// import MyForm from './components/MyForm';
// import MyButton from './components/MyButton';

// function App() {

//   const onSave = (text) => {
//     alert(text)
//   }

//   const onClose = (text) => {
//     alert(text)
//   }

//   return (
//    <>
//     <div>
//       <p>React js</p>
//     </div>
//       <MyForm />
//       <MyButton title={'Save'} handleClick={onSave}/>
//       <MyButton title={'Close'} handleClick={onClose}/>
//    </>


//   );
// }

// export default App;


//                   dinamik knopkeq


// import './App.css';
// import MyForm from './components/MyForm';
// import MyButton from './components/MyButton';

// function App() {

//   let con = true

//   const arr = ['a','b','c','d','e']

//   const onSave = (text) => {
//     alert(text)
//   }

//   const onClose = (text) => {
//     alert(text)
//   }

//   return (
//   <>
//     <div>
//       <p>React js</p>
//     </div>


//                 {/* es masivovc menq map metodov list erinq */}


//       {/* sik e erkar dzevn e nuyn bani */}

//       {/* {
//         arr.map((item, index)=>{
//           return(
//             <p key={index.toString()}>{item}</p>
//           )
//         })
//       } */}


//       {/* esel karch dzevn e eli nuyn bani   */}

//       {/* {
//       arr.map((item, index) => <p key={index.toString()}>{item}</p>)
//       } */}

             
//              {/* kstugenq ete true tpe ete che urish@ kam vochinch */}



//     {/* {con ? <MyForm /> :  <MyButton title={'Save'} handleClick={onSave} test={true}/>} sa ktpe ete true arajin@,ete che erkrord@ */}
//     {/* {con ? <MyForm /> :  null} sa ktpe tunn,ete tru chka vochinch */}
//     {/* {con && <MyForm />} sa menak trun ktpe  */}
     
//       <MyForm />
//       <MyButton title={'Save'} handleClick={onSave} test={true}/>
//       <MyButton title={'Close'} handleClick={onClose} test={false}/>
//   </>


//   );
// }

// export default App;



//                                                 // Reackt das 4



//                                                 // useState sa gradaranic qashsac funkcia e



// import {useState} from 'react';
// import './App.css';
// import MyButton from './components/MyButton';
// import Counter from './Counter';
                                                
// function App() {
// const [count, setCount] = useState(10);
                                                
// const changeCount = ()=>{
//   setCount(count + 1);
//  }
                                                
// return (

//   <div>
//     <MyButton title={'+'} handleClick={changeCount} />
//     <Counter count={count}/>
//   </div>
                                                
//  );
// }
                                                
// export default App;



// arajadranq amen 10 erord tiv@ karmir tpe



// import {useState} from 'react';
// import './App.css';
// import MyButton from './components/MyButton';
// import Counter from './Counter';
                                                
// function App() {
// const [list, setList] = useState([1, 2, 3, 4, 5]);
                                                
// const changeList = ()=>{
//   setList([...list, list.at(-1) + 1]);
//  }
                                                
// return (

//   <div>
//       <MyButton title={'+'} handleClick={changeList}/>
//       {
//         list.map((item,index)=> <p style={{color: item%10?'black':'red'}} key ={index.toString()}>{item}</p>)
//       }
//   </div>
                                                
//  );
// }
                                                
// export default App;



// arajadranq. petqe nshelu jamanak infon pahe kam chpahe

// import './App.css';
// import MyLogin from './components/MyLogin';


// function App() {
//   return (
//     <>
//       <div>
//         <p>React js</p>
//       </div>
// <MyLogin />
//     </>
    
//   );
// }



// export default App;


// React Das 5
// Arajadranq id ov nkar gtnel


import './App.css';
import MyList from './components/MyList';


function App() {
  return (
    <>
      <div>
        <p>React js</p>
      </div>
      <MyList />
    </>
    
  );
}



export default App;