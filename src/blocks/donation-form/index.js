import CharitableDonationFormBlock from './block';
import icon from './icon';

const { __ } = wp.i18n;
const { RawHTML } = wp.element;
const { registerBlockType } = wp.blocks;

registerBlockType( 'charitable/donation-form', {
    /**
     * The block title.
     */
    title : __( 'Donation Form', 'charitable' ),

    /**
     * Block description.
     */
    description: __( 'Display a campaign\'s donation form.', 'charitable' ),

    /**
     * Type of block. This controls where it will be found in the block UI.
     */
    category : 'widgets',

    /**
     * Block icon.
     */
    icon: icon,

    /**
     * Keywords used to find the block.
     */
    keywords: [
        __( 'Donate', 'charitable' ),
        __( 'Charitable' ),
    ],

    /**
     * Block attributes.
     */
    attributes: {
        /**
         * The campaign for the donation form.
         */
        campaign : {
            type: 'string',
            default: '',
        },

        /**
		 * Whether the block is in edit or preview mode.
		 */
		edit_mode: {
			type: 'boolean',
			default: true,
		},
    },
    
    /**
     * Transform between the block & a shortcode.
     */
    transforms: {
        from: [
            {
                type: 'shortcode',
                tag: 'charitable_donation_form',
                attributes: {

                    // An attribute can be source from the shortcode attributes
                    campaign: {
                        type: 'string',
                        shortcode: ( { named: { campaign_id } } ) => {
                            if ( ! campaign_id ) {
                                return '';
                            }

                            return campaign_id;
                        },
                    },
                },
            },
        ]
    },

    /**
     * Define the block UI.
     */
    edit: props => {
        return <CharitableDonationFormBlock { ... props } />
    },

    /**
     * How the block is saved to the database.
     */
    save: function( props ) {
        if ( ! props.attributes.campaign ) {
            return '';
        }

        const shortcode = '[charitable_donation_form campaign_id=' + props.attributes.campaign + ']';
        
        return <RawHTML>{ shortcode }</RawHTML>;
    },
});