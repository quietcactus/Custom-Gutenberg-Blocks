import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {

  const BlockProps = useBlockProps.save({
    className: 'py-50px'
  });
  
  return (
    <section {...BlockProps}>
      <div className='px-2'>
        <div className='container max-w-screen-lg mx-auto text-center'>
          <InnerBlocks.Content />
        </div>
      </div>
    </section>
  );
}