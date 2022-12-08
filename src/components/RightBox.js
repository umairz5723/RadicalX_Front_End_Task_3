import "./styles/rightbox.css"
import { AiFillCloseCircle, AiOutlineClose , AiOutlinePlusSquare } from "react-icons/ai";



function RightBox(props) {
    const added = ["Technology", "Development"];
    const recommendedRoles = ["Fullstack Developer", "Backend Developer"];

    return <div>
         <div className={props.tab === 1 ? "right-box-category" : "none"}> 
            <p className="right-box-titles"> Categories </p>
            <input type="text" className="right-box-location-search" placeholder="Search Category"></input>
            
            <div className="added-list">
            {added.map((added) => (
                <div className="added-item"> <p>{added}</p> <AiFillCloseCircle color="#7B61FF" /></div>
            ))}
            </div>
         </div>
         
         <div className={props.tab === 2 ? "right-box-description" : "none"}>
            <p className="right-box-titles">Description</p>
              <textarea className="right-box-description-text" placeholder="Description" style={{resize:"none"}}></textarea> 
          </div>

          <div className={props.tab === 3 ? "right-box-location" : "none"}> 
            <p className="right-box-titles">Location</p>
            <input type="text" className="right-box-location-search" placeholder="Search"></input>
          </div>

          <div className={props.tab === 4 ? "right-box-benefits" : "none"}> 
            <p className="right-box-titles">Benefits</p>
            <textarea className="right-box-benefits-text" placeholder="Description" style={{resize:"none"}}></textarea>
          </div>

          <div className={props.tab === 5 ? "right-box-intro-video" : "none"}> 
            <p className="right-box-titles">Intro Video</p>
            <div className="right-box-intro-file-upload"> Drag n drop to upload your video</div>
            <div className="right-box-intro-added"> Intro Video.mp4 <AiOutlineClose/></div>
          </div>

          <div className={props.tab === 6 ? "right-box-mentor-details" : "none"}> 
            <p className="right-box-titles">Mentor Details</p>
            <div className="mentor-details-avatar"> </div>
                <div className="mentor-details-inputs">
                    <input type="text" className="mentor-details-input" placeholder="Name" ></input>
                    <input type="text" className="mentor-details-input" placeholder="Email address" ></input>
                </div>
            <input type="text" className="mentor-details-input-linkedin" placeholder="LinkedIn URL (optional)"></input>
        </div>
          
          <div className={props.tab === 7 ? "right-box-recommended-roles" : "none"}> 
            <p className="right-box-titles">Recommended Roles</p>
            <input type="text" className="input-search-box" placeholder="Recommended Roles"></input>
            <div className="added-list">
            {recommendedRoles.map((recommendedRoles) => (
                <div className="added-item"> <p>{recommendedRoles}</p> <AiFillCloseCircle color="#7B61FF" /></div>
            ))}
            </div>
            
          </div>

          <div className={props.tab === 8 ? "right-box-web-links" : "none"}> 
            <p className="right-box-titles">Web Links & Resources</p>
            <input type="text" className="input-search-box" placeholder="Add URL"></input>
            <div className="web-link-added-tab" > <AiOutlinePlusSquare color="#7B61FF" /> Add URL </div>
          </div>
    </div>
            
}

export default RightBox;