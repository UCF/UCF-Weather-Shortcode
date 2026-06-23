<?php
/**
 * Handles registering and rendering the weather block.
 * Reuses the same backend code as the shortcode.
 **/
if ( ! class_exists( 'UCF_Weather_Block' ) ) {
	class UCF_Weather_Block {
		/**
		 * Registers the block type and its editor assets.
		 * @author Jim Barnes
		 * @since 1.1.2
		 **/
		public static function register_block() {
			// Bail if the block editor isn't available.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			wp_register_script(
				'ucf-weather-block',
				UCF_WEATHER__SCRIPT_URL . '/ucf-weather-block.js',
				array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-server-side-render', 'wp-i18n' ),
				false,
				true
			);

			register_block_type( 'ucf/weather', array(
				'editor_script'   => 'ucf-weather-block',
				'attributes'      => array(
					'feed'   => array(
						'type'    => 'string',
						'default' => 'default',
					),
					'layout' => array(
						'type'    => 'string',
						'default' => 'default',
					),
					'theme'  => array(
						'type'    => 'string',
						'default' => 'default',
					),
				),
				'render_callback' => array( 'UCF_Weather_Block', 'callback' ),
			) );
		}

		/**
		 * Renders the block. Mirrors the shortcode callback so both
		 * share the same backend rendering logic.
		 * @author Jim Barnes
		 * @since 1.1.2
		 *
		 * @param $atts Array | Block attributes
		 * @return string | The markup to be displayed.
		 **/
		public static function callback( $atts ) {
			$atts = wp_parse_args( $atts, array(
				'feed'   => 'default',
				'layout' => 'default',
				'theme'  => 'default',
			) );

			return UCF_Weather_Common::display_weather( $atts );
		}
	}
}
?>
