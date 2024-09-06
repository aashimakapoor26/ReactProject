import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from '../mocks/resCardMock.json';

test('should render restaurant card with props data', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
});