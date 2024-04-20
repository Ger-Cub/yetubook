import { Link } from "react-router-dom"
import "./leftbar.css"

//Components..................
import CurrentUser from "../../FackApis/CurrentUserData"


//Icon Image.........................
import Ai from '../../assets/icon/brain.png'
import Firend from '../../assets/icon/1.png'
import Groups from '../../assets/icon/2.png'
import Market from '../../assets/icon/3.png'
import watch from '../../assets/icon/4.png'
import Gallery from '../../assets/icon/5.png'
import Videos from '../../assets/icon/6.png'
import Message from '../../assets/icon/7.png'

export default function LeftBar () {
    return (
        <div className="leftBar">
            <div className="left-container">
                <div className="menu">

                    <Link to='/profile/id'>
                        <div className="user">
                            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
                            <h4>Gerard Cubaka</h4>
                        </div>
                    </Link>

                    <Link to='/chatgpt'>
                        <div className="item">
                            <div className="Ai"><img src={Ai} alt="" /></div>
                            <h4>YetuGPT</h4>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="item">
                            <div className="Ai"><img src={Firend} alt="" /></div>
                            <h4>Marafiki</h4>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="item">
                            <div className="Ai"><img src={Groups} alt="" /></div>
                            <h4>Vikundi</h4>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="item">
                            <div className="Ai"><img src={Market} alt="" /></div>
                            <h4>Soko</h4>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="item">
                            <div className="Ai"><img src={watch} alt="" /></div>
                            <h4>Angalia</h4>
                        </div>
                    </Link>

                   
                </div>

                <hr/>

                <div className="menu">
                <h4 className="others">Njia zako za mkato</h4>

                    <Link to='/'>
                        <div className="item">
                            <div className="Ai"><img src={Gallery} alt="" /></div>
                            <h4>Michezo</h4>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="item">
                            <div className="Ai"><img src={Videos} alt="" /></div>
                            <h4>Sapoti</h4>
                        </div>
                    </Link>

                    <Link to='/chatbox/id'>
                        <div className="item">
                            <div className="Ai"><img src={Message} alt="" /></div>
                            <h4>Ujumbe</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}