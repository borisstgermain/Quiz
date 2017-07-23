import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent) {
    class LoaderHOC extends Component {
        render() {
            const { isFetching, error } = this.props;

            if (isFetching) {
                return <div>{"Loading..."}</div>;
            } else if (error) {
                return <div>{`Ooops, ${error}`}</div>;
            } else {
                return <WrappedComponent {...this.props} />;
            }
        }
    };

    const mapStateToProps = ({ quiz }) => {
        const { isFetching, error } = quiz;
        return {
            isFetching,
            error
        };
    };

    return connect(mapStateToProps)(LoaderHOC);
}
