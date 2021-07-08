import React, { useEffect, useState } from 'react';
import './Questions.css';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question/Question';
import { getTag } from '../../actions/tags';
import handleSorting from '../../services/handleSorting';

export default function Questions({ searchQuery, tags }) {
    const { questions } = useSelector((state) => state.questions);
    const { total } = useSelector((state) => state.questions);
    const dispatch = useDispatch();
    const tag = useSelector((state) => state.tags.tag);
    const [sortType, setSortType] = useState('Newest');


    useEffect(() => {
        if (tags) {
            dispatch(getTag(tags));
        }
    }, [tags])

    return (
        <div className="QuestionsContainer">
            <div className="QuestionsNav">
                {tags && <div className="QuestionsHeader">
                    Questions tagged [{tags}]
                </div>
                }
                {searchQuery && <div className="QuestionsHeader">
                    Search Results for [{searchQuery}]
                </div>}
                {(!tags && !searchQuery) && (<div className="QuestionsHeader">
                    All Questions
                </div>)}

                <div className="navBtn">
                    <a className="btn btn-success" href="/newQuestion">Ask Question</a>
                </div>
            </div>
            {tags && <div className="tagContent">{tag && tag[0].body}</div>}
            <div className="QuestionBar">

                <div className="totalQuestions">{(tags || searchQuery) ? (questions && questions.length) : total} questions</div>
                <div class="tagsSortbtns btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" onClick={() => setSortType('Newest')} class="newest btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                    <label class="btn btn-outline-success fw-bold" for="btnradio1">Newest</label>

                    <input type="radio" onClick={() => setSortType('Top')} class="top btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                    <label class="btn btn-outline-success fw-bold" for="btnradio2">Top</label>

                    <input type="radio" onClick={() => setSortType('Oldest')} class="oldest btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                    <label class="btn btn-outline-success fw-bold" for="btnradio3">Oldest</label>
                </div>
            </div>
            {questions && questions.sort(handleSorting(sortType)).map((question) => (
                <div key={question._id} className="QuestionsContent">
                    <Question key={question._id} question={question} />
                </div>
            ))
            }
        </div>
    )
}
