import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('kt-blocks/box-rounded', {
  edit: Edit,
  save,
});
