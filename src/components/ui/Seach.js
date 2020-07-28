import React, { useState }from 'react'

const Seach = ({getQuery}) => {
    const [text, setText] = useState('')
    const onChange = query => {
        setText(query)
        getQuery(query)
    } 

    return (
        <section className="search">
            <form action="">
                <input type="text" 
                className="form-control"
                placeholder="Search Character" 
                value={text}
                onChange={e => onChange(e.target.value)}
                autoFocus    
                />
            </form>
        </section>
    )
}

export default Seach
