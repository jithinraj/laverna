/**
 * @module components/notebooks/list/views/ItemView
 */
import Mn from 'backbone.marionette';
import _ from 'underscore';
import ModelFocus from '../../../../behaviors/ModelFocus';

/**
 * Item view. Views like Notebook.js and Tag.js extend from this.
 *
 * @class
 * @extends Marionette.View
 * @license MPL-2.0
 */
export default class ItemView extends Mn.View {

    get className() {
        return 'list--group list-group';
    }

    /**
     * Behaviors.
     *
     * @see module:behaviors/ModelFocus
     * @returns {Array}
     */
    behaviors() {
        return [ModelFocus];
    }

    /**
     * Return options and model attributes.
     *
     * @returns {Object}
     */
    serializeData() {
        return _.extend({}, this.options, this.model.attributes);
    }

}
