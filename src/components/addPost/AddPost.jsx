import './addPost.css';


//Components..................
import Stories from "../../components/stories/Stories"

//Fack Apis...................
import CurrentUserData from '../../FackApis/CurrentUserData'

// FontAwesome icon..............
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function AddPost() {
    return (
        <form className='postForm'>

            <div className="user form-top">
                <Link to="/profile/id">
                    <img src={CurrentUserData.map(user => (user.ProfieImage))} alt='' />
                </Link>
                <input type='text' placeholder='Nini mpya ?' />
                <button type='submit' className='btn btn-primary'>Posti</button>
            </div>

            <div className="post-categories">
                <label htmlFor='file'>
                    <input type='file' id='file' />
                    <span><FontAwesomeIcon icon={faImage} /> Picha</span>
                </label>
                <label htmlFor='file'>
                    <input type='file' id='file' />
                    <span><FontAwesomeIcon icon={faVideo} /> Video</span>
                </label>
                <span><FontAwesomeIcon icon={faTags} /> Vitambulisho</span>
                <span><FontAwesomeIcon icon={faSmile} /> Hisia</span>
            </div>
        </form>
    )
}