export default class Player{

    constructor(){

    }

    // constructor(name, cards,card_count_text,click_card) {
    //     this._player_turn = false;
    //     this._player_remains = true;
    //     this._name = name;
    //     this._cards = cards;
    //     this._card_count_text = card_count_text;
    //     this._click_card = click_card;
    // }


    get click_card() {
        return this._click_card;
    }

    set click_card(value) {
        this._click_card = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get cards() {
        return this._cards;
    }

    set cards(value) {
        this._cards = value;
    }

    get player_turn() {
        return this._player_turn;
    }

    set player_turn(value) {
        this._player_turn = value;
    }

    get player_remains() {
        return this._player_remains;
    }

    set player_remains(value) {
        this._player_remains = value;
    }

    get card_count_text() {
        return this._card_count_text;
    }

    set card_count_text(value) {
        this._card_count_text = value;
    }

    get cursor() {
        return this._cursor;
    }

    set cursor(value) {
        this._cursor = value;
    }
}

