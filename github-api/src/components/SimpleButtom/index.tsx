import './style.css';


type Props = {
    texto: string;
}

const SimpleButtom = ({texto}: Props) => {
    return (
        <div className="btn-container">
            <button className='btn btn-primary'>
                <p>{texto}</p>
            </button>
        </div>
    );
};

export default SimpleButtom;