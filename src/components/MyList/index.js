import react, { useEffect, useState } from 'react';

function MyList() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(test => {
                return test.json()
            })
            .then(results => setArr(results))
    }, [])



    return (
        <>
            {
                arr.map((item, index) => <li key={index.toString()}>
                    {item.id}
                    <img src={item.avatar_url} height={50} />
                </li>)
            }
        </>
    )
};

export default MyList;