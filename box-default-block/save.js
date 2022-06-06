import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {

  const BlockProps = useBlockProps.save({
    className: 'bg-light-grey p-2'
  });
  
  return (
    <div {...BlockProps}>
      <InnerBlocks.Content />
    </div>
  );
}