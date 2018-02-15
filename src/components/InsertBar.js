import React, { Component } from 'react'

class InsertBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        e.stopPropagation()
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        this.setState({
            value: ''
        })
        this.props.onInsert(this.state.value)
    }

    render() {
        return (
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-lg-8" style={{ marginTop: '30px' }}>
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Insert into structure" value={this.state.value} onChange={this.onChange}/>
                    <span className="input-group-btn">
                        <button className="btn btn-success" type="button" onClick={this.onSubmit}>Insert!</button>
                    </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InsertBar