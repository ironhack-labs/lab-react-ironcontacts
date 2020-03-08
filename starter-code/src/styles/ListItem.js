import styled from 'styled-components';

export const ItemRow = styled.div`
	display: flex;
	padding-top: 1em;
	justify-content: center;

	p {
		width: 20%;
		align-self: center;
		text-align: center;
	}

	p:last-child {
		width: 10%;
	}
`;

export const ImageContainer = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	img {
		width: 5em;
	}
`;

export const TableHeader = styled(ItemRow)`
    font-weight: bold;
    font-size: 1.5rem;
`;
