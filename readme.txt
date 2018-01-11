=== UCF Weather Shortcode ===
Contributors: ucfwebcom
Tags: ucf, weather, shortcode
Requires at least: 4.5.3
Tested up to: 4.7.3
Stable tag: 1.0.1
License: GPLv3 or later
License URI: http://www.gnu.org/copyleft/gpl-3.0.html

Provides a shortcode for displaying weather from the UCF weather service.


== Description ==

Provides a shortcode for displaying weather from the UCF weather service.


== Installation ==

= Manual Installation =
1. Upload the plugin files (unzipped) to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the "Plugins" screen in WordPress
3. Configure settings at Settings > UCF Weather.

= WP CLI Installation =
1. `$ wp plugin install --activate https://github.com/UCF/UCF-Weather-Shortcode/archive/master.zip`.  See [WP-CLI Docs](http://wp-cli.org/commands/plugin/install/) for more command options.
2. Configure settings at Settings > UCF Weather.


== Changelog ==

= 1.0.1 =
Bug Fixes:
* Removed `is_plugin_active()` check in `ucf-weather.php` and replaced with `class_exists()` check to prevent errors when `wp-admin/includes/plugin.php` is not loaded.

= 1.0.0 =
* Initial release

== Upgrade Notice ==

n/a


== Installation Requirements ==

None


== Development & Contributing ==

NOTE: this plugin's readme.md file is automatically generated.  Please only make modifications to the readme.txt file, and make sure the `gulp readme` command has been run before committing readme changes.

