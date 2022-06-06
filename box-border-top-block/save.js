import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( {attributes} ) {

  const BlockProps = useBlockProps.save({
    className: 'p-2 rounded-0.75 border border-light-grey border-t-dark-grey border-t-8 bg-light-grey'
  });
  
  return (
    <div {...BlockProps} style={{borderColor: attributes.borderColor, backgroundColor: attributes.backgroundColor}}>
      <InnerBlocks.Content />
    </div>
  );
}