( function( blocks, element, blockEditor, components, serverSideRender, i18n ) {
	var el = element.createElement;
	var __ = i18n.__;
	var InspectorControls = blockEditor.InspectorControls;
	var PanelBody = components.PanelBody;
	var SelectControl = components.SelectControl;
	var ServerSideRender = serverSideRender;

	blocks.registerBlockType( 'ucf/weather', {
		title: __( 'UCF Weather', 'ucf-weather' ),
		description: __( 'Displays the current weather using the UCF Weather service.', 'ucf-weather' ),
		icon: 'cloud',
		category: 'widgets',
		attributes: {
			feed: { type: 'string', default: 'default' },
			layout: { type: 'string', default: 'default' },
			theme: { type: 'string', default: 'default' }
		},

		edit: function( props ) {
			var attributes = props.attributes;

			return el(
				element.Fragment,
				null,
				el(
					InspectorControls,
					null,
					el(
						PanelBody,
						{ title: __( 'Weather Settings', 'ucf-weather' ), initialOpen: true },
						el( SelectControl, {
							label: __( 'Feed', 'ucf-weather' ),
							value: attributes.feed,
							options: [
								{ label: __( 'Current (Default)', 'ucf-weather' ), value: 'default' },
								{ label: __( 'Today', 'ucf-weather' ), value: 'today' },
								{ label: __( 'Extended', 'ucf-weather' ), value: 'extended' }
							],
							onChange: function( value ) {
								props.setAttributes( { feed: value } );
							}
						} ),
						el( SelectControl, {
							label: __( 'Theme', 'ucf-weather' ),
							value: attributes.theme,
							options: [
								{ label: __( 'Default', 'ucf-weather' ), value: 'default' }
							],
							onChange: function( value ) {
								props.setAttributes( { theme: value } );
							}
						} ),
						el( SelectControl, {
							label: __( 'Layout', 'ucf-weather' ),
							value: attributes.layout,
							options: [
								{ label: __( 'Default', 'ucf-weather' ), value: 'default' }
							],
							onChange: function( value ) {
								props.setAttributes( { layout: value } );
							}
						} )
					)
				),
				el( ServerSideRender, {
					block: 'ucf/weather',
					attributes: attributes
				} )
			);
		},

		// Server-rendered block; no markup is saved to post content.
		save: function() {
			return null;
		}
	} );
} )(
	window.wp.blocks,
	window.wp.element,
	window.wp.blockEditor || window.wp.editor,
	window.wp.components,
	window.wp.serverSideRender,
	window.wp.i18n
);
