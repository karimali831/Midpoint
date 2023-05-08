import './styles.css'

interface IOwnProps {
    count: number
    icon: React.ReactElement
}

export const NotificationIcon = (props: IOwnProps) => {
    const { count, icon } = props

    return (
        <div className="icon-container">
            {icon}
            <div className="count-container">{count}</div>
        </div>
    )
}
