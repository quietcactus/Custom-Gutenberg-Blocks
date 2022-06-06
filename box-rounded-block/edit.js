import { __ } from '@wordpress/i18n';
import { 
  useBlockProps, 
  useInnerBlocksProps,
  BlockControls
} from '@wordpress/block-editor';
import "./index.css"

export default function Edit() {

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
      className: 'single-box bg-light-grey p-2 rounded-1 height-full'
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
    <div {...BlockProps}>
      <BlockControls></BlockControls>
      <div {...innerBlocksProps}>
        {innerBlocksProps.children}  
      </div>
    </div>
  );
}