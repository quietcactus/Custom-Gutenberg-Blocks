import { ColorPicker, Panel, PanelBody, BaseControl } from '@wordpress/components';

/**
 * Color Selector Inspector Control.
 * 
 * @param {object} props - Contains attributes and setAttribute function of the current block
 * 
 * @returns The selected color by updating the attribute above
 */
const SelectBorderColor = (props) => {

  /**
   * Pull out attributes and setAttributes function from props and make them usuable on their own,
   * Otherwise will have to use props.attributes.mediaId for example
   */ 
  const { attributes, setAttributes } = props;

  const onColorChange = (color) => {
    console.log(color)
    setAttributes({ borderColor: color })
  }

  return (
    <Panel>
      <PanelBody title="Border Color">
        <BaseControl label="Select Border Color">
          <ColorPicker
            color={attributes.borderColor}
            onChange={onColorChange}
            copyFormat="hex"
          />
        </BaseControl>
      </PanelBody>
    </Panel>
  );
}

export default SelectBorderColor;