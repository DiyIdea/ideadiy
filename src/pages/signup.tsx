import Signup from '../components/SignUp'
import Head from 'next/head'

const signup = () => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>회원가입</title>
            </Head>
            <Signup />
        </>
    )
}

export default signup