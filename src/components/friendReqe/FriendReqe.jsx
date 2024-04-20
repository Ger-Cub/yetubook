import './friendReqe.css';
import {Link} from "react-router-dom"

// FackApis...................
import FriendReqData from "../../FackApis/FirendReqData"

export default function FriendReqe (){
    return (
        <div className='Friend-Request'>
            <h4>Ombi la urafiki</h4>

            {
                FriendReqData.map(friend=>(
                    <div className="request">
                        <Link to='/profile/id'>
                            <div className="info" key={friend.id}>
                                <div className="user">
                                    <img src={friend.img} alt='' />
                                    <h5>{friend.name}</h5>
                                </div>
                                <div className='info-name'>                                    
                                    <p>{friend.info}</p>
                                </div>
                            </div>
                        </Link>

                        <div className="action">
                            <button className='btn btn-primary'>Itika</button>
                            <button className='btn btn-red'>Kataa</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}