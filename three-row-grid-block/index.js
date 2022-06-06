import { registerBlockType } from '@wordpress/blocks';
//  import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* All files containing `style` keyword are bundled together. The code used
* gets applied both to the front of your site and to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/

import './style.css';

import Edit from './edit';
import save from './save';
 
registerBlockType('kt-blocks/grid-block-3-col', {
  edit: Edit,
  save,
});