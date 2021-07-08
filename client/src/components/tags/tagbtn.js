import React from 'react';
import './tagbtn.css';
import { useHistory } from 'react-router';
import { getQuestionsBySearch } from '../../actions/questions';
import { useSelector, useDispatch } from 'react-redux';
import { updateTag } from '../../actions/tags';

const Tagbtn = ({ name }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    dispatch(updateTag({ name }))
    return (
        <span onClick={() => {
            dispatch(getQuestionsBySearch({ search: "none", tags: name }));
            history.push(`/questions?tags=${name || "none"}`);
        }} class="tagSkill">{name}</span>
    );
}

export default Tagbtn;
