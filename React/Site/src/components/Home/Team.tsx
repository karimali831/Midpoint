import { PersonCard } from "./PersonCard"

export const MeetTheTeam = () => {
    return (
        <div className="meet-team-container separate-margin2">
            <div className="meet-team">
                <span className="headline">
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