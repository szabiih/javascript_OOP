/**
 * 
 */

class SelectManager{
    /**
     * @type {number}
     */
    #questionNumber;

    /**
     * @type {QuestionType[]}
     */
    #questions;

    /**
     * @type {boolean[]}
     */
    #questionAnswers;

    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;

    /**
     * @type {FinishCallback}
     */
    #finishCallback;

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions){

    }

    /**
     * @returns {void}
     */
    play(){

    }

    /**
     * @returns {void}
     */
    reset(){

    }

    /**
     * 
     * @param {boolean} answer 
     * @returns {void}
     */
    nextQuestion(answer){

    }

    /**
     * @param {NextQuestionCallback} value
     */
    set nextQuestionCallback(value){
        this.#nextQuestionCallback = value;
    }

    /**
     * @param {FinishCallback} value
     */
    set finishCallback(value){
        this.#finishCallback = value;
    }
}

export {SelectManager}