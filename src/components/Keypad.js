// Code Keypad Component Here

function Keypad (){

    const handleInput = (e) => console.log('Entering password...') 

    return (
        <div>
            <input onChange={handleInput} type="password" />
        </div>
    )
}

export default Keypad;