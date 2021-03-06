import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function AccordionMaterial(props) {
    const classes = useStyles();
    const [disabled, setDisabled]= React.useState(props.disabled ? props.disabled : false);

    return (
        <div
            // className={classes.root}
        // style={{width:'98%', margin:'1%'}}
        >
            <Accordion
                disabled={disabled}
                defaultExpanded={props.positionFrom0 == 0 ? true : false}
                // defaultExpanded={false}
                className="accordion"
            >
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="accordionTitlesWrappers"
                    style={{}}
                    // onClick={() => setDisabled(true)}
                    // load data for this specific quiz using props.data -> check context first if loaded already, use RESTService, update context data
                >
                    {/*<Typography className={classes.heading}>{props.head}</Typography>*/}
                    {/*<Typography className={classes.heading}></Typography>*/}
                    {props.head}
                </AccordionSummary>
                <AccordionDetails>
                    {/*<Typography>*/}
                        {props.body}
                    {/*</Typography>*/}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
