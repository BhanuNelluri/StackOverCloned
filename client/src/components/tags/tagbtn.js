import React, { useEffect } from 'react';
import './tagbtn.css';
import { useHistory } from 'react-router';
import { getQuestionsBySearch } from '../../actions/questions';
import { useDispatch } from 'react-redux';
import { updateTag } from '../../actions/tags';

const Tagbtn = ({ name, update }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (update)
            dispatch(updateTag({ name }));
    }, [name])

    return (
        <span onClick={() => {
            dispatch(getQuestionsBySearch({ search: "none", tags: name }));
            history.push(`/questions?tags=${name || "none"}`);
        }} class="tagSkill">{name}</span>
    );
}

export default Tagbtn;
