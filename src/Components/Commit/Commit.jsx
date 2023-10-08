import "./Commit.css"
import Card from "./Cards";

const Commit = () => {
  return (
    <>
    <div >
    <div className="my-5">
      <h1 className="text-center font-bold" >Our Commitments</h1>
    </div>

    <div className="fgh" >
      <div className="Container">
      <div className="Container-f">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Raj4G_20yMNhUJkAEAupzZELKad8ICQxPQ&usqp=CAU"/>
           <h5> 24/7 support</h5>
           </div>
          
      </div>
      <div className="Container-g">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Raj4G_20yMNhUJkAEAupzZELKad8ICQxPQ&usqp=CAU"/>
           <h5> User-Friendly Design</h5>
      </div>
      <div className="Container-h">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Raj4G_20yMNhUJkAEAupzZELKad8ICQxPQ&usqp=CAU"/>
           <h5> Responsive Design</h5>
      </div>
    </div>
    </div>
    </>
  )
}

export default Commit;