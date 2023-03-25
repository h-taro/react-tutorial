import React from 'react';

type SquareProps = {
    value: string | null;
    onClick: () => void;
}

export class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}