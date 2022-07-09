import {useEffect, useState } from 'react'
import axios from 'axios'
import {apiInstance} from '../apis/setting'

const test = () => {
    const [message, setMessage] = useState('')

    //Get Method
    useEffect(() => {
        const apiRequest = async () => {
            const response = await apiInstance.get('/.basket/Apple')
            setMessage(response.data.body.massage)
        }
        apiRequest()
    }, [])

    // Post Method
    const handleSubmit = async (e) => {
        e.preventDefault()
        const apiInstance = await axios. create({
            baseURL:
                'https://fv3p699st7.execute-api.ap-northeast-2.amazonaws.com/development',
        })
        await apiInstance.post('/basket/apple',{})
    }
    return (
        <>
            <p>test</p>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' />
                <input type='submit' />
            </form>
        </>
    )
}

export default test