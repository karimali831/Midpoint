import React from "react"

interface IOwnProps {
    data: string | number
    title: string
    desc?: string
}

export const Details: React.FC<IOwnProps> = (props) => {
    React.useEffect(() => { }, [])

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <span style={{ fontSize: 32, marginRight: 15 }}>{props.data}</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 15 }}>{props.title}</span>
                    {
                        props.desc &&
                        <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 11, marginTop: 1 }}>{props.desc}</span>
                    }
                </div>
            </div>
            <hr style={{ border: '#195DC4 1px solid', marginTop: 20 }} />
        </div>
    )
}