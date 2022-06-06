import { __ } from '@wordpress/i18n';
import { 
  useBlockProps, 
  useInnerBlocksProps,
  BlockControls,
  InspectorControls
} from '@wordpress/block-editor';
import { 
  ColorPicker,
  Panel,
  PanelBody,
  BaseControl } from '@wordpress/components';
import "./index.css"

import SelectBorderColor from "../components/SelectBorderColor";
import SelectBackgroundColor from "../components/SelectBackgroundColor"

export default function Edit( {attributes, setAttributes} ) {

  // Set allowed blocks
  const ALLOWED_BLOCKS = ['core/heading' , 'core/paragraph', 'core/button'];

  // Set template
  const MY_TEMPLATE = [
    [ 'core/heading', { placeholder: 'Box Heading', className: "text-24 font-bold mb-1" } ],
    [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque explicabo illo ad necessitatibus praesentium nulla magnam ab, quidem ipsam, pariatur eius cum. Laborum dolorem magnam corrupti nam dolore? Aspernatur, repellat.' } ]
  ];

  // init BlockProps
  const BlockProps = useBlockProps(
    {
      className: 'p-2 rounded-0.75 border border-light-grey border-t-dark-grey border-t-8 height-full bg-light-grey'
    }
  );

  // init innerBlocksProps
  const innerBlocksProps = useInnerBlocksProps( {}, 
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: MY_TEMPLATE,
    }
  );

  return (
    <div {...BlockProps} style={{borderColor: attributes.borderColor, backgroundColor: attributes.backgroundColor}}>
      <BlockControls></BlockControls>
      <InspectorControls>
        <SelectBorderColor attributes={attributes} setAttributes={setAttributes} />
        <SelectBackgroundColor attributes={attributes} setAttributes={setAttributes} />
      </InspectorControls>
      <div {...innerBlocksProps}>
        {innerBlocksProps.children}  
      </div>
    </div>
  );
}