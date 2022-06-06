import { __ } from '@wordpress/i18n';
import { 
  useBlockProps, 
  useInnerBlocksProps,
  BlockControls, } from '@wordpress/block-editor';
import "./index.css"

export default function Edit(props) {

  const ALLOWED_BLOCKS = ['core/heading' , 'core/paragraph'];

  const MY_TEMPLATE = [
    [ 'core/heading', { placeholder: 'Box Heading', className: "text-24 font-bold mb-1" } ],
    [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque explicabo illo ad necessitatibus praesentium nulla magnam ab, quidem ipsam, pariatur eius cum. Laborum dolorem magnam corrupti nam dolore? Aspernatur, repellat.' } ],
  ];
  
  const BlockProps = useBlockProps({
    className: 'box-default bg-light-grey p-2 height-full'
  });

  // init innerBlocksProps
  const innerBlocksProps = useInnerBlocksProps( {}, 
    {
      allowedBlocks: ALLOWED_BLOCKS,
      template: MY_TEMPLATE,
    }
  );

  return (
    <div {...BlockProps}>
      <BlockControls></BlockControls>
      <div {...innerBlocksProps}>
        {innerBlocksProps.children}  
      </div>
    </div>
  );
}