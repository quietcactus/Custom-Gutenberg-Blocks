import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('kt-blocks/box-border-top', {
  edit: Edit,
  save,
});
