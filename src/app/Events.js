/**
 * Created by Abdellatif on 1/9/2017.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
var key = 0;

export default class Events extends React.Component{
    getKey(){
        key++;
        return key;
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    reverseExpand(expanded){
        return !expanded;
    }
    handleReduce = () => {
        this.setState({expanded: false});
    };

    componentWillMount(){
        var database = firebase.database();
        var eventsRef = database.ref().root;
        eventsRef.on('value', snap => {
            var events = Object.values(snap.val());
            this.setState({
                events: events,
            })
        })
    }
    /*
     const aboutRef = firebase.database().ref('About');
     aboutRef.on('value', snap => {
     this.setState({
     about: snap.val()
     });
     })
     */
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            expanded: false,
        }
    }

    render() {

        const archiveStyle = {
            marginTop: 20,
        };


        const titleStyle = {
            fontSize: '160%',
            textTransform: 'uppercase'
        };

        const titleStyle2 = {
            fontSize: '120%',
        };

        const subtitleStyle = {
            color: '#ababab'
        };

        const imgStyle = {
            width: '100%',
            height: '180%'
        };

        const cardStyle = {
            textAlign: 'left',
        };

        const cardTextStyle = {
            // color: '#000',
        };

        const cardTextExpanded = false;

        var events = this.state.events.map(event =>
            <div className="cardTest alignTop" key={this.getKey()}>
                <Card style={cardStyle} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                        title={event.title} titleStyle={titleStyle}
                        subtitle={event.type} subtitleStyle={subtitleStyle}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <img src={event.pictureURL} style={imgStyle}/>
                    <CardText style={cardTextStyle} expandable={true}>
                        {event.description}
                    </CardText>
                    <CardTitle title={event.dayAndTime} subtitle={event.locationAndDate} titleStyle={titleStyle2} subtitleStyle={subtitleStyle} />
                    <CardActions>
                        <FlatButton label="Description" primary={true} onTouchTap={this.handleExpand}/>
                        <FlatButton label="RSVP" secondary={true}/>
                    </CardActions>
                </Card>
            </div>
        );


        return (
            <Paper className="section" rounded={false} zDepth={1} id="events">
                <h1 className="headingStyle1">EVENTS</h1>
                <div>
                    {events}
                </div>
                <FlatButton label="Events Archive" style={archiveStyle}/>
            </Paper>
        );
    }
};

