import React from 'react';
import Lightbox from 'react-images';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <Lightbox
            images={[{ src: 'https://www.python.org/static/opengraph-icon-200x200.png' }, { src: 'https://www.python.org/static/opengraph-icon-200x200.png' }]}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.closeLightbox}
        />
        )
    }
}