import React from 'react'
import {useParams} from 'react-router-dom'
import studyData from '../data/data.json'

export default function StudyCase() {

    const {studySlug} = useParams();
    const data = studyData.find(data => data.slug === studySlug);

    return (
        <div>
            <h2>{data.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
    )
}