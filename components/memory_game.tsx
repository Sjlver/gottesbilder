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

        // DEBUG
        //this.state = { cards: shuffleCards(), phase: "match", timeout: null, firstCard: 1, secondCard: 2 };
        //this.state.cards[1].side = "front";
        //this.state.cards[2].side = "front";
    }

    render() {
        const cards = this.state.cards;
        console.log(`Rendering game. Phase is ${this.state.phase}.`);

        let matchPanel = <div className="row-start-1 col-start-1 hidden" />;
        if (this.state.phase == "match") {
            matchPanel = (
                <div className="row-start-1 col-start-1 grid items-center bg-white" onClick={this.match}>
                    <div className="grid grid-cols-2 grid-rows-1 items-center">
                        <MemoryCard card={this.state.cards[this.state.firstCard]} onClick={this.match}></MemoryCard>
                        <MemoryCard card={this.state.cards[this.state.secondCard]} onClick={this.match}></MemoryCard>
                    </div>
                    <div className="text-center">Erklaerung kommt hier.</div>
                </div>
            );
        }

        let endPanel = <div className="row-start-1 col-start-1 hidden" />;
        if (this.state.phase == "end") {
            matchPanel = (
                <div className="row-start-1 col-start-1 grid items-center bg-white" onClick={this.match}>
                    <div className="text-center">Du hast es geschafft!</div>
                </div>
            );
        }


        return (
            <div className="grid grid-cols-1 grid-rows-1 items-stretch">
                <div className="row-start-1 col-start-1 grid grid-cols-3">
                    {cards.map((c, i) => <MemoryCard key={i} card={c} onClick={() => this.cardClick(i)}></MemoryCard>)}
                </div>
                {matchPanel}
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
            this.match();
        }
        console.log(`Clicked card #${cardIndex}`);
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
        console.log("Hello from match.");

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