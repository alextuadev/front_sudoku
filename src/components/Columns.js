import React, { Component } from 'react'
import '../App.css';


class Columns extends Component {

    constructor(props) {
        super(props);

        this.state = {
            state_array: [{ x: '', y: '', value: '' }]
        }

    }
    componentDidMount() {
        console.log(this.props)

    }

    updateModalParentState(data) {
        this.props.updateModalParentState(data);
    }

    handleInput = e => {
        /*console.log('x', e.target.dataset.x)
        console.log('y', e.target.dataset.y)
        console.log('value', e.target.value)*/

        let elem = new Object();
        elem.x = e.target.dataset.x
        elem.y = e.target.dataset.y
        elem.value = e.target.value
        console.log("Object moment", elem)
        const state_array = this.state.state_array.concat(elem);

        this.updateModalParentState({ state_array: elem });

    };

    render() {
        const col = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        const that = this;
        return (
            col.map(function (itemColumn, indexColumn) {
                return <td key={indexColumn} >
                    <input className="smallInput" onChange={that.handleInput}
                        type="text"
                        name="positionBox[]"
                        data-x={that.props.itemRow}
                        data-y={indexColumn}
                    />
                </td>

            })
        )
    }
}


export default Columns