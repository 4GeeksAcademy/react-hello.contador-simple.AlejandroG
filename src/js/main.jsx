import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


const reactRender = ReactDOM.createRoot(document.getElementById('root'));

// Configuración inicial
let counter = 0;
const alertAt = 10; // Cambia este número si quieres alertar en otro segundo
const initialSeconds = 0;
const countdown = false; // Cambia a true para modo regresivo

let running = true;

// Funciones de control
function startTimer() {
    return setInterval(() => {
        if (running) {
            if (countdown) {
                counter--;
                if (counter <= 0) running = false;
            } else {
                counter++;
            }

            if (counter === alertAt) {
                alert(`¡Has llegado a ${alertAt} segundos!`);
            }

            reactRender.render(
                <React.StrictMode>
                    <Home counter={counter} />
                </React.StrictMode>
            );
        }
    }, 1000);
}

let timer = startTimer();

// ⏸ Pausar, ▶️ Reanudar, 🔄 Reiniciar
window.pauseTimer = () => { running = false; };
window.resumeTimer = () => { running = true; };
window.resetTimer = () => {
    counter = initialSeconds;
    running = true;
    reactRender.render(
        <React.StrictMode>
            <Home counter={counter} />
        </React.StrictMode>
    );
};