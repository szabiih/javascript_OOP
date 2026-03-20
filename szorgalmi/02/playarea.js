class PlayArea{
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @type {SelectManager}
     */
    #manager;

    /**
     * 
     * @param {HTMLElement} parent 
     */
    replaceContent(parent){

    }

    get manager(){
        return this.#manager;
    }

    get div(){
        return this.#div;
    }
}

export {PlayArea}