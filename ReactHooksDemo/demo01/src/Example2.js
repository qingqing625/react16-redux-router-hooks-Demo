import React,{ useState } from 'react';

function Example2(){
    const [age,setAge] = useState(18)
    const [sex,setSex] = useState('女')
    const [work,setWork] = useState('学生')
    return(
        <div>
            <p>FQ 今年：{age}岁</p>
            <p>性别：{sex}</p>
            <p>工作是：{work}</p>
        </div>
    )
}

export default Example2;