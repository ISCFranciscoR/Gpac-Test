'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Talent extends Model {
    static get table() {
        return 't_talents';
    }

    static get primaryKey() {
        return 'id';
    }

    static get createdAtColumn() {
        return null;
    }

    static get updatedAtColumn() {
        return null;
    }
}

module.exports = Talent