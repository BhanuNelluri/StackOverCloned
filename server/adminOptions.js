
import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';

AdminBro.registerAdapter(AdminBroMongoose)


import User from '../models/users.js';
import Tag from '../models/tags.js';
import Answer from '../models/answers.js';
import Comment from '../models/comments.js';
import Question from '../models/question.js';


const options = {
    resource: [User, Tag, Answer, Comment, Question],
};

module.export = options;