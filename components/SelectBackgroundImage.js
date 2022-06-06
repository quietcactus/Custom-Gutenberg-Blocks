import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { Button, PanelBody, ResponsiveWrapper } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

const SelectBackgroundImage = (props) => {

  /**
   * Pull out attributes and setAttributes function from props and make them usuable on their own,
   * Otherwise will have to use props.attributes.mediaId for example
   */ 
  const { attributes, setAttributes } = props;

  // console.log(attributes.mediaId);

  // console.table(props.media);

  const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}

  const removeMedia = () => {
    props.setAttributes({
      mediaId: 0,
      mediaUrl: ''
    });
  }

  // console.log(props.mediaUrl);

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title="Select block background image" initialOpen={ true }>
          <div className="editor-post-featured-image">
            <MediaUploadCheck>
 
              <MediaUpload onSelect={onSelectMedia} value={attributes.mediaId} allowedTypes={ ['image'] }
                render={({open}) => (
                  <Button className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'} onClick={open} >
                    { attributes.mediaId == 0 && 'Choose an image' }
                    {props.media != undefined && 
                      <ResponsiveWrapper naturalWidth={ props.media.media_details.width } naturalHeight={ props.media.media_details.height } >
                        <img src={props.media.source_url} />
                      </ResponsiveWrapper>
                    }
                  </Button>
                )} 
              />
            </MediaUploadCheck>
            {/* Replace Button */}
            {attributes.mediaId != 0 && 
              <MediaUploadCheck>
                <MediaUpload
                  title={__('Replace image', 'awp')}
                  value={attributes.mediaId}
                  onSelect={onSelectMedia}
                  allowedTypes={['image']}
                  render={({open}) => (
                    <Button onClick={open} isDefault isLarge>{__('Replace image', 'awp')}</Button>
                  )}
                />
              </MediaUploadCheck>
            }
            {/* Remove Image Button */}
            {attributes.mediaId != 0 && 
              <MediaUploadCheck>
                <Button onClick={removeMedia} isLink isDestructive>Remove Image</Button>
              </MediaUploadCheck>
            }
          </div>
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}

export default withSelect((select, props) => {
  return { 
    media: props.attributes.mediaId != 0 ? select('core').getMedia(props.attributes.mediaId) : undefined 
  };
})(SelectBackgroundImage);