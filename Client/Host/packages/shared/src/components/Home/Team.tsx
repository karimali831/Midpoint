import React from "react"
import { PersonCard } from "./PersonCard"

export const MeetTheTeam = () => {
    React.useEffect(() => { }, [])

    return (
        <div style={{
            marginTop: 100,
            display: 'grid',
            width: '100%',
            gridGap: 10,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 0fr))',
            justifyContent: 'center'
        }}>

            <div style={{ position: 'relative', flexDirection: 'column' }}>
                <span style={{
                    fontSize: 32,
                    position: 'absolute',
                    marginBottom: 30,
                    top: -60
                }}>
                    Meet the team
                </span>
                <PersonCard name='Adam' title='CEO' />

            </div>
            <PersonCard name='Karim' title='MidPoint. Developer' />
            <PersonCard name='Patrick van der Mark' title='UI/UX Designer' />
            <PersonCard name='Jeff' title='MetaVerse Venue Creator' />
        </div>
    )
}