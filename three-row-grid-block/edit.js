import { __ } from '@wordpress/i18n';
import { 
  useBlockProps, 
  useInnerBlocksProps,
  BlockControls,
  InspectorControls
} from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import SelectBackgroundImage from '../components/SelectBackgroundImage';
import "./index.css";
import { useState } from 'react';

export default function Edit( {attributes, setAttributes} ) {
  
  // Set allowed blocks
  const ALLOWED_BLOCKS = ['kt-blocks/box-default', 'kt-blocks/box-rounded'];
  
  // Set template
  const MY_TEMPLATE = [
    [ 'kt-blocks/box-default', {} ]
  ];
  
  // init BlockProps
  const BlockProps = useBlockProps();
  
  // init innerBlockProps
  const innerBlocksProps = useInnerBlocksProps( 
    { 
      className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 bg-cover bg-no-repeat' 
    },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: MY_TEMPLATE
    }
  );

  const ALLOWED_MEDIA_TYPES = [ 'image '];

  return (
    <div {...BlockProps}>
      <BlockControls/>
      <SelectBackgroundImage attributes={attributes} setAttributes={setAttributes} />
      <div {...innerBlocksProps}>
        {innerBlocksProps.children}
      </div>
    </div>
  );
}