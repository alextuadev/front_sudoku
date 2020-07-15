import React, { Component } from 'react'
import '../App.css';
import Columns from '../components/Columns'
import API from '../api';


class CreateSudoku extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            columns: [],
            data_array: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ rows: [0, 1, 2, 3, 4, 5, 6, 7, 8] })
    }

    handleInput = e => {
        console.log(e)
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    async handleSubmit(event) {
        console.log('A name was submitted: ', this.state);
        event.preventDefault();

        const response = await API.solveSudoku(this.state)
        console.log(response)
        if (response) {
            console.log("exito")
        }
        else {
            console.log("quebhraod")
        }
    }

    updateHandleInput(data) {
        const data_array = this.state.data_array.concat(data.state_array);
        this.setState({ data_array: data_array })
        console.log(this.state.data_array)
    }

    render() {
        const that = this;
        return (<div>
            <form onSubmit={this.handleSubmit}>

                <input type="text" name="name" onChange={this.handleInput}/> 
                <table className="table">
                    <tbody> {
                        this.state.rows.map(function (itemRow, indexRow) {
                            return <tr key={indexRow}>
                                <Columns
                                    updateModalParentState={that.updateHandleInput.bind(that)}
                                    itemRow={indexRow}
                                />
                            </tr>
                        })
                    } </tbody>
                </table>

                <input type="submit" value="Solve" />

            </form>
        </div>
        )
    }
}

export default CreateSudoku