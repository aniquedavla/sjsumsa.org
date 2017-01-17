var React = require('react');
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import {cyan300} from 'material-ui/styles/colors';

const bgColor = {
    backgroundColor: cyan300,
};

const leftAlign = {
    textAlign: 'left',
    color: 'white'
};

const fullWidth = {
    width: '100%'
};

const whiteColor = {
    color: 'white'
};

const buttonStyle = {
    marginTop: '20px',
    color: 'white'
};
const blackColor = {
    color: 'black'
};

export default class Contact extends React.Component {

    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({value});

    render () {

        return (
            <Paper className="section" style={bgColor} rounded={false} id="contact">
                <h1 className="headingStyle1 white">CONTACT</h1>
                <div>
                    <div id="contact-form" className="alignTop">
                        <form>
                            <TextField
                                fullWidth={true}
                                floatingLabelText="Name"
                                style={whiteColor}
                            /><br />
                            <SelectField style={leftAlign} fullWidth={true}
                                         floatingLabelText="Category"
                                         value={this.state.value}
                                         onChange={this.handleChange}
                                         menuItemStyle={blackColor}
                            >
                                <MenuItem value={1} primaryText="Suggestion" />
                                <MenuItem value={2} primaryText="Event invitation" />
                                <MenuItem value={3} primaryText="Question" />
                                <MenuItem value={4} primaryText="Housing" />
                                <MenuItem value={5} primaryText="Donation" />
                                <MenuItem value={6} primaryText="Website bug/typo" />
                                <MenuItem value={7} primaryText="Other" />
                            </SelectField>
                            <br />

                            <TextField fullWidth={true}
                                       floatingLabelText="E-mail"
                                        style={whiteColor}
                            /><br />
                            <TextField style={leftAlign}  fullWidth={true}
                                       multiLine={true}
                                       rows={4}
                                       rowsMax={4}
                                       floatingLabelText="Message"
                            /><br />
                        </form>
                        <FlatButton label="Submit" style={buttonStyle} />
                    </div>

                    <div id="social" className="alignTop alignLeft">
                        <h4 className="white">Find us on social media</h4>
                        <i className="fa fa-facebook white hvr-grow "></i>
                        <i className="fa fa-instagram white hvr-grow"></i>
                    </div>
                </div>
            </Paper>
        );
    }
}

