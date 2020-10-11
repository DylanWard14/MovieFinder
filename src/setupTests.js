import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

document.createRange = () => ({
    setStart: jest.fn(),
    setEnd: jest.fn(),
    // @ts-ignore
    commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
    },
});
