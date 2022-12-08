import "./styles/leftbox.css";
import { useState } from "react";
import { AiOutlineCaretRight, AiOutlinePlusCircle} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import RightBox from "./RightBox";

function LeftBox(){

    const [showTab, setShowTab] = useState(0);
      
    const handleTab = (e) => {
         setShowTab(e);
      }
   

    return <div>
    <div id="left-box">
          
          <div className="left-box-frame">
              <FaBars/> 
          <button onClick={()=> handleTab(1)} > <div className={showTab === 1 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Category</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(2) }> <div className={showTab === 2 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Description</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(3) }> <div className={showTab === 3 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Location</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(4) }> <div className={showTab === 4 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Benefits</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(5) }> <div className={showTab === 5 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Intro Video</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(6) }> <div className={showTab === 6 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Mentor Details</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(7) }> <div className={showTab === 7 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Recommended Roles</p> <AiOutlineCaretRight/> </div> </button>
           </div>
           
           <div className="left-box-frame">
              <FaBars/> 
              <button onClick={()=> handleTab(8) }> <div className={showTab === 8 ? "left-box-frame-content2" : "left-box-frame-content"}> <p>Web Links & Resources</p> <AiOutlineCaretRight/> </div> </button>
           </div>
          
          <div className="assessment-frame"> <AiOutlinePlusCircle/> Add More</div>
      </div>
      

{ // --------------------- RIGHT HAND SIDE OF WEBPAGE CONDITIONAL RENDERING ---------------------------------------------------------------------------------------------------------------------------
}
      <div id="right-box"> <RightBox tab = {showTab}/> </div>
    
    </div>
}

export default LeftBox;