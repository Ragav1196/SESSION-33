import './App.css';
import { CreatingNavBar } from './CreatingNavBar';

export default function App() {
 
  return (    
    <CreatingNavBar />    
  );
}

// TO CREATE MOCK API
  // Create new project(if already created skip first step) => give name for the project =>
    // select new resource => enter resource name => in schema add all the keys that are there in your data(data that you want to add to the mock api) and mention there data type
    // Convert object data u have into JSON format(save the object into a variable in console of chrome and do the "JSON.stringify(variable)")method on the variable and that gives JSON data copy the excluding the starting and ending single quotation(u can check if it is JSON format are not in any JSON validater from google)    
    // Now select create button in mock api => after creating select data nearby the resource and copy the JSON data that we have and select updtae


// LIFE CYCLE OF COMPONENT
  // PPT PRESENTATION REFERNCE => https://docs.google.com/presentation/d/1uR-8qJO68ltk3AHfrLEWTShHgU-biZE_CSpJEXcTph4/edit?usp=sharing

  // Component has four phases,

  // Initializatio
    // here the component is created

  // Mounting
    // here the component sits on the DOM after creation (rendering)

  // Updation
    // updation happens during the time like when either the state is change or the prop is changed      

  // Unmounting
    // here the component is removed from the DOM(like during the conditional rendering when the component is removed from the DOM and rendered based on the condition and also like during the routing when we change the url the component may get destroyed and rerendered back if we go to the same url back)


// SOME CLASS COMPONENTS LIFE CYLCE METHOD
  // These method only work in class components not in function component
  // but now we have equavalent to these methods in function components itself

  // INITIALIZATION
    // setup props and state

  // MOUNTING
    // componentWillMount
      // this helps to have a access before the component is going to mount on the DOM
        // like console logging or something        
    // componentDidMount
      // after the component is mounted and rendered on the page we have a acess to do something same like console logging      

  // UPDATION
    // PROPS
      // componentWillReceiveProps
        // access to it before receiving props
      // shouldComponentUpdate
        // any change in props returns true or else false
      // componentWillUpdate
        // access to it before updating
      // componentDidUpdate
        // access to it after updating

    // STATES
      // shouldComponentUpdate
        // when the state gets changed we return true and execute other components and if there is no changes then it return false and nothing happens
      // componentWillUpdate
        // access to it before updating
      // componentDidUpdate
        // access to it after updating

  // UNMOUNTING
      // componentWillUnmount
        // same like "componentWillMount"
          // before unmounting we access to it
        // here we dont have "componentDidMount" this is because the component is destroyed already and we dont have any more access to it

// USEEFFECT HOOK
  // we have so many life cycle methods in class components but in function component we have only one hook equavalent to all these life cycle methods  
  // useeffect take in two argumemnts one in callback function and another is dependencies array
  // if we are not giving dependencies array then call back function will be called every time when there is any updation in states or props
  // if we give dependecies array then the call back funciton will be called only when the dependencied changes

  // CONT FROM "ButtonForMovies => USEEFFECT HOOK"

  


  // DOUBT 1:
          // why the call back functioin is called initially 6 times
    