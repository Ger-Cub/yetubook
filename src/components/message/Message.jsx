import "./message.css"
import {Link} from "react-router-dom"

//FackApis...............................
import MessageData from "../../FackApis/MessageData"

//FontAwesome Icon.......................
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Message (){
    return(
        <div className="Messages">
            <div className="message-top">
                <h4>YetuSapp <FontAwesomeIcon icon={faPhone} /></h4>
                <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="message-search">
                <FontAwesomeIcon icon={faSearch} />
                <input type="search" placeholder="Tafuta Ujumbe"/>
            </div>
            <div className="border-div"></div>

            {
                MessageData.map(mess=>(
                    <Link to="/chatbox">
                        <div className="message" key={mess.id}>
                            <div className="user">
                                <img src={mess.img} alt="" />
                                <div className="green-active"></div>
                            </div>
                            <div className="message-body">
                                <h5>{mess.name}</h5>
                                <p className="para">{mess.mText}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}