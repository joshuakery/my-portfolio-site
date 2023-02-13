//https://www.npmjs.com/package/gatsby-dynamic-image?activeTab=explore

import React from "react";
import { createElement } from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function _objectWithoutProperties(obj, keys)
{
    var target = {};
    for (var i in obj)
    {
        if (keys.indexOf(i) >= 0)
            continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
        
        target[i] = obj[i];
    }
    return target;
}

var _extends = Object.assign ||
               function (target)
               {
                    for (var i = 1; i < arguments.length; i++)
                    {
                        var source = arguments[i];
                        for (var key in source)
                        {
                            if (Object.prototype.hasOwnProperty.call(source, key))
                            {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };


function MyGatsbyImage(_ref)
{
    const node = _ref.node;
    const props = _objectWithoutProperties(_ref, ['node']);

    if (node.childImageSharp) {
        const image = getImage(node);
        return <GatsbyImage image={image} {...props} />
    }
    
    return createElement( 'img', _extends({ src: node.publicURL }, props) );
}

export default MyGatsbyImage;