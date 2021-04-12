import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    h1: {
        color: 'red'
    }
});

export default function Page(props) {
    const {id, options, count, color, data} = props;
    return <MyWonderfulComponent id="id"
                                 options="options"
                                 count="count"
                                 color="color"
                                 data="data">I'm text from a component</MyWonderfulComponent>
}

function MyWonderfulComponent(props) {
    const {id, options, children, other} = props;
    const [summ, setSumm] = useState(other);
    const classes = makeStyles({
        h1: {
            color: 'red'
        }});

    useEffect(() => {
        if (id && options && options.params && options.params.fields && options.params.fields.isDynamic) {
            setSumm(summ + 1);
        }
    }, []);

    console.log(summ);

    return (
        <>
            <h1 className={classes.h1}>Hello World!</h1>
            <Grid>
                <Grid item={true} xs={12}>{children}</Grid>
            </Grid>
        </>
    );
    // так же можно использовать <React.Fragment> или <div> в качестве обертки для элементов
}
