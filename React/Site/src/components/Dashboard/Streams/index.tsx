import { useEffect } from 'react'
import './styles.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { BarLoader } from 'react-spinners'
import { motion } from 'framer-motion'
import { GetInstancesAction } from '../../../state/contexts/instance/Actions'
import { getInstanceState } from '../../../state/contexts/instance/Selectors'
import { Ec2InstanceStatus } from '../../../enum/Ec2InstanceStatus'
import { Alert } from '@mui/material'
import moment from 'moment'

export const Streams = () => {
    const { instances, loadingInstances } = useSelector(getInstanceState)

    const dispatch = useDispatch()

    useEffect(() => {
        if (instances.length === 0) {
            dispatch(GetInstancesAction())
        }
    }, [])

    return (
        <>
            <span className="fs28">Streams History</span>

            {loadingInstances ? (
                <BarLoader color="#36d7b7" />
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {instances.length === 0 ? (
                        <Alert severity="info">
                            You have no streams history
                        </Alert>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Started</th>
                                    <th>Ended</th>
                                    <th>Minutes used</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {instances.length > 0 &&
                                    instances.map((instance, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td>
                                                    {moment(
                                                        instance.launchedDate
                                                    ).format(
                                                        'DD/MM/YYYY HH:mm'
                                                    )}
                                                </td>
                                                <td>
                                                    {moment(
                                                        instance.terminatedDate
                                                    ).format(
                                                        'DD/MM/YYYY HH:mm'
                                                    )}
                                                </td>
                                                <td>{instance.minutesUsed}</td>
                                                <td>
                                                    {
                                                        Ec2InstanceStatus[
                                                            instance.status
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    )}
                </motion.div>
            )}
        </>
    )
}
