import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    h1: {
        color: 'red'
    }
});

export default function Page({id, options, count, color, data}) {
    return <MyWonderfulComponent id={id}
                                 options={options}
                                 count={count}
                                 color={color}
                                 data={data}>I'm text from a component
        <br/>
        <span>{data.text}</span>
    </MyWonderfulComponent>
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/test`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

function MyWonderfulComponent({id, options, children, other = 0}) {
    //
    const [summ, setSumm] = useState(other);
    const classes = useStyles();

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
