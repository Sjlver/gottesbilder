import React, { SyntheticEvent } from "react";

import { NextRouter, withRouter } from "next/router";
import Link from "next/link";

type BackLinkState = {
    confirming: boolean,
};

type BackLinkProps = {
    router: NextRouter,
};

class BackLink extends React.Component<BackLinkProps, BackLinkState> {
    CONFIRMATION_TIMEOUT = 5000;

    constructor(props: BackLinkProps) {
        super(props);
        this.state = { confirming: false };
        this.click = this.click.bind(this);
    }

    render() {
        if (this.state.confirming) {
            return (
                <div>
                    <Link href="/"><a className="text-blue-400" onClick={this.click}>« Spiel beenden und zurück</a></Link> zum Menu
                </div>
            );
        } else {
            return (
                <div>
                    <Link href="/"><a className="text-blue-400" onClick={this.click}>« Zurück</a></Link> zum Menu
                </div>
            );
        }
    }

    click(e: SyntheticEvent) {
        e.preventDefault();
        if (this.state.confirming) {
            this.props.router.back();
        } else {
            this.setState({ confirming: true });
            setTimeout(() => this.setState({ confirming: false }), this.CONFIRMATION_TIMEOUT)
        }
    }
}

export default withRouter(BackLink);