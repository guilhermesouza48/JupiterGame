import React, { useEffect } from 'react';
import './allStyle.css';

const Tabelas = props => {
    const arrayItem = props.items;

    useEffect(() => {
        getLlinhas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getLlinhas() {
        const sorted = arrayItem
        sorted.sort((aux1, aux2) => {
            return aux2.score - aux1.score;
        })
        // eslint-disable-next-line array-callback-return
        return sorted.map((item, i) => {
            if (i < 5) {
                return (
                    <>
                        <tr className={i % 2 === 0 ? "par" : "impar"} key={i}>
                            <td> {item.JOGADOR} </td>
                            <td className="tbright"> {item.score} pts </td>
                        </tr>
                    </>
                )
            }
        })

    }


    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th>JOGADOR</th>
                        <th>SCORE</th>
                    </tr>
                </thead>
                <tbody>
                    {getLlinhas()}
                </tbody>
            </table>
        </div>
    )
}

export default Tabelas;