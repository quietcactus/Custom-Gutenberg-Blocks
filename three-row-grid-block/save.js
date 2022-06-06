import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( {attributes} ) {

  const BlockProps = useBlockProps.save({
    className: 'py-50px'
  });
  
  const blockStyle = {
		backgroundImage: attributes.mediaUrl
	};

  // console.log(attributes)

  return (
    <section {...BlockProps} data-urls="testing" style={{backgroundImage: `url(${attributes.mediaUrl})`}}> 
      <div className="px-2">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 bg-cover bg-no-repeat"  data-url={attributes.mediaUrl} style={blockStyle}>
            <InnerBlocks.Content />
          </div>
        </div>
      </div>
    </section>
  );
}
