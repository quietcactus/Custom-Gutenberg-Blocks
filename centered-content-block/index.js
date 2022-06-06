import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('kt-blocks/centered-content-block', {
  edit: Edit,
  save: function() {
    return null;
  }
});
