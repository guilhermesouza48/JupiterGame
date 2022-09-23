import React from 'react';
import './allStyle.css';

const Tabelas = props => {
    let arrayItem = [];
    function getLlinhas() {
        arrayItem = props.items;

        arrayItem.sort((aux1, aux2) => {
            return aux1.JOGADOR.localeCompare(aux2.JOGADOR);
        })

        return arrayItem.map((item, i) => {
            return (
                <tr className={i % 2 === 0 ? "par" : "impar"} key={i}>
                    <td className="tbCenter"> {i + 1} </td>
                    <td>{item.JOGADOR} </td>
                    <td className="tbright"> {item.score} pontos </td>
                </tr>
            )
        })
    }

    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Nome</th>
                        <th>Pontos</th>
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