import React, { useState, useEffect } from 'react';

import './allStyle.css';
import Tabela from '../components/Global';
import Tabelinha from '../components/Tops';
import { Api } from '../api/api';

export default function Dash() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getApi();
    }, []);

    async function getApi() {

        const NewArray = await Api();
        setData(NewArray);

    }

    return (
        
            <div className="main">

                <div className="dashboard">

                    <h1>Classificação</h1>

                    <Tabela items={data} />

                    <h3>TOP 5 Jogadores</h3>

                    <Tabelinha items={data} />

                    <div className="buttons">
                        <button onClick={() => getApi()} className="btn"><span>Atualizar</span></button>
                        <a
                            href="https://peppy-mooncake-90e2ac.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn1">
                            <span>PLAY GAME</span>
                        </a>
                    </div>

                </div>

            </div>
        
    )
}