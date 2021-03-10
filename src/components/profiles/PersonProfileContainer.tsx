import React from 'react';

import PersonProfile from "./PersonProfile";

class PersonProfileContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
       
        };
    }

  

    render = () => {

        return (
            <section>
                <PersonProfile />
            </section>
        );
    }
}

export default PersonProfileContainer;