import React from 'react'

import { cards } from '../public/cards/cards'

export type MemoryCardDefinition = {
    cardName: string,
    state: "photo" | "verse"
};

type MemoryCardState = {
    side: "front" | "back"
};

export class MemoryCard extends React.Component<MemoryCardDefinition, MemoryCardState> {
    constructor(props: MemoryCardDefinition) {
        super(props);
        this.state = {side: "back"};
        this.flip = this.flip.bind(this);
    }

    render() {
        if (this.state.side == "front") {
            return (
                <div className="grid grid-cols-1 grid-rows-1 items-stretch shadow-lg rounded-xl m-1 p-1 bg-white" onClick={this.flip}>
                    <img className="row-start-1 col-start-1 rounded-lg" src={this.photo()} alt="" />
                    <div className={`
                            row-start-1 col-start-1 grid items-center rounded-lg bg-white
                            ${this.props.state == "photo" ? "hidden" : ""}
                    `}>
                        <div className="text-center">Ich bin ein {this.props.cardName}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="shadow-lg rounded-xl m-1 p-1 bg-white" onClick={this.flip}>
                    <img className="rounded-lg" src="farbtropfen.png" alt="" />
                </div>
            );

        }
    }

    // Returns the path to this card's picture, relative to the root of the app.
    private photo() {
        return `cards/${cards[this.props.cardName]["photo"]}`;
    }

    // Flips a card over to the other side.
    private flip() {
        this.setState({side: this.state.side == "front" ? "back" : "front"});
    }
}