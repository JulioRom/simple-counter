import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

const Application = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [mode, setMode] = useState("progressive"); // Modo del contador: "progressive" o "countdown"
    const [alertTime, setAlertTime] = useState(null); // Tiempo para mostrar la alerta

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (mode === "countdown") {
                    if (prev <= 0) {
                        setIsRunning(false); // Detiene el contador si llega a 0
                        return 0;
                    }
                    return prev - 1;
                }
                return prev + 1; // Incremento normal
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, mode]);

    // Mostrar una alerta al alcanzar el tiempo especificado
    useEffect(() => {
        if (alertTime !== null && seconds === alertTime) {
            alert(`¡Has alcanzado ${alertTime} segundos!`);
        }
    }, [seconds, alertTime]);

    // Funciones de control
    const resetCounter = () => setSeconds(0);
    const stopCounter = () => setIsRunning(false);
    const resumeCounter = () => setIsRunning(true);
    const startCountdown = (time) => {
        setSeconds(time);
        setMode("countdown");
        setIsRunning(true);
    };
    const startProgressive = () => {
        setMode("progressive");
        setIsRunning(true);
    };
    const setAlert = (time) => setAlertTime(time);


    return (
        <div className="container text-center py-5">
            <h1>Simple Counter</h1>

            {/* Contador visual */}
            <SecondsCounter seconds={seconds} />

            {/* Controles */}
            <div className="mt-3">
                <button className="btn btn-primary mx-1" onClick={resumeCounter}>
                    Resume
                </button>
                <button className="btn btn-warning mx-1" onClick={stopCounter}>
                    Stop
                </button>
                <button className="btn btn-danger mx-1" onClick={resetCounter}>
                    Reset
                </button>
            </div>

            {/* Configuración de cuenta progresiva */}
            <div className="mt-4">
                <h3>Cuenta Progresiva</h3>
                <button
                    className="btn btn-info mx-1"
                    onClick={startProgressive}
                >
                    Start Progressive
                </button>
            </div>

            {/* Configuración de cuenta regresiva */}
            <div className="mt-4">
                <h3>Cuenta Regresiva</h3>
                <button
                    className="btn btn-info mx-1"
                    onClick={() => startCountdown(10)} // Inicia cuenta regresiva desde 10
                >
                    Countdown 10s
                </button>
                <button
                    className="btn btn-info mx-1"
                    onClick={() => startCountdown(30)} // Inicia cuenta regresiva desde 30
                >
                    Countdown 30s
                </button>
            </div>

            {/* Configuración de alertas */}
            <div className="mt-4">
                <h3>Alerta al alcanzar un tiempo</h3>
                <button
                    className="btn btn-success mx-1"
                    onClick={() => setAlert(10)} // Configura alerta para 10 segundos
                >
                    Alert at 10s
                </button>
                <button
                    className="btn btn-success mx-1"
                    onClick={() => setAlert(20)} // Configura alerta para 20 segundos
                >
                    Alert at 20s
                </button>
            </div>
        </div>
    );
};

export default Application;
