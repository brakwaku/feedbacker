import styled from 'styled-components';
import PropTypes from 'prop-types'

function Header({ text }) {
    return (
        <Container>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </Container>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header

const Container = styled.header`
    background-color: rgba(0,0,0,0.4);
    color: #FF6A95;
`;