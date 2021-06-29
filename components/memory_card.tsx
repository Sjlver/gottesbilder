import React from "react";

import { cards } from "../public/cards/cards";

export type MemoryCardDefinition = {
  name: string;
  state: "photo" | "verse";
  side: "front" | "back" | "found";
};

export type MemoryCardProps = {
  card: MemoryCardDefinition;
  onClick: () => void;
};

export class MemoryCard extends React.Component<MemoryCardProps, {}> {
  render() {
    if (this.props.card.side == "front") {
      return (
        <div
          className="grid grid-cols-1 grid-rows-1 items-stretch shadow-lg rounded-xl m-1 p-1 bg-white"
          onClick={this.props.onClick}
        >
          <img
            className="row-start-1 col-start-1 rounded-lg"
            src={this.photo()}
            alt=""
          />
          <div
            className={`
              row-start-1 col-start-1 grid items-center rounded-lg bg-white
              ${this.props.card.state == "photo" ? "hidden" : ""}
            `}
          >
            <div className="text-center">
              {cards[this.props.card.name]["front"]}
            </div>
          </div>
        </div>
      );
    } else if (this.props.card.side == "back") {
      return (
        <div
          className="shadow-lg rounded-xl m-1 p-1 bg-white"
          onClick={this.props.onClick}
        >
          <img
            className="rounded-lg"
            src="/gottesbilder/farbtropfen.png"
            alt=""
          />
        </div>
      );
    } else {
      return (
        <div className="invisible" onClick={this.props.onClick}>
          <img
            className="rounded-lg"
            src="/gottesbilder/farbtropfen.png"
            alt=""
          />
        </div>
      );
    }
  }

  // Returns the path to this card's picture, relative to the root of the app.
  private photo() {
    return `/gottesbilder/cards/${cards[this.props.card.name]["photo"]}`;
  }
}
