
import CheatSheet from '../../components/CheatSheet';
import Cheat from '../../components/Cheat';

export default () => (
    <CheatSheet
        color="#15C213"
        title="Jest"
    >
        
        <Cheat
            caption="Create a mock function."
            code="const mockFn = jest.fn()"
            language="javascript"
        />

        <Cheat
            caption="Assert the number of times the mock function has been called."
            code="expect(mockFn.mock.calls.length).toBe(2);"
            language="javascript"
        />

        <Cheat
            caption="Assert the value of the first argument the first time the mock function was called."
            code="expect(mockFn.mock.calls[0][1]).toBe(action);"
            language="javascript"
        />

        <Cheat
            caption="Set the return value of the mock function."
            code="expect(mockFn.mockReturnValueOnce(false).mockReturnValue(true);"
            language="javascript"
        />
        
    </CheatSheet>
);