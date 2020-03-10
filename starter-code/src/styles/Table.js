import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 2em;
`;

export const ItemRow = styled.div`
	display: flex;
	padding-top: 1em;
	justify-content: space-between;
	width: 40%;
	p {
		width: 20%;
		align-self: center;
		text-align: center;
	}
`;

export const ImageContainer = styled.div`
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
