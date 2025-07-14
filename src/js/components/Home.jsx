

import { FaClock } from "react-icons/fa";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ counter }) => {
    return (
        <div className="text-center mt-5">
            <h1><FaClock /> {counter < 0 ? 0 : counter}</h1>
            <div className="btn-group mt-3">
                <button className="btn btn-warning" onClick={() => pauseTimer()}>Pausar</button>
                <button className="btn btn-success" onClick={() => resumeTimer()}>Reanudar</button>
                <button className="btn btn-danger" onClick={() => resetTimer()}>Reiniciar</button>
            </div>
        </div>
    );
     
};
export default Home;