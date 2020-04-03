import React from "react";
import WorkElement from './MyWork';

const WorkList = ({workData}) => {
    return (workData.map((user, i) => {
        return <WorkElement 
        key={i} 
        id={workData[i].id} 
        dataType={workData[i].dataType} 
        image={workData[i].image} 
        title={workData[i].title} 
        description={workData[i].description} 
        />
    })

    );
}

export default WorkList;