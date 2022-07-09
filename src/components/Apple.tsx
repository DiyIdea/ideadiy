import { useState} from 'react'

const Apple = (props) => {
    //매개변수 사용법
    const {color,frult} = props
    //변수
    const [count, setCount] = useState(0)

    //이벤트 핸들러
    const handleClick = (e) =>{
        e.preventDefault()
        setCount(count +1)
    }
    const test = () => color
    return (
        <>
            <p>abc</p>
            <p>{color}</p>
            <p>{test()}</p>
            <p>{count}</p>
            <button onClick={handleClick}>test</button>
        </>
    )
}
export default Apple