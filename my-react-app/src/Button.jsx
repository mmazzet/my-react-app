
function Button(){

  //const handleClick = () => console.log("OUCH!");
  //const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  // return(<button onClick={() => handleClick2("Cane")}>Click me 😍</button>);

  // let count = 0;
  // const handleClick = (name) => {
  //   if(count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   }
  //   else{
  //     console.log(`${name} stop clicking me!`);
  //   }
  // };
  // return(<button onClick={() => handleClick("Cane")}>Click me 😍</button>);

  // EVENT PARAMETER

  const handleClick = (e) => e.target.textContent = "Ouch 😭 ";
  return(<button onDoubleClick={(e) => handleClick(e)}>Click me 😍</button>);
}

export default Button