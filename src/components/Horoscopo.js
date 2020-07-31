import React, { useState, useEffect } from 'react';
import { getHoroscopo } from '../services/getHoroscopo';
import { HoroscopoItems } from './HoroscopoItems';

export const Horoscopo = () => {


    const filtroSignos = ['Aries','Acuario', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpión', 'Sagitario', 'Capricornio','Piscis'];

    const [signos, setsignos] = useState({
        fecha: '',
        signos: []
    });


    useEffect(() => {
        const data = getHoroscopo();
        data.then(data => {
            setsignos({
                fecha: data.titulo,
                signos: Object.values(data.horoscopo)
            })
        })

    }, []);

    return (
        <>
            <h2 className='text-center text-info mt-4'>Horoscopo</h2>
            <h6 className='text-primary' style={{ marginLeft:'6px' }}>Fecha: {signos.fecha}</h6> 
            <hr />

            <div className='animate__animated animate__fadeInDownBig animate__delay-1s' style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around' }}>
                {
                    signos.signos.map(signo => (
                        (filtroSignos.includes(signo.nombre)) &&
                        <HoroscopoItems key={signo.nombre} {...signo} />
                    ))
                }
            </div>
        </>
    );
};
