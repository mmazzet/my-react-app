import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MyComponent2 from './MyComponent2.jsx'
import ColorPicker from './ColorPicker.jsx'
import MyComponent3 from './MyComponent3.jsx'
import MyComponent4 from './MyComponent4.jsx'
import MyComponent5 from './MyComponent5.jsx'
import ToDoList from './ToDoList.jsx'
import MyComponent6 from './MyComponent6.jsx'
import MyComponent7 from './MyComponent7.jsx'


function App() {

  const fruits = [{id: 1, name:"apple", calories: "aaple"}, 
                  {id: 2, name:"orange", calories: 45}, 
                  {id: 3, name:"banana", calories: 105 },
                  {id: 4, name:"coconut", calories: 159}, 
                  {id: 5, name:"pinapple", calories: 37}]

  const vegetables = [{id: 6, name:"potatoes", calories: 110}, 
                      {id: 7, name:"celery", calories: 15}, 
                      {id: 8, name:"carrots", calories: 25 },
                      {id: 9, name:"corn", calories: 63 }, 
                      {id: 10, name:"broccoli", calories: 50}]

  return(
    <>
      <MyComponent7 />
      <hr></hr>  
      <hr></hr>
      <MyComponent6 />
      <hr></hr>  
      <hr></hr>
      <ToDoList />
      <hr></hr>  
      <hr></hr>
      <MyComponent5 />
      <hr></hr>  
      <hr></hr>
      <MyComponent4 />
      <hr></hr>  
      <hr></hr>
      <MyComponent3 />
      <hr></hr>
      <ColorPicker />
      <hr></hr>
      <MyComponent2 />
      <Counter />
      <hr></hr>
      <MyComponent />
      <Button />
      <ProfilePicture />
      <UserGreeting isLoggedIn={false} username="Cane"/>
      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null }
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null } */}
      {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
      <Card />
      <Card />
      <Card />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Larry"/>
    </>
  );

}

export default App
