import React from 'react';
import {
    VerticalTimeline, 
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className='vertical-timeline-element--education' 
                date="2008 - 2012"
                iconStyle={{background: "rgb(235, 150, 24)", color: "#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className='vertical-timeline-element-title'>BSc (Hons) Business Management</h3>
                    <p className='vertical-timeline-element-subtitle'>University of Ulster</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work' 
                date="2008 - 2016"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<WorkIcon />}>
                    <h3 className='vertical-timeline-element-title'>Financial Advisor</h3>
                    <p className='vertical-timeline-element-subtitle'>Royal Bank of Canada</p>
                </VerticalTimelineElement> 
                <VerticalTimelineElement className='vertical-timeline-element--education' 
                date="2014 - 2015"
                iconStyle={{background: "rgb(235, 150, 24)", color: "#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className='vertical-timeline-element-title'>Professional Financial Planner</h3>
                    <p className='vertical-timeline-element-subtitle'>Canadian Securities Institute</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work' 
                date="2016 - 2018"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<WorkIcon />}>
                    <h3 className='vertical-timeline-element-title'>Branch Manager</h3>
                    <p className='vertical-timeline-element-subtitle'>Royal Bank of Canada</p>
                </VerticalTimelineElement> 
                <VerticalTimelineElement className='vertical-timeline-element--work' 
                date="2018 - 2020"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<WorkIcon />}>
                    <h3 className='vertical-timeline-element-title'>Commercial Account Manager</h3>
                    <p className='vertical-timeline-element-subtitle'>Royal Bank of Canada</p>
                </VerticalTimelineElement> 
                <VerticalTimelineElement className='vertical-timeline-element--education' 
                date="2023"
                iconStyle={{background: "rgb(235, 150, 24)", color: "#fff"}}
                icon={<SchoolIcon />}>
                    <h3 className='vertical-timeline-element-title'>Full Stack Web Development</h3>
                    <p className='vertical-timeline-element-subtitle'>University of Toronto</p>
                </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
    );
}

export default Experience;