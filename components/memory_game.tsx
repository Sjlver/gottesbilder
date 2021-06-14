import React from 'react'

import { MemoryCardDefinition, MemoryCard } from '../components/memory_card'
import { cards } from '../public/cards/cards'

type MemoryGameState = {
    cards: MemoryCardDefinition[],
    phase: "openFirst" | "openSecond" | "match" | "mismatch" | "end",
    timeout: any,
    firstCard: number | null,
    secondCard: number | null,
};

export class MemoryGame extends React.Component<{}, MemoryGameState> {
    constructor(props: {}) {
        super(props);
        this.state = { cards: shuffleCards(), phase: "openFirst", timeout: null, firstCard: null, secondCard: null };

        this.match = this.match.bind(this);
        this.mismatch = this.mismatch.bind(this);
    }

    render() {
        let matchPanel = <div className="row-start-1 col-start-1 hidden" />;
        if (this.state.phase == "match") {
            const cardData = cards[this.state.cards[this.state.firstCard].name];
            matchPanel = (
                <div className="row-start-1 col-start-1 grid items-center bg-white">
                    <div className="grid grid-cols-2 grid-rows-1 items-center">
                        <MemoryCard card={this.state.cards[this.state.firstCard]} onClick={() => undefined}></MemoryCard>
                        <MemoryCard card={this.state.cards[this.state.secondCard]} onClick={() => undefined}></MemoryCard>
                    </div>
                    <figure className="m-1 p-4">
                        <blockquote className="mb-1" cite={cardData["link"]}>
                            <p>{cardData["verse"]}</p>
                        </blockquote>
                        <figcaption className="text-right">
                            <cite className="font-medium text-blue-400"><a href={cardData["link"]} target="_blank">{cardData["reference"]}, {cardData["translation"]}</a></cite>
                        </figcaption>
                    </figure>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded" onClick={this.match}>Weiterspielen</button>
                </div>
            );
        }

        let endPanel = <div className="row-start-1 col-start-1 hidden" />;
        if (this.state.phase == "end") {
            endPanel = (
                <div className="row-start-1 col-start-1 grid items-center bg-white">
                    <div className="space-y-8">
                        <p className="text-center text-lg">Du hast es geschafft!</p>
                        <p className="text-center">
                            <a href="/gottesbilder/game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded">Nochmal</a>
                        </p>
                    </div>
                </div>
            );
        }


        return (
            <div className="grid grid-cols-1 grid-rows-1 items-stretch">
                <div className="row-start-1 col-start-1 grid grid-cols-3">
                    {this.state.cards.map((c, i) => <MemoryCard key={i} card={c} onClick={() => this.cardClick(i)}></MemoryCard>)}
                </div>
                {matchPanel}
                {endPanel}
            </div>
        );
    }

    cardClick(cardIndex: number) {
        if (this.state.phase == "openFirst") {
            if (this.state.cards[cardIndex].side == "back") {
                const updatedCards = this.state.cards.slice()
                updatedCards[cardIndex].side = "front";
                this.setState({ cards: updatedCards, firstCard: cardIndex, phase: "openSecond" });
            }
        } else if (this.state.phase == "openSecond") {
            if (this.state.cards[cardIndex].side == "back") {
                const updatedCards = this.state.cards.slice()
                updatedCards[cardIndex].side = "front";

                const firstCard = this.state.firstCard;
                const secondCard = cardIndex;
                const nextPhase = this.state.cards[firstCard].name == this.state.cards[secondCard].name ? "match" : "mismatch";
                let timeout = this.state.timeout;

                if (nextPhase == "mismatch") {
                    timeout = setTimeout(this.mismatch, 3000);
                }

                this.setState({
                    cards: updatedCards,
                    phase: nextPhase,
                    timeout: timeout,
                    firstCard: firstCard,
                    secondCard: secondCard
                });
            }
        } else if (this.state.phase == "mismatch") {
            this.mismatch();
        } else if (this.state.phase == "match") {
            // Do nothing. The "match" phase ends when its button is clicked.
        }
    }

    mismatch() {
        if (this.state.phase != "mismatch") return;
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
        }
        const updatedCards = this.state.cards.map(c => {
            c.side = c.side == "front" ? "back" : c.side;
            return c;
        })
        this.setState({ cards: updatedCards, phase: "openFirst", timeout: null });
    }

    match() {
        if (this.state.phase != "match") return;

        const updatedCards = this.state.cards.slice();
        updatedCards[this.state.firstCard].side = "found";
        updatedCards[this.state.secondCard].side = "found";

        const nextPhase = updatedCards.some(c => c.side != "found") ? "openFirst" : "end";

        this.setState({ cards: updatedCards, phase: nextPhase, firstCard: null, secondCard: null});
    }
}

function shuffleCards(): MemoryCardDefinition[] {
    let shuffled = Object.keys(cards);
    for (let i = 0; i < 6; ++i) {
        const randIndex = i + Math.floor(Math.random() * (shuffled.length - i));
        [shuffled[i], shuffled[randIndex]] = [shuffled[randIndex], shuffled[i]];
    }

    let result: MemoryCardDefinition[] = [];
    for (let i = 0; i < 6; ++i) {
        result.push({ name: shuffled[i], state: "photo", side: "back" });
        result.push({ name: shuffled[i], state: "verse", side: "back" });
    }
    for (let i = 0; i < 12; ++i) {
        const randIndex = i + Math.floor(Math.random() * (result.length - i));
        [result[i], result[randIndex]] = [result[randIndex], result[i]];
    }
    return result;
}