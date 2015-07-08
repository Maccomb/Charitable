<?php 

/**
 * Charitable Recipients Functions. 
 * 
 * @package     Charitable/Functions/Recipients
 * @version     1.0.0
 * @author      Eric Daams
 * @copyright   Copyright (c) 2014, Studio 164a
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License  
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Registers a recipient type.
 *
 * @param   string  $recipient_type
 * @param   array   $args
 * @return  void
 * @since   1.0.0
 */
function charitable_register_recipient_type( $recipient_type, $args = array() ) {
    return Charitable_Recipient_Types::get_instance()->register( $recipient_type, $args );
}

/**
 * Returns the registered recipient types.
 *
 * @return  array
 * @since   1.0.0
 */
function charitable_get_recipient_types() {
    return Charitable_Recipient_Types::get_instance()->get_types();
}