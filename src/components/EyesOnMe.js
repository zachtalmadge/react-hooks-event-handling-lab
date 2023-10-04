// Code EyesOnMe Component Here

const EyesOnMe = () => {

    let handleFocusEvent = () => {
        console.log('Good!')
    }

    let handleBlurEvent = () => {
        console.log('Hey! Eyes on me!')
    }

    return (
        <button onFocus={handleFocusEvent} onBlur={handleBlurEvent}>Eyes on me</button>
    )
}

export default EyesOnMe