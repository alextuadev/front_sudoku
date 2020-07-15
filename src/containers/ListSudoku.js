import React, { Component } from 'react'
import axios from 'axios'
import { URL } from '../api'
import API from '../api';

class ListSudoku extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            final: [],
            all_sudokus: [],
            showDetails: false,
            sudokuFinal: []
        }
    }

    async getAllSudokus() {
        fetch(`${URL}api/results`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((response) => response.json())
            .then((bodyJson) => {
                console.log(bodyJson)
                this.setState({ all_sudokus: bodyJson })
            })
            .catch((err, code) => {
                console.log(err);
                console.log(err.code);
            });
    }

    async getSingle(item) {
        fetch(`${URL}api/single/${item.id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((response) => response.json())
            .then((bodyJson) => {
                console.log(bodyJson)
                let final = [];
                let aux = [];
                let data = JSON.parse(bodyJson.response)
                data.map(function (item, index) {
                    if ((index + 1) % 9 == 0) {
                        aux.push(item)
                        final.push(aux)
                        aux = [];
                    } else {
                        aux.push(item)
                    }
                });

                let sudokuFinal = [];
                sudokuFinal = JSON.parse(bodyJson.sudoku)


                this.setState({ results: bodyJson, final: final, sudokuFinal: sudokuFinal, showDetails: true })
            })
            .catch((err, code) => {
                console.log(err);
                console.log(err.code);
            });
    }

    async componentDidMount() {
        this.getAllSudokus();
    }




    render() {
        const that = this;
        return (
            <div>
                <div>
                    <h2>Sudoku list</h2>

                    {this.state.all_sudokus.map(function (item, index) {
                        return <li key={index} >
                            <a href="#" onClick={() => that.getSingle(item)}> {item.name}</a>
                        </li>

                    })
                    }
                </div>

                {this.state.showDetails &&
                    <div>
                        <h2>Sudoku</h2>
                        <table>
                            <tbody>
                                {this.state.sudokuFinal.map(function (item, index) {
                                    return <tr key={index}>
                                        {item.map(function (item, index) {
                                            return <td key={index}>
                                                {item == 0 ? '  ' : item}
                                            </td>
                                        })
                                        }
                                    </tr>
                                })
                                }
                            </tbody>
                        </table>


                        <h2>Respuesta</h2>
                        <table>
                            <tbody>
                                {this.state.final.map(function (item, index) {
                                    return <tr key={index}>
                                        {item.map(function (item, index) {
                                            return <td key={index}>
                                                {item}
                                            </td>
                                        })
                                        }
                                    </tr>
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                }

            </div>
        )
    }


}

export default ListSudoku