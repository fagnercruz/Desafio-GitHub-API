import Resultcard from 'components/Resultcard';
import Searchcard from 'components/Searchcard';
import './style.css';

const Results = () => {
    return (
        <div className='container'>
            <Searchcard />
            <Resultcard />
        </div>
    );
};

export default Results;