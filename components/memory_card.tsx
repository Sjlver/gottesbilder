import React from 'react'

import { cards } from '../public/cards/cards'

export type MemoryCardState = {
    cardName: string,
    state: "photo" | "verse"
};

export class MemoryCard extends React.Component<MemoryCardState, {}> {
    render() {
        return (
            <div className="grid grid-cols-1 grid-rows-1 items-stretch shadow-lg rounded-xl m-1 p-1 bg-white">
                <img className="row-start-1 col-start-1 rounded-lg" src={this.photo()} alt="" />
                <div className={`
                        row-start-1 col-start-1 grid items-center rounded-lg bg-white
                        ${this.props.state == "photo" ? "hidden" : ""}
                `}>
                    <div>Ich bin ein {this.props.cardName}</div>
                </div>
            </div>
        );
    }

    // Returns the path to this card's picture, relative to the root of the app.
    private photo() {
        return `cards/${cards[this.props.cardName]["photo"]}`;
    }
}