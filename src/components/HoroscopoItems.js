import React from 'react'

export const HoroscopoItems = (signo) => {

    console.log(signo);
    return (
        <>
            <div className="card" style={{ width:'17rem', flexGrow:4, flexShrink:3, margin:'5px' }}>
                <img style={{ width: '108px',
                            maxWidth:'108px',
                            margin: 'auto',
                            boxShadow: '0px 0px 3px rgb(111, 176, 215)',
                            borderRadius:'112px',
                            padding: '4px', 
                            marginTop: '14px'
                        }} 
                     src={`img/${signo.nombre}.png`} className="card-img-top" alt={signo.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{signo.nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{signo.fechaSigno}</h6>
                    <p className="card-text"><span>Amor :</span> {signo.amor}</p>
                    <p className="card-text"><span>Dinero :</span> {signo.dinero}</p>
                    <p className="card-text"><span>Salud :</span> {signo.salud}</p>
                    <p className="card-text"><span>Numero :</span> {signo.numero}</p>
                    <p className="card-text"><span>Color :</span> {signo.color}</p>
                </div>
            </div>
        </>
    );
};
