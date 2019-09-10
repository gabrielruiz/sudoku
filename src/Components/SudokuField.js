import React, {Component} from 'react';

class SudokuField extends Component {

    handleChange = (e) => {
        const value = (e.target.value !== '') ? parseInt(e.target.value, 10) : null;
        this.props.onChange({...this.props.field, value});
    }

    render(){
        const {field} = this.props;
        
        return (
            <input className="field" value={(field.value || '')} readOnly={field.readonly} onChange={this.handleChange}/>
        );
    }
}

export default SudokuField;