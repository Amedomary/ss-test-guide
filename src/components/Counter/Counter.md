### Пример компонента родителя

```jsx
const Demo = () => {
    const [count, setCount] = useState(1);
    
    const updateCount = (value) => {
        setCount(value)
    }

    return (
        <Counter
            step={1}
            minValue={1}
            maxValue={30}
            count={ count }
            updateCount={ updateCount }
        />
    );
};

Demo.displayName = "Demo";

export default Demo;
```