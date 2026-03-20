/**
 * @callback TableCallback
 * @param {Author[]} authorList
 * @returns {void}
 * 
 * @callback AddElementResultCallback
 * @param {string} resultMessage
 * @returns {void}
 * 
 * @callback ImportResultCallback
 * @param {string} resultMessage
 * @returns {void}
 */

class AuthorManager{
    //                                                      Privát mezők
    /**
     * @type {Author[]}
     */
    #authorList;

    /**
     * @type {TableCallback}
     */
    #tableCallback;

    /**
     * @type {AddElementResultCallback}
     */
    #addElementResultCallback;

    /**
     * @type {ImportResultCallback}
     */
    #importResultCallback;

    //                                                      Konstruktor
    constructor(){
        this.#authorList = [];
    }

    //                                                      Függvények
    /**
     * 
     * @param {import(".").AuthorType} element
     */
    addElement(element){
        const author = new Author();
        author.id = this.#authorList.length;
        author.name = element.author;
        author.work = element.work;
        author.concept = element.concept;
        this.#authorList.push(author);
        if (author.validate()){
            this.#authorList.push(author);
            this.#addElementResultCallback('sikeres elem felvétel');
        }
        else{
            this.#addElementResultCallback('sikerestelen elem felvétel');
        }
    }

    /**
     * 
     * @param {import(".").AuthorType} elementList 
     * @returns {void}
     */
    addElementList(elementList){
        for (const elem of elementList){
            const author = new Author();
            author.id = this.#authorList.length;
            author.name = elem.author;
            author.concept = elem.concept;
            author.work = elem.work;
            if (author.validate()){
                this.#authorList.push(author);
                this.#importResultCallback('Sikeres volt a file feltöltés.');
            }
            else{
                this.#importResultCallback('Nem volt sikeres a file feltöltés.');
                break;
            }
        }
    }

    /**
     * 
     * @returns {void}
     */
    getAllElement(){
        this.#tableCallback(this.#authorList);
    }

    /**
     * @returns {void}
     */
    getExportContent(){
        const result = [];
        for (const author of this.#authorList){
            result.push(`${author.name};${author.work};${author.concept}`);
        }
        return result.join('\n');
    }

    //                                                  Getter / Setter fg.
    /**
     * @param {TableCallback} value
     */
    set tableCallback(value){
        this.#tableCallback = value;
    }

    /**
     * @param {AddElementResultCallback} value
     */
    set AddElementResultCallback(value){
        this.#addElementResultCallback = value;
    }

    /**
     * @param {ImportResultCallback} value
     */
    set importResultCallback(value){
        this.#importResultCallback = value;
    }
}

class Author{
    //                                                      Privát mezők
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {string}
     */
    #name;

    /**
     * @type {string}
     */
    #work;

    /**
     * @type {string}
     */
    #concept;

    //                                                  Getter / Setter fg.
    get id(){
        return this.id;
    }

    set id(value){
        this.#id = value;
    }

    get name(){
        return this.#name;
    }

    set name(value){
        this.#name = value;
    }

    get work(){
        return this.#work;
    }

    set work(value){
        this.#work = value;
    }

    get concept(){
        return this.#concept;
    }

    set concept(value){
        this.#concept = value;
    }

    /**
     * 
     * @returns {boolean}
     */
    validate(){
        return this.#id >= 0 && this.#name && this.#concept && this.#work;
    }
}

export {AuthorManager}