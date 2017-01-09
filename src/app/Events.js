/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import {cyan300} from 'material-ui/styles/colors';

var Events = React.createClass({
    render: function () {
        const bgColor = {
            backgroundColor: cyan300,
        }

        return (
            <div className="section with-shadow" style={bgColor}>
                <h1 className="headingStyle1">EVENTS</h1>
                <p className="section-text">The MSA of San Jose State University is dedicated to building an awesome environment of brotherhood and
                    sisterhood on campus through social, religious, interfaith educational and outreach events.
                    Our goal is to promote the true, balanced message of Islam within ourselves and to the general public by being
                    the best possible Muslims we can be in terms of our manners, morale characters, and worship. We hope to achieve
                    this inshallah through following the Qur’an and example of the Prophet Muhammad (peace be upon him)
                </p>
            </div>
        );
    }
})

module.exports = Events;