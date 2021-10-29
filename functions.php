<?php

if ( ! defined('_S_VERSION')) {
    define('_S_VERSION', '1.0.0');
}

if ( ! function_exists('travel4friends_setup')) :
    function travel4friends_setup()
    {
        
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        
        register_nav_menus(
            array(
                'header-menu' => esc_html__('Header', 'travel4friends'),
                'footer-menu' => esc_html__('Footer', 'travel4friends'),
            )
        );
        
        add_theme_support(
            'html5',
            array(
                'gallery',
                'caption',
                'style',
                'script',
            )
        );
        
    }
endif;
add_action('after_setup_theme', 'travel4friends_setup');

/**
 * Enqueue scripts and styles.
 */
function travel4friends_scripts()
{
    wp_enqueue_style('travel4friends-style', get_stylesheet_uri(), array(), _S_VERSION);
}

add_action('wp_enqueue_scripts', 'travel4friends_scripts');