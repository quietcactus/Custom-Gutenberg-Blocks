import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('kt-blocks/box-default', {
  edit: Edit,
  save,
});
