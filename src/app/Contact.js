var React = require('react');
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {cyan300} from 'material-ui/styles/colors';

const bgColor = {
    backgroundColor: '#e70e19',
};

export default class Contact extends React.Component {

    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({value});

    render () {

        return (
            <Paper className="section" style={} rounded={false}>
                <h1 className="headingStyle1">CONTACT</h1>
                <div id="contact-form">
                    <form>
                        <TextField
                            hintText="Name"
                            floatingLabelText="Name"
                        /><br />
                        <SelectField
                            floatingLabelText="Frequency"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </SelectField>
                        <br />
                        <TextField
                            hintText="Hint Text"
                            floatingLabelText="Floating Label Text"
                        /><br />
                        <TextField
                            hintText="Hint Text"
                            floatingLabelText="Floating Label Text"
                        /><br />
                        <TextField
                            hintText="Hint Text"
                            floatingLabelText="Floating Label Text"
                        /><br />

                    </form>
                </div>
            </Paper>
        );
    }
}

