import styled from 'styled-components';

export const Button = styled.button`
	padding: 1em;
	cursor: pointer;
	font-size: .8rem;
`;

export const ButtonContainer = styled.div`align-self: center;`;

export const DeleteButton = styled(Button)`
	background-color: red;
	color: #fff
`;
