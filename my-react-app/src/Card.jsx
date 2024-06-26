import profilePic from './assets/dog.png'

function Card(){

  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="dog picture"></img>
      <h2 className="card-title">Cane</h2>
      <p className="card-text">I study CS</p>
    </div>
  );


}

export default Card