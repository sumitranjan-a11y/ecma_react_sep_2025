import Counter from "./Counter";
import CounterSibling from "./CounterSibling";

const CounterRoot = () => {
    return (
        <div>
            <Counter />
            <hr />
            <CounterSibling interval={10} /> 
        </div>
    );
};

export default CounterRoot;