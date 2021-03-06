import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
/**
 * Status: *finished*.
 *
 * Used for showing lists of products like subscriptions and services, in a less "in your face" manner than the Subscription component.
 */
const ProductList = ({ items = [] }) =>
    <div className="product-list">
        {items.map((item, index) => {
            const icon = <SvgIcon className="product-list__item-icon" iconName={item.iconName} color={item.iconColor} />;
            const content = (
                <div className="product-list__item-content">
                    <div className="product-list__item-heading">{item.title}</div>
                    {item.description && <div className="product-list__item-description">{item.description}</div>}
                </div>
            );

            if (item.href) {
                return (
                    <a href={item.href} key={index} className="product-list__item product-list__item--link">
                        {icon}
                        {content}
                        <SvgIcon className="product-list__item--link-icon" iconName="ico_linkarrow" color="purple" />
                    </a>
                );
            }

            return (
                <article key={index} className="product-list__item">
                    {icon}
                    {content}
                </article>
            );
        })}
    </div>;

ProductList.propTypes = {
    /** An array of items where each item can have properties of icon name, icon color, title, description and href. */
    items: PropTypes.arrayOf(PropTypes.shape({
        /** Name of the icon e.g. arrow_ico */
        iconName: PropTypes.string.isRequired,
        /** Color of the icon (white, black or purple) */
        iconColor: PropTypes.oneOf(['white', 'black', 'purple']),
        /** Title of product */
        title: PropTypes.string.isRequired,
        /** Description of product */
        description: PropTypes.string,
        /** A link to the product */
        href: PropTypes.string
    }))
};

export default ProductList;