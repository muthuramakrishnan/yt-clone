import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action';
import './_categoriesBar.scss';

const keywords = [
    'All',
    'React js',
    'Angular js',
    'Sivaangi',
    'api',
    'blacksheep',
    'tamil songs',
    'hotstar',
    'Node',
    'Bootstrap',
    'Sema Bruh',
    'nakkalites',
    'Behindwoods',
    'Jump cuts',
    'c4etech',
    'c4etech Tamil',
    'Way2Go'
]
const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All');
    const dispatch = useDispatch();

    const handleClick = (value) => {
        setActiveElement(value);
        if(value==='All') dispatch(getPopularVideos());
        else dispatch(getVideosByCategory(value));
    }
    return (
        <div className="categoriesBar">
            {
                keywords.map((value,i)=>(
                    <span key={i} onClick={() => handleClick(value)} className={activeElement === value? 'active': ''}>
                        {value}
                    </span>
                ))
            }
        </div>
    )
}

export default CategoriesBar
