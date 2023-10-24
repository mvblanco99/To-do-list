import propTypes from 'prop-types';
import styleButton from './Button.module.css'

const Button = ({name, fn, task}) => {
  
    const handleClick = () => {
        fn({task})
    }
  
    return (
        <button onClick={handleClick} className={styleButton.input}>{name}</button>
    )
}

Button.propTypes = {
    name : propTypes.string.isRequired,
    fn : propTypes.func.isRequired,
    task : propTypes.object.isRequired
}

export default Button