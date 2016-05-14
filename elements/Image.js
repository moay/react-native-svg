import React, {Component, PropTypes} from 'react';
import {requireNativeComponent} from 'react-native';
import extractProps from '../lib/extract/extractProps';
import {ImageAttributes} from '../lib/attributes';
import {numberProp} from '../lib/props';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';


class Image extends Component{
    static displayName = 'Image';
    static propTypes = {
        x: numberProp,
        y: numberProp,
        width: numberProp,
        height: numberProp,
        href: PropTypes.number.isRequired
        //preserveAspectRatio: PropTypes.string
    };


    render() {
        let {props} = this;
        return <RNSVGImage
            {...extractProps(props, {transform: true, responder: true})}
            x={props.x.toString()}
            y={props.y.toString()}
            width={props.width.toString()}
            height={props.height.toString()}
            src={resolveAssetSource(props.href)}
        />;
    }
}

const RNSVGImage = requireNativeComponent('RNSVGImage', null);

export default Image;
